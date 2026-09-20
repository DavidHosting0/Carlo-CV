/**
 * Ideal-Bewerbungsmappe — DE + EN
 * Fusion Arena Bern GmbH — Initiativbewerbung (Team / Guest Host)
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+49 176 822 96533",
  email: "Koch.carlo@bluewin.ch",
  foto: "Profilbild.png",
  arbeitgeberZiel: "Fusion Arena Bern GmbH — Zeughausgasse 27, 3011 Bern",
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
      betreffPrefix: "Initiativbewerbung —",
      printHint: "PDF mit einem Klick speichern (ohne Browser Kopf und Fußzeilen).",
      printBtn: "PDF herunterladen",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Mitarbeit im Team (Gastgeber / VR Host)",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 19, jung, lernbereit und motiviert. Nach meinem Schulabschluss habe ich mehrere Monate bei EVA Köln West gearbeitet. Dort habe ich Gäste begrüßt, Headsets eingestellt und Sessions begleitet. Davor hatte ich Minijobs in der Gastronomie bei Burgerwerk und Restaurant Am Fels, wo ich Stoßzeiten, Gästekontakt und das Anpacken im kleinen Team gelernt habe. Bei Burgerwerk habe ich außerdem ein digitales System programmiert, eingeführt und Kollegen geschult. Privat bin ich stark in VR unterwegs. Ich wohne in Bern an der Bottigenstrasse 300 und würde mich freuen, Gäste bei Fusion Arena durch starke Sessions zu begleiten.",
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
        zeitraum: "02.2026 – 07.2026",
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
        zeitraum: "09.2025 – 01.2026",
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
        zeitraum: "03.2025 – 08.2025",
        bullets: [
          "Abläufe für Gäste und Team reibungslos halten, also Warteschlange, Timing und die nächste Gruppe vorbereiten",
          "Ordnung und Hygiene am Arbeitsplatz und Stationen wieder einsatzbereit machen",
          "Im kleinen Team Absprache halten und mitdenken, statt nur Anweisungen abzuwarten",
        ],
      },
    ],
    skills: [
      "Gastgeber und Host: Briefing, Betreuung, Session Flow",
      "Stoßzeiten und Gruppen unter Druck",
      "Gerne im Team arbeiten",
      "VR: Setup, Guardian, Hygiene, kleine Probleme lösen",
      "Technik verständlich erklären",
      "Deutsch, Englisch, Italienisch",
      "Schichtflexibilität an Abenden und Wochenenden",
    ],
    projekte: [
      {
        titel: "Virtual Reality privat",
        beschreibung:
          "Ich beschäftige mich schon länger mit VR und weiß, worauf es praktisch ankommt: Headset richtig einstellen, Spielbereich setzen, Controllers erklären und Erstspielern kurz helfen, bis sie sich zurechtfinden. Auch typische Probleme kenne ich, wenn Tracking hakelt, das WLAN schwach ist oder jemand unwohl wird, und wie man ruhig damit umgeht. Und natürlich hatte ich auch schon viel Spaß mit VR Brillen.",
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
      anrede: "Sehr geehrtes Team von Fusion Arena Bern",
      absatz1:
        "hiermit bewerbe ich mich initiativ um eine Mitarbeit in eurem Team, gerne als Gastgeber oder VR Host oder in einer vergleichbaren Rolle rund um Empfang, Briefing, Betreuung und Session Abläufe. Ich bin 19 und weiß, dass ich noch jung bin, aber genau deshalb bin ich desto lernbereiter und motivierter, mich schnell einzuarbeiten und Verantwortung zu übernehmen. Ich wohne in Bern an der Bottigenstrasse 300. Obwohl aktuell keine Stelle ausgeschrieben ist, möchte ich mich vorstellen, falls ihr Verstärkung braucht oder bald sucht.",
      absatz2:
        "Fusion Arena Bern verbindet genau das, was mir Spaß macht: Menschen begrüßen und VR erlebbar machen. Nach der Schule habe ich mehrere Monate bei EVA Köln West gearbeitet und Gäste durch Sessions begleitet, mit Headset, Controllers, kurzer Erklärung und Hilfe, wenn etwas hakt. Davor habe ich in der Gastronomie bei Burgerwerk und Am Fels Stoßzeiten und Teamfit gelernt, und bei Burgerwerk ein digitales System eingeführt und geschult. In eurem Team will ich anpacken, eure Abläufe lernen und dafür sorgen, dass Gäste eine richtig gute Zeit haben. Und natürlich hatte ich auch schon viel Spaß mit VR Brillen.",
      absatz3:
        "Deutsch ist meine Muttersprache und Englisch spreche ich auf B2 Niveau, was für internationale Gäste hilfreich ist. Ich bin flexibel bei Abenden und Wochenenden und könnte außerdem schon heute anfangen. Über ein Interview würde ich mich sehr freuen, gerne auch verbunden mit einem Probearbeitstag vor Ort.",
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
      betreffPrefix: "Unsolicited application —",
      printHint: "Download the PDF with one click (no browser headers or footers).",
      printBtn: "Download PDF",
      langDe: "Deutsch",
      langEn: "English",
    },
    zielposition: "Team role (Guest Host / VR Host)",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "",
      hinweis: "",
    },
    kurzprofil:
      "I am Carlo Koch, 19, young, eager to learn and motivated. After finishing school I worked for several months at EVA Köln West. There I welcomed guests, fitted headsets and ran sessions. Before that I had mini jobs in hospitality at Burgerwerk and Restaurant Am Fels, where I learned peak times, guest contact and jumping in as part of a small team. At Burgerwerk I also programmed a digital system, rolled it out and trained colleagues. Privately I am really into VR. I live in Bern at Bottigenstrasse 300 and would love to guide guests through great sessions at Fusion Arena.",
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
        zeitraum: "02.2026 – 07.2026",
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
        zeitraum: "09.2025 – 01.2026",
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
        zeitraum: "03.2025 – 08.2025",
        bullets: [
          "Kept guest and team flow smooth, including queue, timing and preparing the next group",
          "Workplace order and hygiene, reset stations for the next guests",
          "Clear communication in a small team, think ahead instead of only waiting for instructions",
        ],
      },
    ],
    skills: [
      "Host: briefing, guest care, session flow",
      "Peak times and groups under pressure",
      "Enjoy working in a team",
      "VR: setup, guardian, hygiene, fixing small issues",
      "Explaining tech clearly",
      "German, English, Italian",
      "Shift flexibility on evenings and weekends",
    ],
    projekte: [
      {
        titel: "Virtual Reality personal",
        beschreibung:
          "I have been into VR for a while and know the practical stuff: fitting the headset, setting the play area, explaining the controllers and helping first timers until they are comfortable. I also know the usual hiccups when tracking glitches, WiFi is weak or someone feels off, and how to stay calm and fix them. And of course I have also had a lot of fun with VR headsets.",
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
      anrede: "Dear Fusion Arena Bern team",
      absatz1:
        "I am writing with an unsolicited application to join your team, ideally as guest host or VR host or a similar role around reception, briefing, guest care and session flow. I am 19 and I know I am still young, but that is exactly why I am all the more eager to learn and motivated to get up to speed quickly and take on responsibility. I live in Bern at Bottigenstrasse 300. Even though you have no open roles listed right now, I would like to introduce myself in case you need support or will hire soon.",
      absatz2:
        "Fusion Arena Bern combines what I enjoy: welcoming people and making VR feel easy. After school I worked for several months at EVA Köln West and guided guests through sessions with headset, controllers, a short intro and help when something glitches. Before that I learned peak times and team fit in hospitality at Burgerwerk and Am Fels, and at Burgerwerk I rolled out and trained a digital system. In your team I want to jump in, learn your flow and make sure guests have a really good time. And of course I have also had a lot of fun with VR headsets.",
      absatz3:
        "German is my native language and English is B2, which helps with international guests. I am flexible on evenings and weekends and could also start as early as today. I would be very happy to have an interview, ideally together with a trial day on site.",
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
