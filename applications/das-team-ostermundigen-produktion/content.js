/**
 * Bewerbungsmappe DE + EN
 * das team ag - Produktionsmitarbeiter/in 60-100%, Ostermundigen
 * Stelle: https://www.job-room.ch/job-search/210f3908-3c94-4b8d-a466-81dc3a073092
 * Kontakt: Larissa Zehnder, l.zehnder@team.jobs, +41 31 313 39 39
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "das team ag, 3072 Ostermundigen",
};

const CV_I18N = {
  de: {
    ui: {
      profil: "Profil",
      erfahrung: "Praxiserfahrung",
      ausbildung: "Ausbildung",
      sprachen: "Sprachen",
      skills: "Qualifikationen",
      projekte: "Projekte & Nebenleistungen",
      zeugnisse: "Zeugnisse & Nachweise",
      zeugnisseIntro: "Anlagen: Abgangszeugnis und Schulzeugnis.",
      foto: "Foto",
      fotoHint: "einfügen",
      alterSuffix: "Jahre",
      nationalitaetLabel: "Nationalität",
      wohnortPrefix: "wohnhaft in",
      betreffPrefix: "Bewerbung als",
      printHint: "Zum PDF: Strg+P → „Als PDF speichern“ (Ränder: Standard/Keine).",
      printBtn: "Drucken / PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Produktionsmitarbeiter 60-100%",
    nationalitaet: "deutsch",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne nahe Oberbottigen in Bern. In Minijobs in der Gastronomie habe ich gelernt, unter Tempo zuverlässig und sorgfältig zu arbeiten. Als Produktionsmitarbeiter in Ostermundigen möchte ich beim Auffüllen, Kontrollieren und Verpacken von Molkereiprodukten mit anpacken und im 3-Schicht-Modell mitarbeiten.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule und danach Minijobs mit Schichtarbeit und körperlicher Arbeit in Deutschland.",
    },
    zeugnisse: [
      {
        titel: "Abgangszeugnis",
        datei: "Abgangszeugniss.png",
        hinweis: "Gesamtschule Marienheide · Abgang 16.01.2026",
      },
      {
        titel: "Schulzeugnis (Leistungsübersicht)",
        datei: "Schulzeugniss.png",
        hinweis: "Englisch B2 · Italienisch B1/B2 · Leistungskurse Englisch & Erdkunde",
      },
    ],
    sprachen: [
      { name: "Deutsch", niveau: "Muttersprache" },
      { name: "Englisch", niveau: "B2" },
      { name: "Italienisch", niveau: "B1/B2" },
    ],
    erfahrung: [
      {
        rolle: "Minijob Kundenkontakt & Betrieb",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen Ehreshoven",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Abend und Wochenendschichten, auch bei hohem Andrang",
          "Zuverlässige Mitarbeit im Team und saubere Übergaben",
          "Selbstständiges Mitdenken im laufenden Betrieb",
        ],
      },
      {
        rolle: "Minijob Service & Teamsupport",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Unterstützung im Betrieb zugunsten von Gästen und Team",
          "Sorgfalt, Ordnung und klare Absprache im kleinen Team",
          "Ruhiges und zielgerichtetes Arbeiten in stressigen Phasen",
        ],
      },
      {
        rolle: "Minijob Betrieb & digitale Prozesse",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "07.2024 - 02.2025",
        bullets: [
          "Mitarbeit bei hohem Kundenaufkommen mit gutem Überblick",
          "Digitales System programmiert, eingeführt und Mitarbeitende geschult",
          "Technik praxisnah eingesetzt, damit Abläufe einfacher werden",
        ],
      },
    ],
    skills: [
      "Körperliche Belastbarkeit und Bereitschaft zum 3-Schicht-Modell",
      "Sorgfalt und ruhige Hand bei wiederkehrenden Aufgaben",
      "Zuverlässigkeit und Pünktlichkeit",
      "Gute Deutschkenntnisse in Wort (Muttersprache)",
      "Sauberes und gepflegtes Erscheinungsbild",
    ],
    projekte: [
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung:
          "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Digitale Abläufe lerne ich schnell und setze sie praktisch um.",
      },
      {
        titel: "Digitale Software in der Schule",
        beschreibung:
          "In der Schule eine eigene digitale Anwendung erstellt und bis zur praktischen Nutzung weiterentwickelt.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrte Frau Zehnder",
      absatz1:
        "hiermit bewerbe ich mich als Produktionsmitarbeiter 60-100% für Ihren Einsatz in der Lebensmittelindustrie in Ostermundigen. Ich wohne an der Bottigenstrasse in Bern und erreiche Ostermundigen gut. Schichtarbeit kenne ich aus Minijobs in der Gastronomie und bin bereit, im 3-Schicht-Modell zu arbeiten.",
      absatz2:
        "Auffüllen, Kontrollieren, Verpacken und das Sauberhalten von Maschinen sind Aufgaben, die zu meiner Arbeitsweise passen. Ich arbeite körperlich gerne mit, bin pünktlich und bleibe auch bei Tempo sorgfältig. Eine mögliche Festanstellung bei entsprechender Eignung motiviert mich zusätzlich.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin ab sofort oder nach Vereinbarung verfügbar. Über eine Rückmeldung freue ich mich.",
      gruss: "Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },
  en: {
    ui: {
      profil: "Profile",
      erfahrung: "Practical experience",
      ausbildung: "Education",
      sprachen: "Languages",
      skills: "Skills",
      projekte: "Projects & extras",
      zeugnisse: "Certificates & documents",
      zeugnisseIntro: "Attachments: school leaving certificate and transcript.",
      foto: "Photo",
      fotoHint: "add here",
      alterSuffix: "years old",
      nationalitaetLabel: "Nationality",
      wohnortPrefix: "currently living in",
      betreffPrefix: "Application for",
      printHint: "For PDF: Ctrl+P → “Save as PDF” (margins: Default/None).",
      printBtn: "Print / PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Production Worker 60-100%",
    nationalitaet: "German",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil:
      "I am Carlo Koch, 19, living near Oberbottigen in Bern. In hospitality mini jobs I learned to work reliably and carefully at pace. As a production worker in Ostermundigen I want to support filling, checking and packing dairy products and work in a 3-shift model.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Alongside school and afterwards, mini jobs with shift work and physical work in Germany.",
    },
    zeugnisse: [
      {
        titel: "School leaving certificate (Abgangszeugnis)",
        datei: "Abgangszeugniss.png",
        hinweis: "Gesamtschule Marienheide · left 16.01.2026",
      },
      {
        titel: "School transcript",
        datei: "Schulzeugniss.png",
        hinweis: "English B2 · Italian B1/B2 · advanced courses English & Geography",
      },
    ],
    sprachen: [
      { name: "German", niveau: "Native" },
      { name: "English", niveau: "B2" },
      { name: "Italian", niveau: "B1/B2" },
    ],
    erfahrung: [
      {
        rolle: "Mini job customer contact & operations",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen Ehreshoven",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Evening and weekend shifts, including busy periods",
          "Reliable teamwork and clean handovers",
          "Independent contribution in day to day operations",
        ],
      },
      {
        rolle: "Mini job service & team support",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Supported operations for guests and the team",
          "Care, order and clear communication in a small team",
          "Calm, focused work during stressful periods",
        ],
      },
      {
        rolle: "Mini job operations & digital processes",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "07.2024 - 02.2025",
        bullets: [
          "Worked during high customer volume while keeping an overview",
          "Programmed a digital system, introduced it and trained staff",
          "Applied technology practically to simplify everyday workflows",
        ],
      },
    ],
    skills: [
      "Physical fitness and readiness for a 3-shift model",
      "Care and a steady hand with recurring tasks",
      "Reliability and punctuality",
      "Good spoken German (native)",
      "Neat and tidy appearance",
    ],
    projekte: [
      {
        titel: "Digital system at Burgerwerk",
        beschreibung:
          "Developed a digital tool, introduced it at work and trained the team. I pick up digital processes quickly and apply them practically.",
      },
      {
        titel: "Digital software at school",
        beschreibung:
          "At school I created a digital application and developed it through to practical use.",
      },
    ],
    motivation: {
      anrede: "Dear Ms Zehnder",
      absatz1:
        "I am applying for the production worker role 60-100% for your assignment in the food industry in Ostermundigen. I live on Bottigenstrasse in Bern and can reach Ostermundigen well. I know shift work from hospitality mini jobs and am ready to work in a 3-shift model.",
      absatz2:
        "Filling, checking, packing and keeping machines clean fit how I work. I like physical work, am punctual and stay careful when it is busy. The chance of a permanent role with good performance motivates me.",
      absatz3:
        "German is my native language. I am available immediately or by arrangement. I look forward to hearing from you.",
      gruss: "Kind regards / Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },
};

function getCvContent(lang) {
  const locale = CV_I18N[lang] ? lang : "de";
  return { ...CV_SHARED, ...CV_I18N[locale], lang: locale };
}

const CV_CONTENT = getCvContent("de");
