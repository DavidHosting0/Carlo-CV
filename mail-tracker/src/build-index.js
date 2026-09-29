import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const OUT = path.resolve(__dirname, "../data/applications.json");

function listAppDirs(baseRel) {
  const base = path.join(ROOT, baseRel);
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_") && !d.name.startsWith("."))
    .filter((d) => fs.existsSync(path.join(base, d.name, "content.js")))
    .map((d) => d.name);
}

/**
 * Extract string field from content.js without full JS eval.
 */
function extractField(src, field) {
  const re = new RegExp(`${field}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`);
  const m = src.match(re);
  return m ? m[1].trim() : null;
}

function parseContentJs(folder, quelle) {
  const file = path.join(ROOT, quelle, folder, "content.js");
  const src = fs.readFileSync(file, "utf8");
  const arbeitgeberZiel = extractField(src, "arbeitgeberZiel");
  const zielposition = extractField(src, "zielposition");

  let firma = arbeitgeberZiel || folder;
  let ort = "";
  if (arbeitgeberZiel) {
    // "Firma - Ort..." or "Firma, Ort"
    const parts = arbeitgeberZiel.split(/\s[-–—]\s|,\s*/);
    firma = parts[0].trim();
    if (parts.length > 1) ort = parts[parts.length - 1].trim();
  }

  // Prefer last segment of folder as ort hint: fusion-arena-bern → bern
  const slugParts = folder.split("-");
  if (!ort && slugParts.length > 1) {
    ort = slugParts[slugParts.length - 1];
    ort = ort.charAt(0).toUpperCase() + ort.slice(1);
  }

  const aliases = [];
  if (arbeitgeberZiel) aliases.push(arbeitgeberZiel);
  // Short brand from slug first token(s)
  if (slugParts.length >= 1) aliases.push(slugParts[0]);

  return {
    id: folder,
    firma,
    titel: zielposition || "",
    ziel: zielposition || "",
    ort,
    arbeitgeber: arbeitgeberZiel || firma,
    quelle,
    folder: path.join(quelle, folder),
    aliases,
  };
}

function loadManifest() {
  const p = path.join(ROOT, "scraper-applications", "manifest.json");
  if (!fs.existsSync(p)) return new Map();
  const list = JSON.parse(fs.readFileSync(p, "utf8"));
  return new Map(list.map((j) => [j.id, j]));
}

function build() {
  const manifest = loadManifest();
  const apps = [];

  for (const id of listAppDirs("applications")) {
    apps.push(parseContentJs(id, "applications"));
  }

  for (const id of listAppDirs("scraper-applications")) {
    const fromContent = parseContentJs(id, "scraper-applications");
    const m = manifest.get(id);
    if (m) {
      apps.push({
        ...fromContent,
        firma: m.firma || fromContent.firma,
        titel: m.titel || fromContent.titel,
        ziel: m.ziel || fromContent.ziel,
        ort: m.ort || fromContent.ort,
        arbeitgeber: m.arbeitgeber || fromContent.arbeitgeber,
        link: m.link || null,
        aliases: [
          ...(fromContent.aliases || []),
          m.firma,
          m.arbeitgeber,
          m.ziel,
        ].filter(Boolean),
      });
    } else {
      apps.push(fromContent);
    }
  }

  // Deduplicate by id (prefer scraper overlay already merged)
  const byId = new Map();
  for (const a of apps) byId.set(a.id, a);
  const list = [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: list.length,
        applications: list,
      },
      null,
      2
    )
  );
  console.log(`Indexed ${list.length} applications → ${path.relative(ROOT, OUT)}`);
}

build();
