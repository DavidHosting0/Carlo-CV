/**
 * Bewerbungsmappe DE + EN
 * MediaMarkt CH Verkaufsberater*in 100% (m/w/d), Gümligen / Muri Bern
 * Stelle: https://careers.mediamarktsaturn.com/MediaMarktCH/job/Gümligen-Verkaufsberaterin-100-(mwd)-3073/1423378833/
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 18,
  ort: "Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "MediaMarkt Markt Gümligen / Muri Bern",
};

const CV_I18N = {
  de: {
    ui: {
      profil: "Profil",
      erfahrung: "Praxiserfahrung",
      ausbildung: "Ausbildung",
      sprachen: "Sprachen",
      skills: "Qualifikationen",
      projekte: "Projekte & Nebenleistungen",
      zeugnisse: "Zeugnisse & Nachweise",
      zeugnisseIntro: "Anlagen: Abgangszeugnis und Schulzeugnis.",
      foto: "Foto",
      fotoHint: "einfügen",
      alterSuffix: "Jahre",
      nationalitaetLabel: "Nationalität",
      wohnortPrefix: "wohnhaft in",
      betreffPrefix: "Bewerbung als",
      printHint: "Zum PDF: Strg+P → „Als PDF speichern“ (Ränder: Standard/Keine).",
      printBtn: "Drucken / PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Verkaufsberater 100% (m/w/d)",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 18 Jahre alt und wohne in Bern. Technik interessiert mich privat seit Langem, besonders Consumer Electronics und Virtual Reality. Ich kann technische Zusammenhänge gut erklären und gehe gerne auf Fragen ein. In Minijobs in der Gastronomie in Deutschland habe ich gelernt, unter Zeitdruck freundlich und zuverlässig zu arbeiten. Bei Burgerwerk habe ich zusätzlich ein digitales System entwickelt, eingeführt und das Team darin geschult. Als Verkaufsberater bei MediaMarkt Gümligen möchte ich Kundinnen und Kunden fachlich und verständlich beraten.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule Minijobs mit Kundenkontakt und Schichtarbeit in Deutschland.",
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
        rolle: "Minijob Kundenkontakt & Betrieb",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen Ehreshoven",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Abend und Wochenendschichten, auch bei hohem Andrang",
          "Zuverlässige Mitarbeit im Team und saubere Übergaben",
          "Selbstständiges Mitdenken im laufenden Betrieb",
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
      {
        rolle: "Minijob Betrieb & digitale Prozesse",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "07.2024 - 02.2025",
        bullets: [
          "Mitarbeit bei hohem Kundenaufkommen mit gutem Überblick",
          "Digitales System programmiert, eingeführt und Mitarbeitende geschult",
          "Technik praxisnah eingesetzt, damit Abläufe einfacher werden",
        ],
      },
    ],
    skills: [
      "Freude am Kundenkontakt und am Beraten",
      "Technisches Interesse und verständliche Produkterklärungen",
      "Aufmerksames Zuhören und passende Empfehlungen",
      "Zuverlässigkeit, Freundlichkeit und Teamfähigkeit",
      "Deutsch Muttersprache",
    ],
    projekte: [
      {
        titel: "Technik und VR",
        beschreibung:
          "Privat beschäftige ich mich intensiv mit Technik und Virtual Reality. Ich vergleiche Geräte, teste Setups und setze mich mit Stärken und Grenzen auseinander. Dadurch kann ich im Verkauf aus eigener Erfahrung beraten und nicht nur Werbetexte wiedergeben.",
      },
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung:
          "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Mir ist wichtig, dass technische Lösungen im Alltag wirklich nutzbar sind.",
      },
      {
        titel: "Digitale Software in der Schule",
        beschreibung:
          "In der Schule eine eigene digitale Anwendung erstellt und bis zur praktischen Nutzung weiterentwickelt.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrtes Team von MediaMarkt / Sehr geehrter Herr Fischer",
      absatz1:
        "hiermit bewerbe ich mich als Verkaufsberater 100% (m/w/d) am Standort Gümligen / Muri Bern. Ich bin 18 Jahre alt, wohne in Bern und habe bereits in Minijobs in Deutschland Erfahrung im Umgang mit Menschen unter Zeitdruck gesammelt. Da mich Technik und der direkte Kundenkontakt besonders interessieren, möchte ich gerne bei MediaMarkt einsteigen.",
      absatz2:
        "An der ausgeschriebenen Stelle spricht mich vor allem die Beratung an. Ich möchte herausfinden, was Kundinnen und Kunden wirklich brauchen, und ihnen dann ehrlich sagen, welches Gerät und welche Zusatzleistung sinnvoll sind. Privat kenne ich mich mit Consumer Electronics und VR gut aus und erkläre technische Themen gerne verständlich. Auch ein gepflegtes Sortiment und klare Übersicht im Regal sind mir wichtig, weil das den Alltag für Kundschaft und Team erleichtert. Aus meinen Minijobs bringe ich Zuverlässigkeit und Teamgeist mit. Bei Burgerwerk habe ich ausserdem ein digitales System entwickelt und das Team dafür geschult.",
      absatz3:
        "Ich bin motiviert, dazuzulernen und mich im Markt weiterzuentwickeln. Deutsch ist meine Muttersprache. Ich bin ab sofort verfügbar und freue mich sehr über die Möglichkeit eines Gesprächs, gerne auch verbunden mit einem Probearbeitstag vor Ort.",
      gruss: "Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },

  en: {
    ui: {
      profil: "Profile",
      erfahrung: "Practical experience",
      ausbildung: "Education",
      sprachen: "Languages",
      skills: "Skills",
      projekte: "Projects & extras",
      zeugnisse: "Certificates & documents",
      zeugnisseIntro: "Attachments: school leaving certificate and transcript.",
      foto: "Photo",
      fotoHint: "add here",
      alterSuffix: "years old",
      nationalitaetLabel: "Nationality",
      wohnortPrefix: "currently living in",
      betreffPrefix: "Application for",
      printHint: "For PDF: Ctrl+P → “Save as PDF” (margins: Default/None).",
      printBtn: "Print / PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Sales Advisor 100% (m/f/d)",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 18 years old and living in Bern. Technology has interested me for a long time, especially consumer electronics and virtual reality. I explain technical topics clearly and enjoy answering questions. In hospitality mini jobs in Germany I learned to work reliably and courteously under time pressure. At Burgerwerk I also developed a digital system, introduced it and trained the team. As a sales advisor at MediaMarkt Gümligen I want to advise customers in a competent and understandable way.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Alongside school, mini jobs with customer contact and shift work in Germany.",
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
        rolle: "Mini job customer contact & operations",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen Ehreshoven",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Evening and weekend shifts, including busy periods",
          "Reliable teamwork and clean handovers",
          "Independent contribution in day to day operations",
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
      {
        rolle: "Mini job operations & digital processes",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "07.2024 - 02.2025",
        bullets: [
          "Worked during high customer volume while keeping an overview",
          "Programmed a digital system, introduced it and trained staff",
          "Applied technology practically to simplify everyday workflows",
        ],
      },
    ],
    skills: [
      "Enjoy customer contact and advising",
      "Technical interest and clear product explanations",
      "Attentive listening and suitable recommendations",
      "Reliability, friendliness and teamwork",
      "German native",
    ],
    projekte: [
      {
        titel: "Technology and VR",
        beschreibung:
          "Privately I engage intensively with technology and virtual reality. I compare devices, test setups and look at strengths and limitations. That helps me advise from experience rather than only repeating marketing text.",
      },
      {
        titel: "Digital system at Burgerwerk",
        beschreibung:
          "Developed a digital tool, introduced it at work and trained the team. I care that technical solutions are genuinely usable day to day.",
      },
      {
        titel: "Digital software at school",
        beschreibung:
          "At school I created a digital application and developed it through to practical use.",
      },
    ],
    motivation: {
      anrede: "Dear MediaMarkt team / Dear Mr Fischer",
      absatz1:
        "I am applying for the Sales Advisor 100% (m/f/d) role at Gümligen / Muri Bern. I am 18 years old, live in Bern and already have experience working with people under time pressure through mini jobs in Germany. As technology and direct customer contact particularly interest me, I would like to join MediaMarkt.",
      absatz2:
        "What attracts me about the role is the advisory side. I want to find out what customers really need and then give an honest recommendation on which device and which extra service make sense. Privately I know consumer electronics and VR well and enjoy explaining technical topics clearly. A tidy assortment and clear shelf overview also matter to me, because that makes everyday work easier for customers and the team. From my mini jobs I bring reliability and team spirit. At Burgerwerk I also developed a digital system and trained the team to use it.",
      absatz3:
        "I am motivated to keep learning and to develop within the store. German is my native language. I am available immediately and would be glad to arrange an interview, ideally including a trial day on site.",
      gruss: "Kind regards / Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },
};

function getCvContent(lang) {
  const locale = CV_I18N[lang] ? lang : "de";
  return { ...CV_SHARED, ...CV_I18N[locale], lang: locale };
}

/** Default export for older mental model */
const CV_CONTENT = getCvContent("de");
