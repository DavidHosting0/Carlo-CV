/**
 * Match emails to indexed applications by firma / ort / stellen keywords.
 */

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9äöü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Drop legal suffixes / noise for better matching */
function firmaCore(firma) {
  return normalize(firma)
    .replace(
      /\b(ag|gmbh|sarl|sa|genossenschaft|gen|detailhandels|mobile|schweiz|group|holding)\b/g,
      " "
    )
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s, minLen = 3) {
  return normalize(s)
    .split(" ")
    .filter((t) => t.length >= minLen);
}

/**
 * Build searchable keywords for an application entry.
 * @param {object} app
 */
export function appKeywords(app) {
  const set = new Set();
  for (const part of [
    app.firma,
    firmaCore(app.firma),
    app.ort,
    app.titel,
    app.ziel,
    app.arbeitgeber,
    ...(app.aliases || []),
  ]) {
    if (!part) continue;
    set.add(normalize(part));
    for (const t of tokens(part, 4)) set.add(t);
  }
  // folder slug pieces: volg-kandersteg → volg, kandersteg
  if (app.id) {
    for (const piece of String(app.id).split("-")) {
      if (piece.length >= 4) set.add(normalize(piece));
    }
  }
  return [...set].filter(Boolean);
}

/**
 * Score how well an email matches an application.
 * @returns {{ appId: string, score: number, hits: string[] } | null}
 */
export function scoreMatch(email, app) {
  const blob = normalize(
    [email.subject, email.from, email.text].filter(Boolean).join("\n")
  );
  const keywords = appKeywords(app);
  const hits = [];
  let score = 0;

  const firma = firmaCore(app.firma);
  if (firma && firma.length >= 3 && blob.includes(firma)) {
    score += 8;
    hits.push(`firma:${firma}`);
  }

  if (app.ort) {
    const ort = normalize(app.ort);
    // skip very generic locations alone
    if (ort && ort !== "bern" && blob.includes(ort)) {
      score += 3;
      hits.push(`ort:${ort}`);
    } else if (ort === "bern" && firma && blob.includes(firma) && blob.includes("bern")) {
      score += 1;
      hits.push("ort:bern");
    }
  }

  for (const kw of keywords) {
    if (kw.length < 5) continue;
    if (blob.includes(kw) && !hits.some((h) => h.includes(kw))) {
      score += 1;
      hits.push(`kw:${kw}`);
    }
  }

  if (score < 5) return null;
  return { appId: app.id, score, hits };
}

/**
 * Pick best application match for an email.
 * @param {object} email
 * @param {object[]} applications
 */
export function matchEmail(email, applications) {
  let best = null;
  for (const app of applications) {
    const m = scoreMatch(email, app);
    if (!m) continue;
    if (!best || m.score > best.score) best = m;
  }
  return best;
}

/**
 * Heuristic: is this likely a job-application related mail at all?
 */
export function looksLikeApplicationMail(email) {
  const blob = normalize(
    [email.subject, email.from, email.text].filter(Boolean).join("\n")
  );
  const signals = [
    "bewerbung",
    "bewerber",
    "stelle",
    "stellenangebot",
    "vorstellungsgesprach",
    "vorstellungsgespraech",
    "interview",
    "absage",
    "zusage",
    "recruiting",
    "personal",
    "hr ",
    "human resources",
    "karriere",
    "jobs.ch",
    "indeed",
  ];
  return signals.some((s) => blob.includes(s));
}
