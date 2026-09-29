import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TRACKER = path.resolve(__dirname, "..");
loadEnv({ path: path.join(TRACKER, ".env") });

const APPS_PATH = path.join(TRACKER, "data", "applications.json");
const STATUS_PATH = path.join(TRACKER, "data", "status.json");
const PORT = Number(process.env.DASH_PORT || 3847);

function readJson(p) {
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeStatus(status) {
  fs.mkdirSync(path.dirname(STATUS_PATH), { recursive: true });
  fs.writeFileSync(STATUS_PATH, JSON.stringify(status, null, 2));
}

const app = express();
app.use(express.json());
app.use(express.static(path.join(TRACKER, "public")));

app.get("/api/state", (_req, res) => {
  const index = readJson(APPS_PATH);
  const status = readJson(STATUS_PATH);
  if (!index) {
    return res.status(404).json({
      error: "Kein Index. Bitte npm run index ausführen.",
    });
  }

  const byId = status?.applications || {};
  const rows = index.applications.map((a) => {
    const s = byId[a.id] || {
      status: "offen",
      confidence: 0,
      matchedEmail: null,
      manualOverride: false,
      updatedAt: null,
    };
    return {
      id: a.id,
      firma: a.firma,
      titel: a.titel || a.ziel || "",
      ort: a.ort || "",
      quelle: a.quelle,
      folder: a.folder,
      link: a.link || null,
      status: s.status,
      confidence: s.confidence,
      matchedEmail: s.matchedEmail,
      manualOverride: !!s.manualOverride,
      updatedAt: s.updatedAt,
    };
  });

  res.json({
    updatedAt: status?.updatedAt || null,
    count: rows.length,
    applications: rows,
    unmatched: status?.unmatched || [],
  });
});

app.post("/api/override", (req, res) => {
  const { appId, status: newStatus } = req.body || {};
  const allowed = new Set(["offen", "zusage", "absage", "unklar"]);
  if (!appId || !allowed.has(newStatus)) {
    return res.status(400).json({ error: "appId und gültiger status nötig" });
  }

  let status = readJson(STATUS_PATH);
  if (!status) {
    const index = readJson(APPS_PATH);
    if (!index) return res.status(404).json({ error: "Kein Index" });
    status = {
      updatedAt: null,
      processedMessageIds: [],
      applications: {},
      unmatched: [],
    };
    for (const a of index.applications) {
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

  if (!status.applications[appId]) {
    status.applications[appId] = {
      appId,
      status: "offen",
      confidence: 0,
      matchedEmail: null,
      manualOverride: false,
      updatedAt: null,
    };
  }

  const entry = status.applications[appId];
  entry.status = newStatus;
  entry.manualOverride = true;
  entry.confidence = 1;
  entry.updatedAt = new Date().toISOString();
  status.updatedAt = entry.updatedAt;
  writeStatus(status);
  res.json({ ok: true, entry });
});

app.post("/api/clear-override", (req, res) => {
  const { appId } = req.body || {};
  if (!appId) return res.status(400).json({ error: "appId nötig" });
  const status = readJson(STATUS_PATH);
  if (!status?.applications?.[appId]) {
    return res.status(404).json({ error: "Nicht gefunden" });
  }
  status.applications[appId].manualOverride = false;
  status.updatedAt = new Date().toISOString();
  writeStatus(status);
  res.json({ ok: true });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Dashboard: http://localhost:${PORT}`);
});
