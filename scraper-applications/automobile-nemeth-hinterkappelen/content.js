/**
 * Bewerbungsmappe DE + EN
 * Automobile Nemeth AG - Automobil Verkäufer/in (Audi, Maserati & Occasionsfahrzeuge), Hinterkappelen
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/89d5729a-0980-47b9-835d-ae1a618de604/
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
  arbeitgeberZiel: "Automobile Nemeth AG, Hinterkappelen",
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
    zielposition: "Automobil Verkäufer",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Ich interessiere mich für Automobile und den direkten Kundenkontakt. In Minijobs habe ich gelernt, Menschen freundlich zu begrüssen, zuzuhören und unter Zeitdruck zuverlässig zu arbeiten. Eine abgeschlossene Verkaufsausbildung bringe ich noch nicht mit. Bei Automobile Nemeth möchte ich mich einarbeiten und Fahrzeuge sowie Abläufe gründlich lernen.",
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
      "Interesse an Automobilen und am Beratungsgespräch",
      "Freundlicher Auftritt und gutes Zuhören",
      "Zuverlässigkeit und Lernbereitschaft",
      "Teamfähigkeit und gepflegtes Erscheinungsbild",
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
      anrede: "Sehr geehrtes Team von Automobile Nemeth / Sehr geehrte Damen und Herren",
      absatz1:
        "hiermit bewerbe ich mich als Automobil Verkäufer bei Automobile Nemeth AG in Hinterkappelen. Ich bin 19 und wohne in Bern. Ich weiss, dass die Stelle hohe Ansprüche an Produktkenntnis und Verkaufserfahrung stellt. Genau deshalb bewerbe ich mich ehrlich als Quereinsteiger, der bereit ist, viel zu lernen.",
      absatz2:
        "Was mich anzieht, ist der Umgang mit Kundinnen und Kunden rund um hochwertige Fahrzeuge. Ich möchte zuhören, Bedürfnisse verstehen und Schritt für Schritt Markenwissen zu Audi, Maserati und Occasionen aufbauen. Aus meinen bisherigen Jobs bringe ich Zuverlässigkeit, einen ruhigen Umgang und die Bereitschaft mit, Prozesse genau zu lernen.",
      absatz3:
        "Deutsch ist meine Muttersprache. Ich bin motiviert, lernbereit und ab sofort oder nach Vereinbarung verfügbar. Über ein Gespräch würde ich mich freuen.",
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
    zielposition: "Automotive Sales Advisor",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, living in Bern. I am interested in cars and direct customer contact. In mini jobs I learned to welcome people courteously, listen carefully and work reliably under pressure. I do not yet have a completed sales apprenticeship. At Automobile Nemeth I want to learn vehicles and processes thoroughly.",
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
      "Interest in cars and advisory conversations",
      "Friendly presence and good listening",
      "Reliability and willingness to learn",
      "Teamwork and a neat appearance",
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
      anrede: "Dear Automobile Nemeth team / Dear Sir or Madam",
      absatz1:
        "I am applying for the Automotive Sales Advisor role at Automobile Nemeth AG in Hinterkappelen. I am 19 and live in Bern. I know the role expects strong product knowledge and sales experience. I am applying honestly as a career starter ready to learn a lot.",
      absatz2:
        "I am drawn to working with customers around quality vehicles. I want to listen, understand needs and build brand knowledge for Audi, Maserati and used cars step by step. From previous jobs I bring reliability, a calm manner and the willingness to learn processes carefully.",
      absatz3:
        "German is my native language. I am motivated, eager to learn and available immediately or by arrangement. I would welcome a conversation.",
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
