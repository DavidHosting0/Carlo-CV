/**
 * Bewerbungsmappe DE + EN
 * H&M Hennes & Mauritz AG - Sales Advisor 60% (24 Wochenstunden), Bern
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/90a3d155-79e7-4b28-80f0-cd0691687570/
 * Distanz zu Oberbottigen: ca. 4.9 km
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "H&M Hennes & Mauritz AG, Bern",
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
    zielposition: "Sales Advisor 60%",
    nationalitaet: "deutsch",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Ich arbeite gerne mit Menschen und bringe aus Minijobs Erfahrung mit Tempo und Teamwork mit. Als Sales Advisor bei H&M Bern möchte ich Kundinnen und Kunden auf der Fläche unterstützen.",
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
      "Freude an Mode und Kundenberatung",
      "Freundliches Auftreten auf der Fläche",
      "Teamfähigkeit",
      "Flexibilität für Filialeinsätze",
      "Deutsch Muttersprache, Englisch B2",
      "Lernbereitschaft"
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
      anrede: "Sehr geehrtes H&M Team",
      absatz1: "hiermit bewerbe ich mich als Sales Advisor 60% bei H&M in Bern. Ich bringe noch keine Modehandels Lehre mit, aber Motivation, Kunden freundlich zu beraten und im Filialteam mitzuhelfen.",
      absatz2: "Verkaufsfläche, Beratung und ein gepflegtes Erscheinungsbild sind mir wichtig. Englisch auf B2 Niveau helfe ich gerne bei internationalen Gästen.",
      absatz3: "Ich bin ab sofort oder nach Vereinbarung verfügbar und freue mich über eine Rückmeldung.",
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
    zielposition: "Sales Advisor 60%",
    nationalitaet: "German",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "I am Carlo Koch, 19, living in Bern. I enjoy working with people and bring pace and teamwork experience from mini jobs. As a Sales Advisor at H&M Bern I want to support customers on the shop floor.",
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
      "Interest in fashion and customer advice",
      "Friendly presence on the shop floor",
      "Teamwork",
      "Flexibility for store shifts",
      "German native, English B2",
      "Willingness to learn"
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
      anrede: "Dear H&M team",
      absatz1: "I am applying for the Sales Advisor 60% role at H&M in Bern. I do not yet have a fashion retail apprenticeship, but I am motivated to advise customers warmly and support the store team.",
      absatz2: "Shop floor work, advice and a tidy appearance matter to me. With English at B2 I am happy to help international guests.",
      absatz3: "I am available immediately or by arrangement and look forward to hearing from you.",
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
