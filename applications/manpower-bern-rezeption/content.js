/**
 * Bewerbungsmappe DE + EN
 * Manpower AG Bern - Front Office Agent / Rezeptionist/in (w/m/d) 80-100%
 * Stelle: https://www.manpower.ch/de/job/bern/front-office-agent-rezeptionist-in-w-m-d-80-100-/625588
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "Manpower AG - Filiale Bern (Kundenstelle Hotel / Front Office)",
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
      zeugnisseIntro:
        "Anlagen: Abgangszeugnis und Schulzeugnis. Zu den Arbeitsplätzen liegen keine Arbeitszeugnisse vor, sondern jeweils nur die Arbeitsverträge. Deshalb sind hier keine weiteren Nachweise angehängt. Bei Bedarf kann ich die Arbeitsverträge gerne vorweisen.",
      foto: "Foto",
      fotoHint: "einfügen",
      alterSuffix: "Jahre",
      nationalitaetLabel: "Nationalität",
      wohnortPrefix: "wohnhaft in",
      betreffPrefix: "Bewerbung als",
      printHint: "PDF mit einem Klick speichern (ohne Browser Kopf und Fußzeilen).",
      printBtn: "PDF herunterladen",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Front Office Agent / Rezeptionist (w/m/d) 80-100%",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19 Jahre alt und wohne in Bern. Nach der Schule habe ich mehrere Monate Gäste empfangen, Abläufe erklärt und Anliegen ruhig und klar bearbeitet. Davor habe ich in der Gastronomie bei Burgerwerk und Restaurant Am Fels gelernt, in Stosszeiten den Überblick zu behalten und im Team mitzudenken. Bei Burgerwerk habe ich ausserdem ein digitales System programmiert, eingeführt und Kollegen geschult. Mit MS Office und digitalen Arbeitsmitteln komme ich sicher zurecht. Als Front Office Agent möchte ich Gäste professionell begrüssen und die Abläufe an der Rezeption zuverlässig mittragen.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule Gastronomie-Minijobs, danach mehrere Monate Gästebetreuung und Empfang.",
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
        hinweis: "Englisch B2 · Italienisch B2 · Leistungskurse Englisch & Erdkunde",
      },
    ],
    sprachen: [
      { name: "Deutsch", niveau: "Muttersprache" },
      { name: "Englisch", niveau: "B2" },
      { name: "Italienisch", niveau: "B2" },
    ],
    erfahrung: [
      {
        rolle: "Minijob Empfang & Gästebetreuung",
        firma: "EVA Köln West",
        ort: "Köln",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Gäste begrüsst, kurz informiert und durch den Ablauf begleitet",
          "Erste Anlaufstelle bei Fragen, auch bei internationalen Gästen auf Englisch",
          "Zwischen den Terminen Überblick behalten, Übergaben sauber halten und ruhig bleiben, wenn etwas nicht nach Plan läuft",
        ],
      },
      {
        rolle: "Minijob Betrieb & digitale Prozesse",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Hohes Gästeaufkommen: Prioritäten setzen und Servicequalität halten",
          "Digitales System programmiert, eingeführt und Mitarbeitende geschult",
          "Sorgfältige Dokumentation und klare Übergaben zwischen Schichten",
        ],
      },
      {
        rolle: "Minijob Service-Unterstützung",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen-Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Abläufe für Gäste und Team reibungslos halten",
          "Ordnung, Hygiene und zuverlässige Vorbereitung der Stationen",
          "Im kleinen Team Absprache halten und mitdenken",
        ],
      },
    ],
    skills: [
      "Gepflegtes Auftreten und freundlicher Erstkontakt",
      "Organisierte, selbstständige Arbeitsweise",
      "Ruhige Kommunikation unter Zeitdruck",
      "Sicherer Umgang mit MS Office und digitalen Systemen",
      "Bereitschaft, PMS und Hotelabläufe rasch zu lernen",
    ],
    projekte: [
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung:
          "Eigenes digitales Tool programmiert, im Betrieb eingeführt und das Team geschult. Digitale Abläufe lerne ich schnell und setze sie so um, dass sie im Alltag wirklich helfen.",
      },
      {
        titel: "Digitale Software in der Schule",
        beschreibung:
          "In der Schule eine eigene digitale Anwendung erstellt, von der Idee bis zur nutzbaren Lösung.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrter Herr Kecskes",
      absatz1:
        "hiermit bewerbe ich mich als Front Office Agent / Rezeptionist (w/m/d) 80-100% für die von Manpower ausgeschriebene Stelle in Bern. Ich bin 19 Jahre alt, wohne an der Bottigenstrasse 300 in Bern und bringe Praxis aus Empfang, Gästebetreuung und Gastronomie mit. Eine feste Hotelrezeption habe ich noch nicht geführt. Was ich mitbringe, ist der direkte Umgang mit Gästen, eine strukturierte Arbeitsweise und die Motivation, die Abläufe an der Rezeption gründlich zu lernen.",
      absatz2:
        "An der Stelle reizt mich der erstklassige Service für nationale und internationale Gäste: Begrüssung, Check-in und Check-out, Reservierungen und die Rolle als Ansprechperson für Anliegen. Nach der Schule habe ich mehrere Monate Gäste empfangen und begleitet. In der Gastronomie bei Burgerwerk und Am Fels habe ich Stosszeiten, Teamarbeit und klare Übergaben gelernt. Bei Burgerwerk habe ich ausserdem ein digitales System eingeführt und geschult. Mit MS Office arbeite ich sicher. Erfahrung mit PMS-Systemen wie MEWS oder Dailypoint bringe ich noch nicht mit, arbeite mich aber schnell und sorgfältig ein.",
      absatz3:
        "Deutsch ist meine Muttersprache, Englisch spreche ich auf B2-Niveau, Italienisch ebenfalls auf B2. Ich bin für 80 bis 100% verfügbar, flexibel bei Schichten und könnte ab sofort oder nach Vereinbarung starten. Über ein Gespräch würde ich mich sehr freuen.",
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
      zeugnisseIntro:
        "Attachments: school leaving certificate and transcript. For my workplaces I do not have employment references, only the employment contracts. That is why no further workplace documents are attached here. I am happy to present the contracts on request.",
      foto: "Photo",
      fotoHint: "add here",
      alterSuffix: "years old",
      nationalitaetLabel: "Nationality",
      wohnortPrefix: "currently living in",
      betreffPrefix: "Application for",
      printHint: "Download the PDF with one click (no browser headers or footers).",
      printBtn: "Download PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Front Office Agent / Receptionist (f/m/d) 80-100%",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19 years old and living in Bern. After school I spent several months welcoming guests, explaining processes and handling requests calmly and clearly. Before that, in hospitality at Burgerwerk and Restaurant Am Fels, I learned to keep an overview during peak times and to think ahead as part of a team. At Burgerwerk I also programmed a digital system, rolled it out and trained colleagues. I am confident with MS Office and digital tools. As a Front Office Agent I want to welcome guests professionally and support reception operations reliably.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Hospitality mini jobs alongside school, afterwards several months in guest care and reception.",
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
        hinweis: "English B2 · Italian B2 · advanced courses English & Geography",
      },
    ],
    sprachen: [
      { name: "German", niveau: "Native" },
      { name: "English", niveau: "B2" },
      { name: "Italian", niveau: "B2" },
    ],
    erfahrung: [
      {
        rolle: "Mini job reception & guest care",
        firma: "EVA Köln West",
        ort: "Cologne",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Welcomed guests, briefed them and guided them through the process",
          "First point of contact for questions, including English with international guests",
          "Kept overview between appointments, clean handovers, stayed calm when something did not go to plan",
        ],
      },
      {
        rolle: "Mini job operations & digital processes",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "High guest volume: set priorities and protect service quality",
          "Programmed a digital system, introduced it and trained staff",
          "Careful documentation and clear handovers between shifts",
        ],
      },
      {
        rolle: "Mini job service support",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen-Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Kept guest and team flow smooth",
          "Order, hygiene and reliable station preparation",
          "Clear communication in a small team, think ahead",
        ],
      },
    ],
    skills: [
      "Polished presence and friendly first contact",
      "Organised, independent way of working",
      "Calm communication under time pressure",
      "Confident with MS Office and digital systems",
      "Ready to learn PMS and hotel procedures quickly",
    ],
    projekte: [
      {
        titel: "Digital system at Burgerwerk",
        beschreibung:
          "Programmed a digital tool, introduced it in live operations and trained the team. I learn digital workflows quickly and implement them so they genuinely help day to day.",
      },
      {
        titel: "Digital software at school",
        beschreibung:
          "Built a digital application at school, from idea to usable tool.",
      },
    ],
    motivation: {
      anrede: "Dear Mr Kecskes",
      absatz1:
        "I am applying for the Front Office Agent / Receptionist (f/m/d) 80-100% role advertised by Manpower in Bern. I am 19 years old, live at Bottigenstrasse 300 in Bern and bring practical experience from reception, guest care and hospitality. I have not yet run a hotel front desk on my own. What I bring is direct guest contact, a structured way of working and the motivation to learn reception procedures thoroughly.",
      absatz2:
        "What attracts me about the role is first-class service for national and international guests: welcome, check-in and check-out, reservations and being the contact person for requests. After school I spent several months welcoming and guiding guests. In hospitality at Burgerwerk and Am Fels I learned peak times, teamwork and clear handovers. At Burgerwerk I also rolled out and trained a digital system. I am confident with MS Office. I do not yet have experience with PMS systems such as MEWS or Dailypoint, but I pick up new tools quickly and carefully.",
      absatz3:
        "German is my native language, English is B2, Italian is also B2. I am available for 80 to 100%, flexible on shifts, and could start immediately or by arrangement. I would be very glad to have a conversation.",
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
