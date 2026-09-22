/**
 * Bewerbungsmappe DE + EN
 * LANDI Genossenschaften - Verkäuferin / Verkäufer Festservice & Getränke w/m/d, Laupen
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/f5c27fe9-6237-4951-be7c-42510a0c9de1/
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
  arbeitgeberZiel: "LANDI Genossenschaften, Laupen",
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
    zielposition: "Verkäufer Festservice & Getränke",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. In der Gastronomie und in der Gästebetreuung habe ich gelernt, unter Zeitdruck freundlich zu bleiben und im Team mitzudenken. Getränke, Service und klare Abläufe kenne ich aus dem Praxisalltag. Als Verkäufer Festservice & Getränke bei der LANDI in Laupen möchte ich Kundinnen und Kunden unterstützen und im Sortiment mit anpacken.",
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
      "Erfahrung mit Gästekontakt und Service unter Zeitdruck",
      "Zuverlässigkeit und Teamfähigkeit",
      "Interesse an Getränken, Festservice und Beratung",
      "Körperliche Belastbarkeit und Sorgfalt",
      "Sicherer Umgang mit digitalen Hilfsmitteln",
    ],
    projekte: [
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung: "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Digitale Abläufe lerne ich schnell und setze sie praktisch um.",
      },
      {
        titel: "Digitale Software in der Schule",
        beschreibung: "In der Schule eine eigene digitale Anwendung erstellt und bis zur praktischen Nutzung weiterentwickelt.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrtes Team von LANDI / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Verkäufer Festservice & Getränke bei der LANDI in Laupen. Ich bin 19 und wohne in Bern. Aus Minijobs in der Gastronomie bringe ich Serviceerfahrung und Schichtbereitschaft mit. Eine abgeschlossene Lehre im Detailhandel habe ich noch nicht.",
      absatz2:
        "Die Kombination aus Festservice und Getränken spricht mich an, weil ich gerne berate und gleichzeitig praktisch mithelfe. Ich arbeite sorgfältig, halte Ordnung und bleibe bei Andrang ruhig. Bei Burgerwerk habe ich ausserdem digitale Abläufe eingeführt und Kollegen geschult.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin ab sofort oder nach Vereinbarung verfügbar und freue mich über ein Gespräch oder einen Probearbeitstag.",
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
    zielposition: "Sales Assistant Event Service & Beverages",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. In hospitality and guest service I learned to stay friendly under pressure and contribute in a team. I know beverages, service and clear workflows from practice. As sales assistant for event service and beverages at LANDI in Laupen I want to support customers and help with the assortment.",
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
      "Experience with guest contact and service under pressure",
      "Reliability and teamwork",
      "Interest in beverages, event service and advice",
      "Physical fitness and care",
      "Confident with digital tools",
    ],
    projekte: [
      {
        titel: "Digital system at Burgerwerk",
        beschreibung: "Developed a digital tool, introduced it at work and trained the team. I pick up digital processes quickly and apply them practically.",
      },
      {
        titel: "Digital software at school",
        beschreibung: "At school I created a digital application and developed it through to practical use.",
      },
    ],
    motivation: {
      anrede: "Dear LANDI team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Sales Assistant Event Service & Beverages role at LANDI in Laupen. I am 19 and live in Bern. From hospitality mini jobs I bring service experience and shift flexibility. I do not yet have a completed retail apprenticeship.",
      absatz2:
        "The mix of event service and beverages appeals to me because I like advising and helping practically. I work carefully, keep order and stay calm when it gets busy. At Burgerwerk I also introduced digital workflows and trained colleagues.",
      absatz3:
        "German is my native language. I am available immediately or by arrangement and would welcome an interview or trial day.",
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
