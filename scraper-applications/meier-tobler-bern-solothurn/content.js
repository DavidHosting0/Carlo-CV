/**
 * Bewerbungsmappe DE + EN
 * Meier Tobler AG - Verkäufer Heizung / Sanitär (w/m), Region Bern/Solothurn
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/f4d2a7df-c529-4828-8af6-251282d2d152/
 * Quelle: jobs.ch Scraper (Verkäufer + Bern)
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "Meier Tobler AG, Region Bern/Solothurn",
};

const CV_I18N = {
  de: {
    ui: {
          "profil": "Profil",
          "erfahrung": "Praxiserfahrung",
          "ausbildung": "Ausbildung",
          "sprachen": "Sprachen",
          "skills": "Qualifikationen",
          "projekte": "Projekte & Nebenleistungen",
          "zeugnisse": "Zeugnisse & Nachweise",
          "zeugnisseIntro": "Anlagen: Abgangszeugnis und Schulzeugnis.",
          "foto": "Foto",
          "fotoHint": "einfügen",
          "alterSuffix": "Jahre",
          "nationalitaetLabel": "Nationalität",
          "wohnortPrefix": "wohnhaft in",
          "betreffPrefix": "Bewerbung als",
          "printHint": "Zum PDF: Strg+P → „Als PDF speichern“ (Ränder: Standard/Keine).",
          "printBtn": "Drucken / PDF",
          "langDe": "Deutsch",
          "langEn": "English"
    },
    zielposition: "Verkäufer Heizung / Sanitär",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Technischen Verkauf finde ich spannend, weil Beratung und Produktwissen zusammenkommen. Eine Fachlehre im Bereich Heizung oder Sanitär bringe ich noch nicht mit. Aus kundenorientierten Minijobs kenne ich Zuverlässigkeit, Zuhören und Teamwork. Bei Meier Tobler möchte ich Produkte und Anwendungen Schritt für Schritt lernen.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule und danach Minijobs mit Kundenkontakt und Schichtarbeit in Deutschland.",
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
        rolle: "Minijob Gästebetreuung & Kundenkontakt",
        firma: "EVA Köln West",
        ort: "Köln",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Gäste begrüsst, Abläufe erklärt und Gruppen durch den Besuch begleitet",
          "Geräte und Stationen vorbereitet, geprüft und sauber weitergegeben",
          "Ruhig geblieben, wenn etwas nicht sofort klappte, und pragmatisch nachgeholfen",
        ],
      },
      {
        rolle: "Minijob Betrieb & digitale Prozesse",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Mitarbeit bei hohem Kundenaufkommen mit gutem Überblick",
          "Digitales System programmiert, eingeführt und Mitarbeitende geschult",
          "Technik praxisnah eingesetzt, damit Abläufe einfacher werden",
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
    ],
    skills: [
      "Lernbereitschaft für technische Produkte",
      "Freude an Beratung und Kundenkontakt",
      "Zuverlässigkeit und sorgfältiges Arbeiten",
      "Teamfähigkeit und klare Kommunikation",
      "Sicherer Umgang mit PC und digitalen Tools",
    ],
    projekte: [
      {
        titel: "Technik verständlich erklären",
        beschreibung: "Ich beschäftige mich seit längerem mit Consumer Electronics und erkläre technische Themen gerne so, dass sie für Laien nachvollziehbar sind. Das hilft mir im Verkaufsgespräch.",
      },
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung: "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Mir ist wichtig, dass technische Lösungen im Alltag wirklich nutzbar sind.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrtes Team von Meier Tobler / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Verkäufer Heizung / Sanitär bei Meier Tobler in der Region Bern/Solothurn. Ich bin 19 und wohne in Bern. Ich bewerbe mich bewusst als Einsteiger ohne abgeschlossene Fachlehre und möchte mich gründlich in Sortiment und Beratung einarbeiten.",
      absatz2:
        "An der Stelle interessiert mich, Fachleuten und Kundschaft passende Lösungen zu erklären und im Verkaufsteam mitzuziehen. Ich lerne technische Zusammenhänge gerne strukturiert und frage nach, bis ich sie wirklich verstanden habe. Bei Burgerwerk habe ich ausserdem digitale Abläufe eingeführt und Kollegen geschult.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin motiviert und ab sofort oder nach Vereinbarung verfügbar. Über ein Gespräch freue ich mich.",
      gruss: "Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },

  en: {
    ui: {
          "profil": "Profile",
          "erfahrung": "Practical experience",
          "ausbildung": "Education",
          "sprachen": "Languages",
          "skills": "Skills",
          "projekte": "Projects & extras",
          "zeugnisse": "Certificates & documents",
          "zeugnisseIntro": "Attachments: school leaving certificate and transcript.",
          "foto": "Photo",
          "fotoHint": "add here",
          "alterSuffix": "years old",
          "nationalitaetLabel": "Nationality",
          "wohnortPrefix": "currently living in",
          "betreffPrefix": "Application for",
          "printHint": "For PDF: Ctrl+P → “Save as PDF” (margins: Default/None).",
          "printBtn": "Print / PDF",
          "langDe": "Deutsch",
          "langEn": "English"
    },
    zielposition: "Sales Advisor Heating / Sanitary",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. I find technical sales interesting because advice and product knowledge come together. I do not yet have a trade apprenticeship in heating or sanitary. From customer-facing mini jobs I know reliability, listening and teamwork. At Meier Tobler I want to learn products and applications step by step.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Alongside and after school, mini jobs with customer contact and shift work in Germany.",
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
        rolle: "Mini job guest service & customer contact",
        firma: "EVA Köln West",
        ort: "Cologne",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Welcomed guests, explained processes and accompanied groups through their visit",
          "Prepared and checked stations, then handed them over cleanly",
          "Stayed calm when something did not work immediately and helped practically",
        ],
      },
      {
        rolle: "Mini job operations & digital processes",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Worked during high customer volume while keeping an overview",
          "Programmed a digital system, introduced it and trained staff",
          "Applied technology practically to simplify everyday workflows",
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
    ],
    skills: [
      "Willingness to learn technical products",
      "Enjoy advising and customer contact",
      "Reliability and careful work",
      "Teamwork and clear communication",
      "Confident with PC and digital tools",
    ],
    projekte: [
      {
        titel: "Explaining technology clearly",
        beschreibung: "I have been into consumer electronics for a long time and enjoy explaining technical topics so that non-experts can follow. That helps in sales conversations.",
      },
      {
        titel: "Digital system at Burgerwerk",
        beschreibung: "Developed a digital tool, introduced it at work and trained the team. I care that technical solutions are actually usable day to day.",
      },
    ],
    motivation: {
      anrede: "Dear Meier Tobler team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Sales Advisor Heating / Sanitary role at Meier Tobler in the Region Bern/Solothurn. I am 19 and live in Bern. I am applying as an entry-level candidate without a completed trade apprenticeship and want to learn the assortment and advisory work thoroughly.",
      absatz2:
        "I am interested in explaining suitable solutions to professionals and customers and contributing in the sales team. I like learning technical topics in a structured way and ask until I truly understand them. At Burgerwerk I also introduced digital workflows and trained colleagues.",
      absatz3:
        "German is my native language. I am motivated and available immediately or by arrangement. I look forward to a conversation.",
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
