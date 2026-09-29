# Bewerbungs-Mail-Tracker

Lokales Tool: liest Bluewin per IMAP, erkennt Zu-/Absagen, matcht sie an Bewerbungen im Repo und zeigt den Status unter `http://localhost:3000/mail/`.

## Setup

```bash
cd mail-tracker
cp .env.example .env
# IMAP_PASS in .env setzen (Bluewin-Passwort oder App-Passwort)
npm install
```

Bluewin IMAP: Host `imaps.bluewin.ch`, Port `993`, SSL. In den Bluewin-Einstellungen IMAP muss aktiv sein.

## Empfohlen: gemeinsamer Server (Job Finder + E-Mail)

Vom Repo-Root (nach `npm install` in `mail-tracker/`):

```bash
cd mail-tracker && npm run index && cd ..
node server.mjs
# → http://localhost:3000/       Job Finder / Bewerbungs-Dashboard
# → http://localhost:3000/mail/  E-Mail-Status
```

## Befehle (nur Mail-Tracker)

```bash
npm run index   # Bewerbungen aus applications/ + scraper-applications/ indexieren
npm run sync    # Mails holen, klassifizieren, status.json schreiben
npm run dash    # Nur Mail-UI (Port aus DASH_PORT, Default 3000)
```

Reihenfolge: zuerst `index`, dann `sync`, dann Server. Vor jedem Sync ggf. `index` erneut, wenn neue Bewerbungsordner dazugekommen sind.

## Sicherheit

- `.env` und `data/status.json` sind gitignored — nie committen.
- Dashboard lauscht nur auf `127.0.0.1`.

## Manuelle Korrektur

Im Dashboard Override-Buttons (Zusage / Absage / Offen / Unklar). Manuelle Status werden vom nächsten Sync nicht überschrieben.
