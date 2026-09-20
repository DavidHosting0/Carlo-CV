/**
 * Ideal-Bewerbungsmappe — DE + EN
 * Sando BBZ Sàrl, Bern — Chef de Partie / Chef de Cuisine
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 18,
  ort: "Bern",
  telefon: "+41 09 238 49 3",
  email: "carlo.koch@email.ch",
  foto: "Bewerbungsfoto.png",
  arbeitgeberZiel: "Sando BBZ Sàrl — Sando Bern (Bubenbergplatz)",
};

const CV_I18N = {
  de: {
    ui: {
      profil: "Profil",
      erfahrung: "Berufserfahrung",
      ausbildung: "Ausbildung",
      sprachen: "Sprachen",
      skills: "Qualifikationen",
      projekte: "Projekte & Nebenleistungen",
      zeugnisse: "Zeugnisse & Nachweise",
      zeugnisseIntro:
        "Angehängt: Abgangszeugnis und Schulzeugnis (Nachweis, falls gewünscht).",
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
    zielposition: "Chef de Partie (Entwicklung zum Chef de Cuisine)",
    nationalitaet: "deutsch",
    meta: {
      kennzeichnung: "Ideal-Beispiel / Analyse — Sando Bern",
      hinweis:
        "Lern-Tool: Ideal-Bewerbung für Sando Bern. Restaurantnamen in Engelskirchen/Hongkong sind Beispiel-Referenzen — nur Betriebe eintragen, in denen du wirklich gearbeitet hast.",
    },
    kurzprofil:
      "Ich bin Carlo Koch, 18, und habe trotz meines Alters bereits mehrere Stationen in der Gastronomie hinter mir: Minijobs in deutschen Restaurantküchen und danach rund sieben Monate Hongkong — drei Monate Praktikum ab 18.02.2026, danach vier Monate Festanstellung, weil meine Leistung überzeugt hat. Am 19.09.2026 bin ich nach Deutschland zurückgeflogen und bin derzeit über einen Freund in Bern — und möchte hier in der Küche durchstarten. Für mich zählen Tempo, Hygiene, Teamarbeit und klare Kommunikation unter Druck. Gerade weil ich jung bin, bringe ich hohe Lernbereitschaft, Energie und die Motivation mit, jeden Tag besser zu werden — und Verantwortung als Chef de Partie bei Sando Bern aufzubauen.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details:
        "Parallel zur Schule bereits Minijobs in der Gastronomie; danach direkter Einstieg ins Ausland (Hongkong).",
    },
    zeugnisse: [],
    sprachen: [
      { name: "Deutsch", niveau: "Muttersprache" },
      { name: "Englisch", niveau: "B2 · Arbeitssprache Küche Hongkong" },
      { name: "Spanisch", niveau: "B1/B2" },
    ],
    erfahrung: [
      {
        rolle: "Kitchen Staff (Festanstellung)",
        firma: "Japanese Casual Kitchen — Causeway Bay",
        ort: "Hongkong",
        zeitraum: "18.05.2026 – 18.09.2026",
        bullets: [
          "Feste Stelle nach dem Praktikum: Angebot aufgrund Leistung, Zuverlässigkeit und Tempo",
          "Prep, Station-Support und Ausgabe nach festen Standards in einem high-volume Team",
          "Englisch als Arbeitssprache; Hygiene, Frische und Ticket-Genauigkeit in Lunch- und Dinner-Peaks",
          "Klare Abstimmung mit Service und Expedite unter Druck",
        ],
      },
      {
        rolle: "Küchenpraktikum",
        firma: "Japanese Casual Kitchen — Causeway Bay",
        ort: "Hongkong",
        zeitraum: "18.02.2026 – 17.05.2026",
        bullets: [
          "Drei Monate Intensivpraktikum in einer professionellen Küche in Hongkong",
          "Mise en place, Stationsabläufe, Rezepttreue und Sauberkeit im laufenden Betrieb gelernt",
          "Schnelle Einarbeitung — Übernahme in Festanstellung wegen Leistung und Teamfit",
        ],
      },
      {
        rolle: "Minijob Küche / Prep & Spüle",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen-Ehreshoven",
        zeitraum: "09.2025 – 01.2026",
        bullets: [
          "Abend- und Wochenendschichten: Prep, Beilagen, Spüle, Stationshilfe",
          "Erste Routine in Stoßzeiten in einer regionalen Restaurantküche",
          "Zuverlässige Übernahme von Schichten parallel zum Alltag",
        ],
      },
      {
        rolle: "Minijob Küchenhilfe",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen-Loope",
        zeitraum: "03.2025 – 08.2025",
        bullets: [
          "Unterstützung in der Küche: Prep, Portionierung, Sauberkeit",
          "Grundlagen von Hygiene, Lagerung und Teamarbeit",
        ],
      },
      {
        rolle: "Minijob Spüle & Prep · digitales Lager",
        firma: "Burgerwerk",
        ort: "Deutschland",
        zeitraum: "07.2024 – 02.2025",
        bullets: [
          "Einstieg in die Gastronomie: Spüle, Prep und Unterstützung bei hohem Take-away-Aufkommen",
          "Digitales Lagersystem programmiert, eingeführt und Mitarbeitende darin geschult",
          "Klarere Bestände, weniger Suchzeiten und sauberere Übergaben zwischen Schichten",
        ],
      },
    ],
    skills: [
      "Professionelle Küchenpraxis (DE-Minijobs + HK)",
      "Prep, Station-Support, Mise en place",
      "Tempo & Genauigkeit in Peaks",
      "Hygiene & Lebensmittelsicherheit",
      "Rezept- / Standard-Treue",
      "Digitales Lager / Inventar (Einführung & Schulung)",
      "Internationales Küchenteam (Englisch)",
      "High Volume / Service-Druck",
      "Teamarbeit & klare Kommunikation",
      "Flexibilität: Abende, Wochenenden",
      "Hohe Lernbereitschaft & Motivation",
      "Deutsch · Englisch · Spanisch",
    ],
    projekte: [
      {
        titel: "Digitales Lagersystem — Burgerwerk",
        beschreibung:
          "Lagersystem für die Küche programmiert und eingeführt: Bestände, Nachbestellung und Übersicht im Alltag. Mitarbeitende geschult, sodass das System im laufenden Betrieb genutzt wird — weniger Chaos im Lager, klarere Schichten.",
      },
      {
        titel: "Digitale Software (Schule)",
        beschreibung:
          "In der Schule eine eigene digitale Anwendung erstellt — von der Idee bis zur nutzbaren Lösung. Zeigt, dass ich Prozesse nicht nur mitmache, sondern auch digital vereinfachen kann.",
      },
      {
        titel: "Vom Praktikum zur Festanstellung (Hongkong)",
        beschreibung:
          "18.02.–17.05.2026 Praktikum, danach bis 18.09.2026 Festanstellung — Übernahme aufgrund Leistung, Tempo und Teamfit. Rückflug nach Deutschland am 19.09.2026; derzeit über einen Freund in Bern.",
      },
    ],
    motivation: {
      anrede: "Sehr geehrtes Hiring-Team von Sando Bern",
      absatz1:
        "hiermit bewerbe ich mich als Chef de Partie / Chef de Cuisine bei Sando Bern. Ich bin 18 und habe trotz meines Alters bereits praktische Küchenerfahrung: mehrere Minijobs in Deutschland und danach rund sieben Monate Hongkong. Am 18.02.2026 habe ich ein dreimonatiges Praktikum begonnen, danach vier Monate Festanstellung — angeboten aufgrund meiner Leistung. Am 19.09.2026 bin ich nach Deutschland zurückgeflogen und bin derzeit über einen Freund in Bern. Hier möchte ich mich fest in einer Küche einbringen.",
      absatz2:
        "In Hongkong habe ich in einer internationalen, englischsprachigen Küche unter echtem Peak-Druck gearbeitet: Prep, Station-Support, Hygiene, Ticket-Genauigkeit und ruhige Abstimmung mit Pass und Service. In Deutschland habe ich bei Burgerwerk zusätzlich ein digitales Lagersystem programmiert, eingeführt und das Team geschult — mir liegen saubere Mise en place und saubere Prozesse. Diese Mischung passt zu einem japanisch inspirierten Take-away- und Delivery-Konzept wie Sando.",
      absatz3:
        "Gerade weil ich jung bin, bin ich lernbereit, motiviert und will schnell durch Feedback und Einsatz wachsen. Ich möchte als Chef de Partie einsteigen (je nach Probearbeit) und Richtung Chef de Cuisine aufbauen: Konsistenz, Lebensmittelsicherheit, Teamarbeit und betriebliche Disziplin. Deutsch ist meine Muttersprache; Englisch war meine Arbeitssprache in der Küche. Verfügbar bin ich bereits ab morgen und würde mich sehr über ein Interview freuen, um uns besser kennenzulernen — gerne auch verbunden mit einer Probearbeit in Bern.",
      gruss: "Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },

  en: {
    ui: {
      profil: "Profile",
      erfahrung: "Experience",
      ausbildung: "Education",
      sprachen: "Languages",
      skills: "Skills",
      projekte: "Projects & extras",
      zeugnisse: "Certificates & documents",
      zeugnisseIntro:
        "Attached: school leaving certificate and transcript (if required).",
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
    zielposition: "Chef de Partie (path toward Chef de Cuisine)",
    nationalitaet: "German",
    meta: {
      kennzeichnung: "Ideal sample / analysis — Sando Bern",
      hinweis:
        "Learning tool: ideal application for Sando Bern. Restaurant names in Engelskirchen/Hong Kong are example references — only list places where you actually worked.",
    },
    kurzprofil:
      "I am Carlo Koch, 18, and despite my age I already have several hospitality roles behind me: mini-jobs in German restaurant kitchens, then about seven months in Hong Kong — a three-month internship from 18 February 2026, followed by four months permanent after my performance earned me a fixed offer. On 19 September 2026 I flew back to Germany and I am currently in Bern staying with a friend — ready to build a career in the kitchen here. I care about pace, hygiene, teamwork and clear communication under pressure. Being young, I bring high willingness to learn, energy and the motivation to improve every day — and to grow responsibility as Chef de Partie at Sando Bern.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details:
        "Restaurant mini-jobs alongside school; then a direct move into professional kitchens abroad (Hong Kong).",
    },
    zeugnisse: [],
    sprachen: [
      { name: "German", niveau: "Native" },
      { name: "English", niveau: "B2 · working language in HK kitchen" },
      { name: "Spanish", niveau: "B1/B2" },
    ],
    erfahrung: [
      {
        rolle: "Kitchen Staff (permanent)",
        firma: "Japanese Casual Kitchen — Causeway Bay",
        ort: "Hong Kong",
        zeitraum: "18.05.2026 – 18.09.2026",
        bullets: [
          "Permanent role after the internship — offered based on performance, reliability and pace",
          "Prep, station support and pass work to fixed standards in a high-volume team",
          "English as working language; hygiene, freshness and ticket accuracy in lunch and dinner peaks",
          "Clear coordination with service and expedite under pressure",
        ],
      },
      {
        rolle: "Kitchen internship",
        firma: "Japanese Casual Kitchen — Causeway Bay",
        ort: "Hong Kong",
        zeitraum: "18.02.2026 – 17.05.2026",
        bullets: [
          "Three-month intensive internship in a professional kitchen in Hong Kong",
          "Learned mise en place, station flow, recipe accuracy and cleanliness in live service",
          "Fast onboarding — moved into a permanent role for performance and team fit",
        ],
      },
      {
        rolle: "Mini-job kitchen / prep & dish",
        firma: "Restaurant Eimermacher",
        ort: "Engelskirchen-Ehreshoven",
        zeitraum: "09.2025 – 01.2026",
        bullets: [
          "Evening and weekend shifts: prep, sides, dish pit, station support",
          "First routine in peak periods in a regional restaurant kitchen",
          "Reliable shift coverage alongside everyday life",
        ],
      },
      {
        rolle: "Mini-job kitchen help",
        firma: "Restaurant Am Fels",
        ort: "Engelskirchen-Loope",
        zeitraum: "03.2025 – 08.2025",
        bullets: [
          "Kitchen support: prep, portioning, cleanliness",
          "Basics of hygiene, storage and teamwork",
        ],
      },
      {
        rolle: "Mini-job dish & prep · digital stock",
        firma: "Burgerwerk",
        ort: "Germany",
        zeitraum: "07.2024 – 02.2025",
        bullets: [
          "Entry into hospitality: dish pit, prep and support during high take-away volume",
          "Programmed and rolled out a digital stock system and trained colleagues",
          "Clearer inventory, less search time and cleaner handovers between shifts",
        ],
      },
    ],
    skills: [
      "Professional kitchen practice (DE mini-jobs + HK)",
      "Prep, station support, mise en place",
      "Pace & accuracy in peaks",
      "Hygiene & food safety",
      "Recipe / standard discipline",
      "Digital stock / inventory (rollout & training)",
      "International kitchen team (English)",
      "High volume / service pressure",
      "Teamwork & clear communication",
      "Flexibility: evenings, weekends",
      "High willingness to learn & motivation",
      "German · English · Spanish",
    ],
    projekte: [
      {
        titel: "Digital stock system — Burgerwerk",
        beschreibung:
          "Programmed and introduced a kitchen stock system: inventory, reorder and day-to-day overview. Trained staff so it was used in live operations — less chaos in storage, clearer shifts.",
      },
      {
        titel: "Digital software (school)",
        beschreibung:
          "Built a digital application at school — from idea to usable tool. Shows I do not only follow processes, I can also simplify them digitally.",
      },
      {
        titel: "Internship to permanent role (Hong Kong)",
        beschreibung:
          "18.02.–17.05.2026 internship, then permanent until 18.09.2026 — offered for performance, pace and team fit. Return flight to Germany on 19.09.2026; currently in Bern with a friend.",
      },
    ],
    motivation: {
      anrede: "Dear Hiring Team at Sando Bern",
      absatz1:
        "I am applying for the Chef de Partie / Chef de Cuisine role at Sando Bern. I am 18, and despite my age I already have hands-on kitchen experience: several restaurant mini-jobs in Germany, then about seven months in Hong Kong. I started an internship on 18 February 2026 (three months), then worked four months in a permanent role after the restaurant offered me a fixed position based on my performance. On 19 September 2026 I flew back to Germany and I am currently in Bern staying with a friend — ready to commit to a kitchen here.",
      absatz2:
        "In Hong Kong I worked in an international, English-speaking kitchen under real peak pressure — prep, station support, hygiene, ticket accuracy and calm communication with the pass and service. In Germany I also built and rolled out a digital stock system at Burgerwerk and trained the team to use it — so I care about clean mise en place and clean processes. That mix fits a Japanese-inspired, take-away and delivery-focused concept like Sando.",
      absatz3:
        "Because I am young, I am hungry to learn, highly motivated and ready to grow quickly through feedback and hard work. I want to join as Chef de Partie (depending on the trial) and build toward Chef de Cuisine through consistency, food safety, teamwork and operational discipline. German is my native language; English is my working language in the kitchen. I am available from tomorrow and would very much welcome an interview to get to know each other better — ideally together with a trial shift in Bern.",
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
