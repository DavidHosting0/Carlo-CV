/**
 * Keyword-based classification of German job-application replies.
 * Returns: { status: 'zusage'|'absage'|'unklar', confidence: number, reasons: string[] }
 */

const ABSAGE = [
  "leider",
  "absage",
  "abgesagt",
  "nicht berücksichtigen",
  "nicht berücksichtig",
  "keine berücksichtigung",
  "andere bewerber",
  "andere kandidat",
  "stellenbesetzung",
  "stelle bereits besetzt",
  "position bereits besetzt",
  "kein passendes profil",
  "nicht dem profil",
  "entspricht nicht",
  "müssen wir absagen",
  "müssen wir ihnen absagen",
  "können wir nicht zusagen",
  "nicht in die engere auswahl",
  "nicht weiterverfolgen",
  "bewerbung abgelehnt",
  "haben uns für eine andere",
  "für einen anderen bewerber",
  "entscheidung ist auf einen anderen",
];

const ZUSAGE = [
  "zusage",
  "einstellung",
  "einstellen",
  "anstellungsvertrag",
  "arbeitsvertrag",
  "vorstellungsgespräch",
  "vorstellungsgespraech",
  "kennenlerngespräch",
  "kennenlerngespraech",
  "interview",
  "terminvereinbarung",
  "termin vereinbaren",
  "freuen uns auf das gespräch",
  "freuen uns sie kennenzulernen",
  "laden sie ein",
  "möchten sie einladen",
  "moechten sie einladen",
  "einladung zum",
  "probezeit",
  "stellenangebot unterbreiten",
  "jobangebot",
  "wir möchten ihnen die stelle",
  "wir moechten ihnen die stelle",
  "herzlich willkommen im team",
  "wir bieten ihnen die stelle",
];

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, " ")
    .trim();
}

function countHits(haystack, phrases) {
  const hits = [];
  for (const p of phrases) {
    if (haystack.includes(normalize(p))) hits.push(p);
  }
  return hits;
}

/**
 * @param {{ subject?: string, text?: string, from?: string }} email
 */
export function classifyEmail(email) {
  const blob = normalize(
    [email.subject, email.text, email.from].filter(Boolean).join("\n")
  );

  const absageHits = countHits(blob, ABSAGE);
  const zusageHits = countHits(blob, ZUSAGE);

  if (absageHits.length && zusageHits.length) {
    // Conflicting signals → unklar, but prefer absage if clearly stronger
    if (absageHits.length >= zusageHits.length + 2) {
      return {
        status: "absage",
        confidence: 0.55,
        reasons: [...absageHits, `Konflikt mit: ${zusageHits.join(", ")}`],
      };
    }
    return {
      status: "unklar",
      confidence: 0.4,
      reasons: [
        `Absage-Signals: ${absageHits.join(", ") || "—"}`,
        `Zusage-Signals: ${zusageHits.join(", ") || "—"}`,
      ],
    };
  }

  if (absageHits.length) {
    return {
      status: "absage",
      confidence: Math.min(0.95, 0.55 + absageHits.length * 0.1),
      reasons: absageHits,
    };
  }

  if (zusageHits.length) {
    return {
      status: "zusage",
      confidence: Math.min(0.95, 0.55 + zusageHits.length * 0.1),
      reasons: zusageHits,
    };
  }

  return {
    status: "unklar",
    confidence: 0.2,
    reasons: ["Keine klaren Zu-/Absage-Keywords"],
  };
}
