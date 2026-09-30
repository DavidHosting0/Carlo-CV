/**
 * Bewerbungsmappe DE + EN
 * k kiosk (Valora) - Verkäuferin / Verkäufer k kiosk 10 Std., Bern 3018, Mühledorfstrasse
 * Stelle: https://career.valora.com/fr/job/6219/verkauferin-verkaufer-k-kiosk-10-std
 * Distanz zu Oberbottigen: ca. 1.8 km
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "k kiosk, Mühledorfstrasse, 3018 Bern",
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
    zielposition: "Verkäufer k kiosk (10 Std./Woche)",
    nationalitaet: "deutsch",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "Ich bin Carlo Koch, 19 Jahre alt und wohne an der Bottigenstrasse in Bern. Der k kiosk an der Mühledorfstrasse liegt praktisch in meiner Nachbarschaft. Ich arbeite gerne mit Menschen und kenne Schichtarbeit aus Minijobs in der Gastronomie.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details: "Parallel zur Schule und danach Minijobs mit Kundenkontakt und Schichtarbeit in Deutschland.",
    },
    zeugnisse: [
      {
            "titel": "Abgangszeugnis",
            "datei": "Abgangszeugniss.png",
            "hinweis": "Gesamtschule Marienheide · Abgang 16.01.2026"
      },
      {
            "titel": "Schulzeugnis (Leistungsübersicht)",
            "datei": "Schulzeugniss.png",
            "hinweis": "Englisch B2 · Italienisch B1/B2 · Leistungskurse Englisch & Erdkunde"
      }
],
    sprachen: [
      {
            "name": "Deutsch",
            "niveau": "Muttersprache"
      },
      {
            "name": "Englisch",
            "niveau": "B2"
      },
      {
            "name": "Italienisch",
            "niveau": "B1/B2"
      }
],
    erfahrung: [
      {
            "rolle": "Minijob Kundenkontakt & Betrieb",
            "firma": "Restaurant Eimermacher",
            "ort": "Engelskirchen Ehreshoven",
            "zeitraum": "09.2025 - 01.2026",
            "bullets": [
                  "Abend und Wochenendschichten, auch bei hohem Andrang",
                  "Zuverlässige Mitarbeit im Team und saubere Übergaben",
                  "Selbstständiges Mitdenken im laufenden Betrieb"
            ]
      },
      {
            "rolle": "Minijob Service & Teamsupport",
            "firma": "Restaurant Am Fels",
            "ort": "Engelskirchen Loope",
            "zeitraum": "03.2025 - 08.2025",
            "bullets": [
                  "Unterstützung im Betrieb zugunsten von Gästen und Team",
                  "Sorgfalt, Ordnung und klare Absprache im kleinen Team",
                  "Ruhiges und zielgerichtetes Arbeiten in stressigen Phasen"
            ]
      },
      {
            "rolle": "Minijob Betrieb & digitale Prozesse",
            "firma": "Burgerwerk",
            "ort": "Deutschland",
            "zeitraum": "07.2024 - 02.2025",
            "bullets": [
                  "Mitarbeit bei hohem Kundenaufkommen mit gutem Überblick",
                  "Digitales System programmiert, eingeführt und Mitarbeitende geschult",
                  "Technik praxisnah eingesetzt, damit Abläufe einfacher werden"
            ]
      }
],
    skills: [
      "Freundliche Beratung an der Theke",
      "Zuverlässigkeit und Flexibilität im Schichtmodell",
      "Sorgfalt bei Kasse und Warenpräsentation",
      "Belastbarkeit in kurzen, intensiven Einsätzen",
      "Deutsch Muttersprache",
      "Teamfähigkeit"
],
    projekte: [
      {
            "titel": "Digitales System bei Burgerwerk",
            "beschreibung": "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Digitale Abläufe lerne ich schnell und setze sie praktisch um."
      },
      {
            "titel": "Digitale Software in der Schule",
            "beschreibung": "In der Schule eine eigene digitale Anwendung erstellt und bis zur praktischen Nutzung weiterentwickelt."
      }
],
    motivation: {
      anrede: "Sehr geehrtes k kiosk Team",
      absatz1: "hiermit bewerbe ich mich als Verkäufer für 10 Stunden pro Woche im k kiosk an der Mühledorfstrasse in Bern. Der Standort ist für mich sehr gut erreichbar. Ich bringe noch keine abgeschlossene Detailhandelslehre mit, aber Erfahrung im Kundenkontakt und den Wunsch, im Verkauf anzupacken.",
      absatz2: "Beratung und Verkauf, Kasse, Warenbewirtschaftung und ein ordentlicher Arbeitsplatz sind Aufgaben, die ich zuverlässig übernehmen möchte. Abendzuschläge und flexible Schichten passen zu mir.",
      absatz3: "Deutsch ist meine Muttersprache. Ich bin motiviert und ab sofort oder nach Vereinbarung verfügbar. Über eine Rückmeldung freue ich mich.",
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
    zielposition: "k kiosk Sales Assistant (10 hrs/week)",
    nationalitaet: "German",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "I am Carlo Koch, 19, living on Bottigenstrasse in Bern. The k kiosk on Mühledorfstrasse is practically in my neighbourhood. I enjoy working with people and know shift work from hospitality mini jobs.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details: "Alongside school and afterwards, mini jobs with customer contact and shift work in Germany.",
    },
    zeugnisse: [
      {
            "titel": "School leaving certificate (Abgangszeugnis)",
            "datei": "Abgangszeugniss.png",
            "hinweis": "Gesamtschule Marienheide · left 16.01.2026"
      },
      {
            "titel": "School transcript",
            "datei": "Schulzeugniss.png",
            "hinweis": "English B2 · Italian B1/B2 · advanced courses English & Geography"
      }
],
    sprachen: [
      {
            "name": "German",
            "niveau": "Native"
      },
      {
            "name": "English",
            "niveau": "B2"
      },
      {
            "name": "Italian",
            "niveau": "B1/B2"
      }
],
    erfahrung: [
      {
            "rolle": "Mini job customer contact & operations",
            "firma": "Restaurant Eimermacher",
            "ort": "Engelskirchen Ehreshoven",
            "zeitraum": "09.2025 - 01.2026",
            "bullets": [
                  "Evening and weekend shifts, including busy periods",
                  "Reliable teamwork and clean handovers",
                  "Independent contribution in day to day operations"
            ]
      },
      {
            "rolle": "Mini job service & team support",
            "firma": "Restaurant Am Fels",
            "ort": "Engelskirchen Loope",
            "zeitraum": "03.2025 - 08.2025",
            "bullets": [
                  "Supported operations for guests and the team",
                  "Care, order and clear communication in a small team",
                  "Calm, focused work during stressful periods"
            ]
      },
      {
            "rolle": "Mini job operations & digital processes",
            "firma": "Burgerwerk",
            "ort": "Germany",
            "zeitraum": "07.2024 - 02.2025",
            "bullets": [
                  "Worked during high customer volume while keeping an overview",
                  "Programmed a digital system, introduced it and trained staff",
                  "Applied technology practically to simplify everyday workflows"
            ]
      }
],
    skills: [
      "Friendly counter service",
      "Reliability and flexibility with shifts",
      "Care at the till and with product presentation",
      "Able to handle short intensive shifts",
      "German native",
      "Teamwork"
],
    projekte: [
      {
            "titel": "Digital system at Burgerwerk",
            "beschreibung": "Developed a digital tool, introduced it at work and trained the team. I pick up digital processes quickly and apply them practically."
      },
      {
            "titel": "Digital software at school",
            "beschreibung": "At school I created a digital application and developed it through to practical use."
      }
],
    motivation: {
      anrede: "Dear k kiosk team",
      absatz1: "I am applying for the 10 hours/week sales role at the k kiosk on Mühledorfstrasse in Bern. The location is very convenient for me. I do not yet have a retail apprenticeship, but I have customer contact experience and want to get stuck into sales.",
      absatz2: "Advice and sales, checkout, stock work and a tidy workplace are tasks I want to take on reliably. Evening bonuses and flexible shifts suit me.",
      absatz3: "German is my native language. I am motivated and available immediately or by arrangement. I look forward to hearing from you.",
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
