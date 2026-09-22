/**
 * Bewerbungsmappe DE + EN
 * Denner AG - Verkäufer*in 60-80%, Bern-Bümpliz, Bottigenstrasse 7-9
 * Stelle: https://jobs.migros.ch/de/unsere-unternehmen/job/denner-ag/verkauferin/5daa7a81-0258-4bf8-ba3d-e3942e381992
 * Distanz zu Oberbottigen: ca. 1.0 km
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "Denner AG Filiale 340, Bottigenstrasse 7-9, 3018 Bern-Bümpliz",
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
    zielposition: "Verkäufer 60-80%",
    nationalitaet: "deutsch",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "Ich bin Carlo Koch, 19 Jahre alt und wohne an der Bottigenstrasse in Bern, also ganz in der Nähe der Filiale Bümpliz. In Minijobs habe ich gelernt, unter Zeitdruck freundlich und zuverlässig zu arbeiten. Bei Burgerwerk habe ich ein digitales System entwickelt und das Team geschult. Als Verkäufer bei Denner in Bümpliz möchte ich an der Kasse, bei der Warenannahme und im Regal mit anpacken.",
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
      "Freude am Umgang mit Menschen und am Verkauf",
      "Zuverlässigkeit und Teamfähigkeit",
      "Bereitschaft zu Schichtarbeit ausserhalb von nine to five",
      "Körperliche Belastbarkeit und Sorgfalt bei Frische und Ordnung",
      "Sicherer Umgang mit PC, Tablet und Smartphone",
      "Deutsch Muttersprache"
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
      anrede: "Sehr geehrtes Team von Denner / Sehr geehrter Herr Herrmann",
      absatz1: "hiermit bewerbe ich mich als Verkäufer 60-80% in der Filiale an der Bottigenstrasse in Bern-Bümpliz. Ich bin 19 Jahre alt und wohne selbst an der Bottigenstrasse, also praktisch um die Ecke. Eine abgeschlossene Lehre im Detailhandel bringe ich noch nicht mit. Quer- und Wiedereinsteigende sind ausdrücklich erwünscht, und genau so möchte ich bei Denner einsteigen, mit anpacken und die Abläufe gründlich lernen.",
      absatz2: "An der Stelle interessiert mich die Kombination aus Kundenkontakt und praktischer Filialarbeit. Kasse bedienen, Frischprodukte und Ware annehmen, Regale füllen und auf Haltbarkeit sowie Ordnung achten sind Aufgaben, die ich zuverlässig übernehmen möchte. Schichtarbeit kenne ich aus meinen Minijobs. Digitale Hilfsmittel sind für mich selbstverständlich.",
      absatz3: "Deutsch ist meine Muttersprache. Ich bin körperlich fit, motiviert und ab sofort oder nach Vereinbarung verfügbar. Über ein Gespräch oder einen Probearbeitstag würde ich mich sehr freuen.",
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
    zielposition: "Sales Assistant 60-80%",
    nationalitaet: "German",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "I am Carlo Koch, 19 years old and live on Bottigenstrasse in Bern, very close to the Bümpliz store. In mini jobs I learned to work reliably under time pressure. At Burgerwerk I developed a digital system and trained the team. As a sales assistant at Denner in Bümpliz I want to support checkout, goods receiving and shelf work.",
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
      "Enjoy working with people and sales",
      "Reliability and teamwork",
      "Willingness to work shifts outside nine to five",
      "Physical fitness and care for freshness and order",
      "Confident with PC, tablet and smartphone",
      "German native"
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
      anrede: "Dear Denner team / Dear Mr Herrmann",
      absatz1: "I am applying for the Sales Assistant 60-80% role at the Bottigenstrasse store in Bern-Bümpliz. I am 19 and live on Bottigenstrasse myself, so practically next door. I do not yet have a completed retail apprenticeship. Career changers are welcome, and that is how I would like to join Denner, get stuck in and learn store operations thoroughly.",
      absatz2: "I am interested in the mix of customer contact and practical store work. Checkout, receiving goods, filling shelves and checking freshness and order are tasks I want to take on reliably. I know shift work from my mini jobs. Digital tools are familiar to me.",
      absatz3: "German is my native language. I am physically fit, motivated and available immediately or by arrangement. I would welcome an interview or a trial day.",
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
