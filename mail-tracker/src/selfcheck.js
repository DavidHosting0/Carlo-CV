/**
 * Offline self-check for classify + match (no IMAP).
 * Run: node src/selfcheck.js
 */
import { classifyEmail } from "./classify.js";
import { matchEmail, looksLikeApplicationMail } from "./match.js";

const apps = [
  {
    id: "volg-kandersteg",
    firma: "Volg Detailhandels AG",
    titel: "Verkäuferin, Verkäufer",
    ort: "Kandersteg",
    arbeitgeber: "Volg Detailhandels AG, Kandersteg",
    aliases: ["Volg"],
  },
  {
    id: "sando-bern",
    firma: "Sando BBZ Sàrl",
    titel: "Chef de Partie",
    ort: "Bern",
    arbeitgeber: "Sando BBZ Sàrl - Sando Bern",
    aliases: ["Sando"],
  },
];

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const absage = classifyEmail({
  subject: "Ihre Bewerbung bei Volg",
  from: "hr@volg.ch",
  text: "Leider müssen wir Ihnen absagen. Die Stelle ist bereits besetzt.",
});
assert(absage.status === "absage", `expected absage, got ${absage.status}`);

const zusage = classifyEmail({
  subject: "Einladung zum Vorstellungsgespräch",
  from: "jobs@sando.ch",
  text: "Wir freuen uns, Sie kennenzulernen und laden Sie zum Interview ein.",
});
assert(zusage.status === "zusage", `expected zusage, got ${zusage.status}`);

const match = matchEmail(
  {
    subject: "Bewerbung Verkäufer Kandersteg",
    from: "personal@volg.ch",
    text: "Ihre Bewerbung bei der Volg Detailhandels AG in Kandersteg",
  },
  apps
);
assert(match?.appId === "volg-kandersteg", `match failed: ${JSON.stringify(match)}`);

assert(
  looksLikeApplicationMail({
    subject: "Ihre Bewerbung",
    text: "Vielen Dank für Ihre Bewerbung",
  }),
  "should look like application mail"
);

console.log("selfcheck ok");
