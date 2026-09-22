/**
 * Ideal-Bewerbungsmappe - DE + EN
 * ERUPT AG / Lounge Bern - Initiativbewerbung Vollzeit (Lounge Host / Team)
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "ERUPT AG - Parkterrasse 14, 3012 Bern",
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
      betreffPrefix: "Initiativbewerbung -",
      printHint: "PDF mit einem Klick speichern (ohne Browser Kopf und Fußzeilen).",
      printBtn: "PDF herunterladen",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Vollzeit Lounge Host / Gästebetreuung",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19, jung, lernbereit und motiviert und suche eine Vollzeitstelle. Nach meinem Schulabschluss habe ich mehrere Monate bei EVA Köln West gearbeitet. Dort habe ich Gäste begrüsst, Headsets eingestellt und Sessions begleitet. Davor hatte ich Minijobs in der Gastronomie bei Burgerwerk und Restaurant Am Fels, wo ich Stosszeiten, Gästekontakt und das Anpacken im kleinen Team gelernt habe. Bei Burgerwerk habe ich ausserdem ein digitales System programmiert, eingeführt und Kollegen geschult. Privat bin ich stark im Gaming unterwegs. Ich wohne in Bern an der Bottigenstrasse 300 und würde mich freuen, Gäste in der ERUPT Lounge in Vollzeit zu begrüssen und Events mitzutragen.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule Gastronomie Minijobs, danach mehrere Monate Minijob bei EVA Köln West.",
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
        rolle: "Minijob VR Host / Gästebetreuung",
        firma: "EVA Köln West",
        ort: "Köln",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Direkt nach dem Schulabschluss mehrere Monate Gäste durch VR Sessions begleitet",
          "Headsets und Controllers einstellen, Spielbereich erklären, Erstspielern helfen",
          "Zwischen den Sessions Geräte checken und sauber weitergeben und ruhig bleiben, wenn Technik hakelt",
        ],
      },
      {
        rolle: "Minijob Betrieb und digitale Prozesse",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "Hohes Gästeaufkommen: Überblick behalten, Prioritäten setzen, Servicequalität halten",
          "Digitales System programmiert, eingeführt und Mitarbeitende geschult, also Onboarding und Technik erklären für Laien",
          "Technik so eingesetzt, dass sie den Betrieb und das Gästeerlebnis messbar erleichtert",
        ],
      },
      {
        rolle: "Minijob Service Unterstützung",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Abläufe für Gäste und Team reibungslos halten, also Warteschlange, Timing und die nächste Gruppe vorbereiten",
          "Ordnung und Hygiene am Arbeitsplatz und Stationen wieder einsatzbereit machen",
          "Im kleinen Team Absprache halten und mitdenken, statt nur Anweisungen abzuwarten",
        ],
      },
    ],
    skills: [
      "Gastgeber und Host: Empfang, Erklärung, Betreuung",
      "Stosszeiten und Gruppen unter Druck",
      "Gaming und Technik verständlich erklären",
      "Gerne im Team und bei Events anpacken",
      "Vollzeit verfügbar, auch Abende und Wochenenden",
    ],
    projekte: [
      {
        titel: "Gaming und VR privat",
        beschreibung:
          "Ich beschäftige mich schon länger mit Gaming und VR und weiß, worauf es praktisch ankommt: Geräte erklären, Erstspielern kurz helfen und ruhig bleiben, wenn Technik hakelt. Auch typische Probleme kenne ich, wenn Setup nicht sitzt oder jemand Hilfe braucht, und wie man das unkompliziert löst.",
      },
      {
        titel: "Digitales System bei Burgerwerk",
        beschreibung:
          "Eigenes digitales Tool programmiert, im Betrieb eingeführt und das Team geschult. Technik erklären, die Hürde für Kollegen senken und Alltagsprozesse verbessern.",
      },
      {
        titel: "Digitale Software in der Schule",
        beschreibung:
          "In der Schule eine eigene digitale Anwendung erstellt, von der Idee bis zur nutzbaren Lösung.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrtes Team von ERUPT",
      absatz1:
        "hiermit bewerbe ich mich initiativ um eine Vollzeitstelle in eurem Team in der Lounge Bern, gerne als Lounge Host oder in der Gästebetreuung oder in einer vergleichbaren Rolle rund um Empfang, Erklärung, Betreuung und Events. Ich bin 19 und weiß, dass ich noch jung bin, aber genau deshalb bin ich desto lernbereiter und motivierter, mich schnell einzuarbeiten und Verantwortung zu übernehmen. Ich wohne in Bern an der Bottigenstrasse 300. Obwohl aktuell keine feste Stelle ausgeschrieben ist, möchte ich mich vorstellen, falls ihr Verstärkung in Vollzeit braucht, auch für den laufenden Lounge Betrieb sowie LAN Parties und HeroFest.",
      absatz2:
        "ERUPT verbindet genau das, was mir Spass macht: Gaming, Community und Menschen begrüssen. Nach der Schule habe ich mehrere Monate bei EVA Köln West gearbeitet und Gäste durch Sessions begleitet, mit kurzer Erklärung und Hilfe, wenn etwas hakt. Davor habe ich in der Gastronomie bei Burgerwerk und Am Fels Stosszeiten und Teamfit gelernt, und bei Burgerwerk ein digitales System eingeführt und geschult. In eurem Team will ich anpacken, eure Abläufe lernen und dafür sorgen, dass Gäste bei euch eine richtig gute Zeit haben, ob am PC, an der Konsole oder bei Events.",
      absatz3:
        "Deutsch ist meine Muttersprache und Englisch spreche ich auf B2 Niveau, was für internationale Gäste hilfreich ist. Ich bin für Vollzeit verfügbar, flexibel bei Abenden und Wochenenden und könnte ausserdem schon heute anfangen. Über ein Gespräch würde ich mich sehr freuen, gerne auch verbunden mit einem Probearbeitstag vor Ort an der Parkterrasse.",
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
      betreffPrefix: "Unsolicited application -",
      printHint: "Download the PDF with one click (no browser headers or footers).",
      printBtn: "Download PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Full-time Lounge Host / Guest Care",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, young, eager to learn and motivated, and I am looking for a full-time role. After finishing school I worked for several months at EVA Köln West. There I welcomed guests, fitted headsets and ran sessions. Before that I had mini jobs in hospitality at Burgerwerk and Restaurant Am Fels, where I learned peak times, guest contact and jumping in as part of a small team. At Burgerwerk I also programmed a digital system, rolled it out and trained colleagues. Privately I am really into gaming. I live in Bern at Bottigenstrasse 300 and would love to welcome guests at the ERUPT Lounge full time and support events.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Hospitality mini jobs alongside school, afterwards several months at EVA Köln West.",
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
        rolle: "Mini job VR host and guest care",
        firma: "EVA Köln West",
        ort: "Cologne",
        zeitraum: "02.2026 - 07.2026",
        bullets: [
          "Right after school, several months guiding guests through VR sessions",
          "Fitted headsets and controllers, explained the play area, helped first timers",
          "Checked and cleaned gear between sessions and stayed calm when tech glitched",
        ],
      },
      {
        rolle: "Mini job operations and digital processes",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "09.2025 - 01.2026",
        bullets: [
          "High guest volume: keep overview, set priorities, protect service quality",
          "Programmed a digital system, rolled it out and trained staff, including onboarding and explaining tech to non experts",
          "Used tech so it genuinely improved operations and the guest experience",
        ],
      },
      {
        rolle: "Mini job service support",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen Loope",
        zeitraum: "03.2025 - 08.2025",
        bullets: [
          "Kept guest and team flow smooth, including queue, timing and preparing the next group",
          "Workplace order and hygiene, reset stations for the next guests",
          "Clear communication in a small team, think ahead instead of only waiting for instructions",
        ],
      },
    ],
    skills: [
      "Host: reception, explaining, guest care",
      "Peak times and groups under pressure",
      "Explaining gaming and tech clearly",
      "Happy to jump in with the team and at events",
      "Available full time, including evenings and weekends",
    ],
    projekte: [
      {
        titel: "Gaming and VR personal",
        beschreibung:
          "I have been into gaming and VR for a while and know the practical stuff: explaining gear, helping first timers and staying calm when tech glitches. I also know the usual hiccups when a setup is off or someone needs a hand, and how to fix that without fuss.",
      },
      {
        titel: "Digital system at Burgerwerk",
        beschreibung:
          "Programmed a digital tool, introduced it in live operations and trained the team. Explain tech, lower the barrier for colleagues and improve day to day flow.",
      },
      {
        titel: "Digital software at school",
        beschreibung:
          "Built a digital application at school, from idea to usable tool.",
      },
    ],
    motivation: {
      anrede: "Dear ERUPT team",
      absatz1:
        "I am writing with an unsolicited application for a full-time role in your team at the Lounge Bern, ideally as lounge host or in guest care or a similar role around reception, explaining, guest care and events. I am 19 and I know I am still young, but that is exactly why I am all the more eager to learn and motivated to get up to speed quickly and take on responsibility. I live in Bern at Bottigenstrasse 300. Even though you have no fixed roles listed right now, I would like to introduce myself in case you need full-time support, including day to day lounge operations as well as LAN parties and HeroFest.",
      absatz2:
        "ERUPT combines what I enjoy: gaming, community and welcoming people. After school I worked for several months at EVA Köln West and guided guests through sessions with a short intro and help when something glitches. Before that I learned peak times and team fit in hospitality at Burgerwerk and Am Fels, and at Burgerwerk I rolled out and trained a digital system. In your team I want to jump in, learn your flow and make sure guests have a really good time, whether at a PC, on console or at events.",
      absatz3:
        "German is my native language and English is B2, which helps with international guests. I am available full time, flexible on evenings and weekends, and could also start as early as today. I would be very happy to have a conversation, ideally together with a trial day on site at Parkterrasse.",
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
