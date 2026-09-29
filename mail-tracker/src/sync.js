import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import { classifyEmail } from "./classify.js";
import { matchEmail, looksLikeApplicationMail } from "./match.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRACKER = path.resolve(__dirname, "..");
loadEnv({ path: path.join(TRACKER, ".env") });

const APPS_PATH = path.join(TRACKER, "data", "applications.json");
const STATUS_PATH = path.join(TRACKER, "data", "status.json");

function emptyStatus(applications) {
  const byApp = {};
  for (const a of applications) {
    byApp[a.id] = {
      appId: a.id,
      status: "offen",
      confidence: 0,
      matchedEmail: null,
      manualOverride: false,
      updatedAt: null,
    };
  }
  return {
    updatedAt: null,
    processedMessageIds: [],
    applications: byApp,
    unmatched: [],
  };
}

function loadJson(p, fallback) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function saveStatus(status) {
  fs.mkdirSync(path.dirname(STATUS_PATH), { recursive: true });
  fs.writeFileSync(STATUS_PATH, JSON.stringify(status, null, 2));
}

function snippet(text, max = 180) {
  const s = String(text || "")
    .replace(/\s+/g, " ")
    .trim();
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
}

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing ${name}. Copy .env.example to .env and set credentials.`);
    process.exit(1);
  }
  return v;
}

async function fetchEmails() {
  const host = process.env.IMAP_HOST || "imaps.bluewin.ch";
  const port = Number(process.env.IMAP_PORT || 993);
  const user = requireEnv("IMAP_USER");
  const pass = requireEnv("IMAP_PASS");
  const mailbox = process.env.IMAP_MAILBOX || "INBOX";
  const lookbackDays = Number(process.env.IMAP_LOOKBACK_DAYS ?? 120);

  const client = new ImapFlow({
    host,
    port,
    secure: true,
    auth: { user, pass },
    logger: false,
  });

  await client.connect();
  const lock = await client.getMailboxLock(mailbox);
  const emails = [];
  try {
    let search = { all: true };
    if (lookbackDays > 0) {
      const since = new Date();
      since.setDate(since.getDate() - lookbackDays);
      search = { since };
    }

    for await (const msg of client.fetch(search, {
      uid: true,
      envelope: true,
      source: true,
    })) {
      let parsed;
      try {
        parsed = await simpleParser(msg.source);
      } catch {
        continue;
      }
      const messageId =
        parsed.messageId ||
        msg.envelope?.messageId ||
        `uid-${msg.uid}`;
      const from =
        parsed.from?.text ||
        (msg.envelope?.from || [])
          .map((a) => `${a.name || ""} <${a.address || ""}>`.trim())
          .join(", ");
      const subject = parsed.subject || msg.envelope?.subject || "";
      const text =
        parsed.text ||
        (parsed.html
          ? String(parsed.html).replace(/<[^>]+>/g, " ")
          : "") ||
        "";
      const date =
        (parsed.date && parsed.date.toISOString()) ||
        (msg.envelope?.date && new Date(msg.envelope.date).toISOString()) ||
        null;

      emails.push({
        messageId,
        uid: msg.uid,
        from,
        subject,
        text,
        date,
      });
    }
  } finally {
    lock.release();
    await client.logout();
  }
  return emails;
}

async function main() {
  if (!fs.existsSync(APPS_PATH)) {
    console.log("No applications index — running build-index first…");
    await import("./build-index.js");
  }

  const index = loadJson(APPS_PATH, null);
  if (!index?.applications?.length) {
    console.error("applications.json empty. Run: npm run index");
    process.exit(1);
  }

  const applications = index.applications;
  let status = loadJson(STATUS_PATH, null);
  if (!status) status = emptyStatus(applications);

  // Ensure every app has an entry
  for (const a of applications) {
    if (!status.applications[a.id]) {
      status.applications[a.id] = {
        appId: a.id,
        status: "offen",
        confidence: 0,
        matchedEmail: null,
        manualOverride: false,
        updatedAt: null,
      };
    }
  }

  const processed = new Set(status.processedMessageIds || []);
  console.log(`Connecting IMAP… (${applications.length} apps indexed)`);
  const emails = await fetchEmails();
  console.log(`Fetched ${emails.length} messages`);

  let newCount = 0;
  let matchedCount = 0;
  const unmatched = [...(status.unmatched || [])];
  const unmatchedIds = new Set(unmatched.map((u) => u.messageId));

  for (const email of emails) {
    if (processed.has(email.messageId)) continue;
    processed.add(email.messageId);
    newCount++;

    const classified = classifyEmail(email);
    const match = matchEmail(email, applications);
    const appRelevant =
      looksLikeApplicationMail(email) ||
      classified.status !== "unklar" ||
      match;

    if (!appRelevant) continue;

    const payload = {
      messageId: email.messageId,
      from: email.from,
      subject: email.subject,
      date: email.date,
      snippet: snippet(email.text || email.subject),
      classification: classified.status,
      confidence: classified.confidence,
      reasons: classified.reasons,
    };

    if (!match) {
      if (!unmatchedIds.has(email.messageId)) {
        unmatched.push({ ...payload, matchHits: [] });
        unmatchedIds.add(email.messageId);
      }
      continue;
    }

    matchedCount++;
    const entry = status.applications[match.appId];
    if (entry?.manualOverride) {
      // keep manual status; still record last seen mail if empty
      if (!entry.matchedEmail) {
        entry.matchedEmail = { ...payload, matchHits: match.hits };
        entry.updatedAt = new Date().toISOString();
      }
      continue;
    }

    // Prefer decisive statuses over unklar; don't downgrade absage/zusage to unklar
    const rank = { offen: 0, unklar: 1, zusage: 2, absage: 2 };
    const incoming = classified.status;
    const current = entry.status;
    const shouldUpdate =
      current === "offen" ||
      (rank[incoming] || 0) > (rank[current] || 0) ||
      (incoming === current &&
        (classified.confidence || 0) > (entry.confidence || 0));

    if (shouldUpdate && incoming !== "unklar") {
      entry.status = incoming;
      entry.confidence = classified.confidence;
      entry.matchedEmail = { ...payload, matchHits: match.hits };
      entry.updatedAt = new Date().toISOString();
    } else if (shouldUpdate && incoming === "unklar" && current === "offen") {
      entry.status = "unklar";
      entry.confidence = classified.confidence;
      entry.matchedEmail = { ...payload, matchHits: match.hits };
      entry.updatedAt = new Date().toISOString();
    } else if (!entry.matchedEmail) {
      entry.matchedEmail = { ...payload, matchHits: match.hits };
      entry.updatedAt = new Date().toISOString();
    }
  }

  status.processedMessageIds = [...processed];
  status.unmatched = unmatched.slice(-100);
  status.updatedAt = new Date().toISOString();
  saveStatus(status);

  console.log(
    `Done. New messages: ${newCount}, matched: ${matchedCount}, unmatched kept: ${status.unmatched.length}`
  );
  console.log(`Wrote ${path.relative(TRACKER, STATUS_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
