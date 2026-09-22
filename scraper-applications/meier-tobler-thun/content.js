/**
 * Bewerbungsmappe DE + EN
 * Meier Tobler AG - Leiter Marché | Verkäufer Heizung / Sanitär (w/m), Thun
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/7e4ad1c5-e0d9-44c6-bb0a-2d497dc8b519/
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
  arbeitgeberZiel: "Meier Tobler AG, Thun",
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
    zielposition: "Verkäufer Heizung / Sanitär (Marché Thun)",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Die ausgeschriebene Rolle verbindet Verkauf Heizung/Sanitär mit Leitungsverantwortung. Führungsverantwortung in dieser Form bringe ich noch nicht mit. Ich bewerbe mich ehrlich als motivierter Einsteiger, der den Verkauf und das Sortiment zuerst gründlich lernen will und Verantwortung schrittweise übernehmen möchte.",
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
      "Hohe Lernbereitschaft für Produkte und Abläufe",
      "Zuverlässigkeit und klare Kommunikation",
      "Freude am Kundenkontakt und an der Beratung",
      "Teamfähigkeit und Bereitschaft, Verantwortung zu wachsen",
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
      anrede: "Sehr geehrtes Team von Meier Tobler / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich auf die Ausschreibung Leiter Marché | Verkäufer Heizung / Sanitär (w/m) in Thun. Ich bin 19 und wohne in Bern. Ich sehe, dass die Stelle Leitung und Verkauf verbindet. Eine vergleichbare Leitungsfunktion habe ich noch nicht ausgeübt. Trotzdem möchte ich mich vorstellen, falls ihr jemanden sucht, der im Verkauf stark mitzieht und Verantwortung schrittweise aufbauen kann.",
      absatz2:
        "Mein Fokus liegt darauf, Sortiment, Beratung und Filialabläufe sauber zu lernen. Aus Minijobs bringe ich Zuverlässigkeit, Teamgeist und die Bereitschaft mit, unter Zeitdruck ruhig zu bleiben. Wenn Leitung aktuell zu weit ist, interessiert mich auch eine Einstiegsrolle im Verkauf Heizung/Sanitär bei euch.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin motiviert und ab sofort oder nach Vereinbarung verfügbar. Über ein offenes Gespräch freue ich mich.",
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
    zielposition: "Sales Advisor Heating / Sanitary (Marché Thun)",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. The advertised role combines heating/sanitary sales with leadership. I do not yet have leadership experience at that level. I am applying honestly as a motivated starter who wants to learn sales and the assortment thoroughly first and grow into responsibility step by step.",
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
      "Strong willingness to learn products and processes",
      "Reliability and clear communication",
      "Enjoy customer contact and advice",
      "Teamwork and readiness to grow into responsibility",
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
      anrede: "Dear Meier Tobler team / Dear Sir or Madam",
      absatz1:
        "I am applying for the advertised role Leiter Marché | Verkäufer Heizung / Sanitär (w/m) in Thun. I am 19 and live in Bern. I see that the role combines leadership and sales. I have not held a comparable leadership position yet. Still, I would like to introduce myself if you are looking for someone who contributes strongly in sales and can grow into responsibility.",
      absatz2:
        "My focus is learning assortment, advice and store processes carefully. From mini jobs I bring reliability, teamwork and calm under pressure. If leadership is currently too far, I am also interested in an entry-level heating/sanitary sales role with you.",
      absatz3:
        "German is my native language. I am motivated and available immediately or by arrangement. I would welcome an open conversation.",
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
