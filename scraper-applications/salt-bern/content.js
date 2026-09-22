/**
 * Bewerbungsmappe DE + EN
 * Salt Mobile SA - Salt Store Verkäufer-/Verkäuferin Bern 100%, Bern
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/40598104-ff32-4510-8693-85655df32d9b/
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
  arbeitgeberZiel: "Salt Mobile SA, Salt Store Bern",
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
    zielposition: "Salt Store Verkäufer 100%",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Technik und der direkte Kundenkontakt interessieren mich. In Minijobs habe ich gelernt, Menschen unter Zeitdruck freundlich zu betreuen und Produkte sowie Abläufe verständlich zu erklären. Bei Burgerwerk habe ich ein digitales System entwickelt und das Team geschult. Als Salt Store Verkäufer in Bern möchte ich Kundinnen und Kunden zu Mobilfunk und Geräten beraten.",
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
      "Freude am Beratungsverkauf und am Kundenkontakt",
      "Technisches Interesse und verständliche Erklärungen",
      "Zuverlässigkeit, Freundlichkeit und Teamfähigkeit",
      "Sicherer Umgang mit Smartphone, Tablet und digitalen Systemen",
      "Bereitschaft zu Ladenöffnungszeiten inkl. Samstag",
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
      anrede: "Sehr geehrtes Team von Salt / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Salt Store Verkäufer 100% bei Salt in Bern. Ich bin 19, wohne in Bern und bringe Erfahrung aus kundenorientierten Minijobs mit. Eine abgeschlossene Lehre im Detailhandel habe ich noch nicht. Ich möchte im Salt Store einsteigen, Abläufe lernen und Kundinnen und Kunden ehrlich beraten.",
      absatz2:
        "An der Stelle reizt mich, Bedürfnisse zu klären und passende Tarife sowie Geräte zu empfehlen, ohne übertrieben zu verkaufen. Technik erkläre ich gerne verständlich. Aus meinen bisherigen Jobs kenne ich Stosszeiten und weiss, wie wichtig ein gepflegter Laden und ein starkes Team sind. Bei Burgerwerk habe ich digitale Prozesse eingeführt und Kollegen geschult.",
      absatz3:
        "Deutsch ist meine Muttersprache, Englisch spreche ich auf B2 Niveau. Ich bin motiviert und ab sofort verfügbar. Über ein Gespräch freue ich mich sehr.",
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
    zielposition: "Salt Store Sales Advisor",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. I am interested in technology and direct customer contact. In mini jobs I learned to support people under time pressure and explain products and processes clearly. At Burgerwerk I developed a digital system and trained the team. As a Salt Store sales advisor in Bern I want to advise customers on mobile plans and devices.",
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
      "Enjoy advisory sales and customer contact",
      "Technical interest and clear explanations",
      "Reliability, friendliness and teamwork",
      "Confident with smartphone, tablet and digital systems",
      "Willingness to work store hours including Saturdays",
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
      anrede: "Dear Salt team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Salt Store Sales Advisor role at Salt in Bern. I am 19, live in Bern and bring experience from customer-facing mini jobs. I do not yet have a completed retail apprenticeship. I want to join the Salt Store, learn the processes and advise customers honestly.",
      absatz2:
        "I am drawn to clarifying needs and recommending suitable plans and devices without overselling. I enjoy explaining technology in plain language. From previous jobs I know busy periods and the value of a tidy store and a strong team. At Burgerwerk I introduced digital processes and trained colleagues.",
      absatz3:
        "German is my native language and English is at B2. I am motivated and available immediately. I would be glad to talk.",
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
