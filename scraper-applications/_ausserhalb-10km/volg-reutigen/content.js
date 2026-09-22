/**
 * Bewerbungsmappe DE + EN
 * Volg Detailhandels AG - Verkäuferin / Verkäufer, Reutigen
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/7ee0f3fc-bcd9-4270-924f-1129fbecd97b/
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
  arbeitgeberZiel: "Volg Detailhandels AG, Reutigen",
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
    zielposition: "Verkäufer",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. In Minijobs in der Gastronomie und in der Gästebetreuung habe ich gelernt, unter Zeitdruck freundlich und zuverlässig zu arbeiten und im Team mitzudenken. Bei Burgerwerk habe ich zusätzlich ein digitales System entwickelt, eingeführt und das Team darin geschult. Als Verkäufer bei Volg in Reutigen möchte ich an der Kasse, bei der Warenannahme und im Regal mit anpacken.",
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
      "Freude am Umgang mit Menschen und am Verkauf",
      "Zuverlässigkeit, Freundlichkeit und Teamfähigkeit",
      "Bereitschaft zu Schichtarbeit und Wochenendeinsätzen",
      "Körperliche Belastbarkeit und Sorgfalt bei Ordnung und Frische",
      "Sicherer Umgang mit PC, Tablet und Smartphone",
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
      anrede: "Sehr geehrtes Team von Volg / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Verkäufer bei Volg in Reutigen. Ich bin 19 Jahre alt, wohne in Bern und habe bereits in Minijobs Erfahrung im Umgang mit Menschen unter Zeitdruck gesammelt. Eine abgeschlossene Lehre im Detailhandel bringe ich noch nicht mit. Ich möchte bei Volg einsteigen, mit anpacken und die Abläufe im Laden gründlich lernen.",
      absatz2:
        "An der Stelle interessiert mich die Kombination aus Kundenkontakt und praktischer Filialarbeit. Kasse, Warenannahme, Regale pflegen und auf Haltbarkeit sowie Ordnung achten sind Aufgaben, die ich zuverlässig übernehmen möchte. Aus meinen Minijobs kenne ich Schichtarbeit und Stosszeiten. Digitale Hilfsmittel sind für mich selbstverständlich.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin körperlich fit, motiviert und ab sofort oder nach Vereinbarung verfügbar. Über ein Gespräch oder einen Probearbeitstag würde ich mich sehr freuen.",
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
    zielposition: "Sales Assistant",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19 years old and living in Bern. In hospitality and guest-service mini jobs I learned to work reliably and courteously under time pressure and to contribute in a team. At Burgerwerk I also developed a digital system, introduced it and trained colleagues. As a sales assistant at Volg in Reutigen I want to support checkout, goods receiving and shelf work.",
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
      "Enjoy working with people and sales",
      "Reliability, friendliness and teamwork",
      "Willingness to work shifts and weekends",
      "Physical fitness and care for order and freshness",
      "Confident with PC, tablet and smartphone",
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
      anrede: "Dear Volg team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Sales Assistant role at Volg in Reutigen. I am 19, live in Bern and already have experience working with people under time pressure. I do not yet have a completed retail apprenticeship. I would like to join Volg, get stuck in and learn store operations thoroughly.",
      absatz2:
        "What interests me is the mix of customer contact and practical store work. Checkout, goods receiving, shelf care and checking freshness are tasks I want to take on reliably. From my mini jobs I know shift work and busy periods. Digital tools are familiar to me.",
      absatz3:
        "German is my native language. I am physically fit, motivated and available immediately or by arrangement. I would be glad to arrange an interview or a trial day.",
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
