/**
 * Bewerbungsmappe DE + EN
 * Mode Bayard AG - Modeberater:in 60% BAYARD CO LTD WOMEN Bern
 * Stelle: https://www.jobs.ch/de/stellenangebote/detail/0f45dcac-f5d3-4b24-a992-0b9fde47ca3d/
 * Distanz zu Oberbottigen: ca. 5.0 km
 */
const CV_SHARED = {
  name: "Carlo Alexander Koch",
  alter: 19,
  ort: "Bottigenstrasse 300, Bern",
  telefon: "+41 78 604 64 95",
  email: "carlo.koch@bluewin.ch",
  foto: "Profilbild.png",
  unterschriftBild: "carlosignature.png",
  arbeitgeberZiel: "Mode Bayard AG, Marktgasse 45, 3011 Bern",
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
    zielposition: "Modeberater 60%",
    nationalitaet: "deutsch",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "Ich bin Carlo Koch, 19 Jahre alt und wohne nahe Oberbottigen in Bern. In Minijobs habe ich gelernt, Menschen freundlich zu bedienen und im Team sauber zu arbeiten. Als Modeberater bei Bayard an der Marktgasse möchte ich Kundinnen beraten und den Ladenalltag mittragen.",
    ausbildung: {
      abschluss: "Schulabschluss",
      institution: "Gesamtschule Marienheide",
      zeitraum: "bis 01.2026",
      details: "Parallel zur Schule und danach Minijobs mit Kundenkontakt und Schichtarbeit in Deutschland.",
    },
    zeugnisse: [
      {"titel": "Abgangszeugnis", "datei": "Abgangszeugniss.png", "hinweis": "Gesamtschule Marienheide · Abgang 16.01.2026"},
      {"titel": "Schulzeugnis (Leistungsübersicht)", "datei": "Schulzeugniss.png", "hinweis": "Englisch B2 · Italienisch B1/B2 · Leistungskurse Englisch & Erdkunde"}
],
    sprachen: [
      {"name": "Deutsch", "niveau": "Muttersprache"},
      {"name": "Englisch", "niveau": "B2"},
      {"name": "Italienisch", "niveau": "B1/B2"}
],
    erfahrung: [
      {"rolle": "Minijob Kundenkontakt & Betrieb", "firma": "Restaurant Eimermacher", "ort": "Engelskirchen Ehreshoven", "zeitraum": "09.2025 - 01.2026",
        "bullets": ["Abend und Wochenendschichten, auch bei hohem Andrang", "Zuverlässige Mitarbeit im Team und saubere Übergaben", "Selbstständiges Mitdenken im laufenden Betrieb"]},
      {"rolle": "Minijob Service & Teamsupport", "firma": "Restaurant Am Fels", "ort": "Engelskirchen Loope", "zeitraum": "03.2025 - 08.2025",
        "bullets": ["Unterstützung im Betrieb zugunsten von Gästen und Team", "Sorgfalt, Ordnung und klare Absprache im kleinen Team", "Ruhiges und zielgerichtetes Arbeiten in stressigen Phasen"]},
      {"rolle": "Minijob Betrieb & digitale Prozesse", "firma": "Burgerwerk", "ort": "Deutschland", "zeitraum": "07.2024 - 02.2025",
        "bullets": ["Mitarbeit bei hohem Kundenaufkommen mit gutem Überblick", "Digitales System programmiert, eingeführt und Mitarbeitende geschult", "Technik praxisnah eingesetzt, damit Abläufe einfacher werden"]}
],
    skills: [
      "Freude am Kundenkontakt und an Beratung",
      "Gepflegtes Auftreten und Zuverlässigkeit",
      "Teamfähigkeit und Flexibilität",
      "Schnelle Auffassungsgabe bei Sortiment und Abläufen",
      "Gute Deutschkenntnisse (Muttersprache)"
],
    projekte: [
      {"titel": "Digitales System bei Burgerwerk", "beschreibung": "Eigenes digitales Tool entwickelt, im Betrieb eingeführt und das Team geschult. Digitale Abläufe lerne ich schnell und setze sie praktisch um."},
      {"titel": "Digitale Software in der Schule", "beschreibung": "In der Schule eine eigene digitale Anwendung erstellt und bis zur praktischen Nutzung weiterentwickelt."}
],
    motivation: {
      anrede: "Sehr geehrtes Bayard Team",
      absatz1: "hiermit bewerbe ich mich als Modeberater 60% bei BAYARD CO LTD WOMEN in Bern an der Marktgasse. Ich wohne nahe Oberbottigen und erreiche die Marktgasse gut. Eine Modeausbildung bringe ich noch nicht mit. Ich möchte bei Bayard einsteigen und Beratung sowie Verkauf im Alltag lernen.",
      absatz2: "Freundliche Ansprache, sorgfältige Warenpräsentation und zuverlässige Mitarbeit im Team sind für mich selbstverständlich. Aus der Gastronomie kenne ich Tempo und klare Absprache. Ich arbeite gerne unter Menschen und lerne Sortimente schnell.",
      absatz3: "Deutsch ist meine Muttersprache. Ich bin ab sofort oder nach Vereinbarung verfügbar. Über eine Rückmeldung freue ich mich.",
      gruss: "Freundliche Grüsse",
      unterschrift: "Carlo Alexander Koch",
    },
  },
  en: {
    ui: {
      "profil": "Profile", "erfahrung": "Practical experience", "ausbildung": "Education", "sprachen": "Languages",
      "skills": "Skills", "projekte": "Projects & extras", "zeugnisse": "Certificates & documents",
      "zeugnisseIntro": "Attachments: school leaving certificate and transcript.", "foto": "Photo", "fotoHint": "add here",
      "alterSuffix": "years old", "nationalitaetLabel": "Nationality", "wohnortPrefix": "currently living in",
      "betreffPrefix": "Application for", "printHint": "For PDF: Ctrl+P → “Save as PDF” (margins: Default/None).",
      "printBtn": "Print / PDF", "langDe": "Deutsch", "langEn": "English"
},
    zielposition: "Fashion Advisor 60%",
    nationalitaet: "German",
    meta: { kennzeichnung: "", hinweis: "" },
    kurzprofil: "I am Carlo Koch, 19, living near Oberbottigen in Bern. In mini jobs I learned to serve people in a friendly way and work cleanly in a team. As a fashion advisor at Bayard on Marktgasse I want to advise customers and support day to day store work.",
    ausbildung: {
      abschluss: "School leaving certificate",
      institution: "Gesamtschule Marienheide",
      zeitraum: "until 01.2026",
      details: "Alongside school and afterwards, mini jobs with customer contact and shift work in Germany.",
    },
    zeugnisse: [
      {"titel": "School leaving certificate (Abgangszeugnis)", "datei": "Abgangszeugniss.png", "hinweis": "Gesamtschule Marienheide · left 16.01.2026"},
      {"titel": "School transcript", "datei": "Schulzeugniss.png", "hinweis": "English B2 · Italian B1/B2 · advanced courses English & Geography"}
],
    sprachen: [
      {"name": "German", "niveau": "Native"},
      {"name": "English", "niveau": "B2"},
      {"name": "Italian", "niveau": "B1/B2"}
],
    erfahrung: [
      {"rolle": "Mini job customer contact & operations", "firma": "Restaurant Eimermacher", "ort": "Engelskirchen Ehreshoven", "zeitraum": "09.2025 - 01.2026",
        "bullets": ["Evening and weekend shifts, including busy periods", "Reliable teamwork and clean handovers", "Independent contribution in day to day operations"]},
      {"rolle": "Mini job service & team support", "firma": "Restaurant Am Fels", "ort": "Engelskirchen Loope", "zeitraum": "03.2025 - 08.2025",
        "bullets": ["Supported operations for guests and the team", "Care, order and clear communication in a small team", "Calm, focused work during stressful periods"]},
      {"rolle": "Mini job operations & digital processes", "firma": "Burgerwerk", "ort": "Germany", "zeitraum": "07.2024 - 02.2025",
        "bullets": ["Worked during high customer volume while keeping an overview", "Programmed a digital system, introduced it and trained staff", "Applied technology practically to simplify everyday workflows"]}
],
    skills: [
      "Enjoy customer contact and advice",
      "Neat appearance and reliability",
      "Teamwork and flexibility",
      "Quick learner with assortment and processes",
      "Good German (native)"
],
    projekte: [
      {"titel": "Digital system at Burgerwerk", "beschreibung": "Developed a digital tool, introduced it at work and trained the team. I pick up digital processes quickly and apply them practically."},
      {"titel": "Digital software at school", "beschreibung": "At school I created a digital application and developed it through to practical use."}
],
    motivation: {
      anrede: "Dear Bayard team",
      absatz1: "I am applying for the fashion advisor role 60% at BAYARD CO LTD WOMEN in Bern on Marktgasse. I live near Oberbottigen and can reach Marktgasse well. I do not yet have fashion training. I want to join Bayard and learn advice and sales on the job.",
      absatz2: "Friendly customer contact, careful product presentation and reliable teamwork are natural for me. From hospitality I know pace and clear communication. I enjoy working with people and learn assortments quickly.",
      absatz3: "German is my native language. I am available immediately or by arrangement. I look forward to hearing from you.",
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
