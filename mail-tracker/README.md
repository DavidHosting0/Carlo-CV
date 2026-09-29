# Bewerbungs-Mail-Tracker

Lokales Tool: liest Bluewin per IMAP, erkennt Zu-/Absagen, matcht sie an Bewerbungen im Repo und zeigt den Status unter `http://localhost:3847`.

## Setup

```bash
cd mail-tracker
cp .env.example .env
# IMAP_PASS in .env setzen (Bluewin-Passwort oder App-Passwort)
npm install
```

Bluewin IMAP: Host `imaps.bluewin.ch`, Port `993`, SSL. In den Bluewin-Einstellungen IMAP muss aktiv sein.

## Befehle

```bash
npm run index   # Bewerbungen aus applications/ + scraper-applications/ indexieren
npm run sync    # Mails holen, klassifizieren, status.json schreiben
npm run dash    # Dashboard http://localhost:3847
```

Reihenfolge: zuerst `index`, dann `sync`, dann `dash`. Vor jedem Sync ggf. `index` erneut, wenn neue Bewerbungsordner dazugekommen sind.

## Sicherheit

- `.env` und `data/status.json` sind gitignored — nie committen.
- Dashboard lauscht nur auf `127.0.0.1`.

## Manuelle Korrektur

Im Dashboard Override-Buttons (Zusage / Absage / Offen / Unklar). Manuelle Status werden vom nächsten Sync nicht überschrieben.
