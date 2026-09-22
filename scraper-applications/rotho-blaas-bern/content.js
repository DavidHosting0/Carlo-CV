/**
 * Bewerbungsmappe DE + EN
 * Rotho Blaas Schweiz GmbH - Technischer Verkäufer im Aussendienst - Berner Oberland, Bern / Berner Oberland
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/b85faeae-3adc-4815-85c5-c5a35406287f/
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
  arbeitgeberZiel: "Rotho Blaas Schweiz GmbH, Bern / Berner Oberland",
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
    zielposition: "Technischer Verkäufer Aussendienst",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Technischer Verkauf im Aussendienst interessiert mich, weil Beratung, Produktwissen und Unterwegssein zusammenkommen. Berufserfahrung im Aussendienst bringe ich noch nicht mit. Ich bewerbe mich als lernbereiter Einstiegskandidat mit starkem Kundenkontakt aus bisherigen Minijobs.",
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
      "Freundlicher und klarer Kundenkontakt",
      "Selbstständiges Mitdenken und Zuverlässigkeit",
      "Bereitschaft für Einsätze in der Region Berner Oberland",
      "Sicherer Umgang mit digitalen Hilfsmitteln",
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
      anrede: "Sehr geehrtes Team von Rotho Blaas / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Technischer Verkäufer Aussendienst bei Rotho Blaas für das Berner Oberland. Ich bin 19 und wohne in Bern. Ich weiss, dass die Stelle Erfahrung und Fachwissen voraussetzt. Deshalb bewerbe ich mich transparent als Quereinsteiger, der bereit ist, Produkte und Kundschaft gründlich kennenzulernen.",
      absatz2:
        "Mich reizt, vor Ort zu beraten und Lösungen verständlich zu erklären. Aus meinen bisherigen Jobs bringe ich Zuverlässigkeit, gutes Zuhören und die Fähigkeit mit, unter Druck ruhig zu bleiben. Technische Details lerne ich strukturiert und frage nach, bis ich sie sicher anwenden kann.",
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
    zielposition: "Technical Field Sales Advisor",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. Technical field sales interests me because advice, product knowledge and being on the road come together. I do not yet have field-sales experience. I am applying as an eager entry-level candidate with strong customer contact from previous mini jobs.",
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
      "Friendly and clear customer contact",
      "Independent thinking and reliability",
      "Willingness to cover the Bernese Oberland region",
      "Confident with digital tools",
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
      anrede: "Dear Rotho Blaas team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Technical Field Sales Advisor role at Rotho Blaas for the Bernese Oberland. I am 19 and live in Bern. I know the role expects experience and product expertise. I am applying transparently as a career starter ready to learn products and customers thoroughly.",
      absatz2:
        "I am drawn to advising on site and explaining solutions clearly. From previous jobs I bring reliability, good listening and calm under pressure. I learn technical details in a structured way and ask until I can apply them confidently.",
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
