#!/usr/bin/env python3
"""Bewertet Jobs aus jobs.json per OpenAI API und schreibt evaluated_jobs.json."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parent
JOBS_PATH = ROOT / "jobs.json"
OUTPUT_PATH = ROOT / "evaluated_jobs.json"
MODEL = "gpt-4o-mini"

# Zielprofil für die Bewertung (Carlo Koch)
TARGET_PROFILE = """
Zielprofil: Einstiegsrolle mit Kundenkontakt (z. B. Verkäufer / Verkaufsberater /
Gastgeber / Service), Pensum 80-100%.
Kriterien:
- Keine Führungspositionen
- Fokus auf Bern Stadt (Umgebung nur nachrangig)
- Passend für junge Bewerber ohne abgeschlossene Lehre im Detailhandel
""".strip()

SYSTEM_PROMPT = """
Du bewertest Stellenangebote für einen Bewerber. Antworte ausschliesslich mit
einem JSON-Objekt der Form:
{"score": <Zahl 1-10>, "reason": "<max. 2 Sätze auf Deutsch>"}
score = 1 (passt gar nicht) bis 10 (passt sehr gut).
Keine Markdown-Formatierung, kein zusätzlicher Text.
""".strip()


def slugify(value: str) -> str:
    text = value.lower().strip()
    text = re.sub(r"[^a-z0-9äöü]+", "-", text, flags=re.IGNORECASE)
    text = re.sub(r"-+", "-", text).strip("-")
    return text or "job"


def normalize_job(job: dict[str, Any], index: int = 1) -> dict[str, Any]:
    """Mappt Scraping-Felder (titel/firma/…) auf ein einheitliches Schema."""
    titel = job.get("titel") or job.get("title") or ""
    firma = job.get("firma") or job.get("company") or ""
    ort = job.get("ort") or job.get("location") or ""
    link = job.get("link") or job.get("url") or ""
    job_id = job.get("id") or slugify(f"{firma}-{ort}") or f"job-{index}"

    normalized = {
        **job,
        "id": job_id,
        "titel": titel,
        "title": titel,
        "firma": firma,
        "company": firma,
        "ort": ort,
        "location": ort,
        "link": link,
        "url": link,
    }
    if job.get("veroeffentlicht") and "veroeffentlicht" not in normalized:
        normalized["veroeffentlicht"] = job["veroeffentlicht"]
    return normalized


def extract_jobs_list(data: Any) -> list[dict]:
    """Akzeptiert flaches Array oder Scraper-Objekt { meta, jobs }."""
    if isinstance(data, list):
        return [item for item in data if isinstance(item, dict)]
    if isinstance(data, dict):
        jobs = data.get("jobs")
        if isinstance(jobs, list):
            return [item for item in jobs if isinstance(item, dict)]
    raise ValueError(
        "jobs.json muss ein JSON-Array oder ein Objekt mit 'jobs'-Array sein."
    )


def load_jobs(path: Path) -> list[dict]:
    if not path.exists():
        raise FileNotFoundError(f"Jobs-Datei nicht gefunden: {path}")
    with path.open(encoding="utf-8") as f:
        data = json.load(f)
    raw = extract_jobs_list(data)
    return [normalize_job(job, i) for i, job in enumerate(raw, start=1)]


def evaluate_job(client: OpenAI, job: dict) -> dict:
    user_content = (
        f"{TARGET_PROFILE}\n\n"
        f"Stelle als JSON:\n{json.dumps(job, ensure_ascii=False, indent=2)}"
    )
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_content},
        ],
        response_format={"type": "json_object"},
        temperature=0.2,
    )
    raw = response.choices[0].message.content or "{}"
    result = json.loads(raw)

    score = result.get("score")
    reason = result.get("reason", "")
    try:
        score = int(score)
    except (TypeError, ValueError):
        score = 1
    score = max(1, min(10, score))
    if not isinstance(reason, str):
        reason = str(reason)

    return {**job, "score": score, "reason": reason.strip()}


def evaluate_jobs(
    jobs: list[dict],
    client: OpenAI | None = None,
) -> list[dict]:
    """Bewertet eine Liste von Jobs; für Pipeline und CLI wiederverwendbar."""
    if client is None:
        client = OpenAI()

    evaluated: list[dict] = []
    for i, job in enumerate(jobs, start=1):
        job = normalize_job(job, i)
        title = job.get("titel") or job.get("title") or job.get("id") or f"Job {i}"
        print(f"[{i}/{len(jobs)}] Bewerte: {title} …", flush=True)
        try:
            enriched = evaluate_job(client, job)
        except Exception as exc:  # noqa: BLE001 – Fehler pro Job festhalten
            print(f"  Fehler: {exc}", file=sys.stderr)
            enriched = {
                **job,
                "score": 0,
                "reason": f"Bewertung fehlgeschlagen: {exc}",
            }
        evaluated.append(enriched)
        print(f"  → score={enriched['score']}: {enriched['reason']}")
    return evaluated


def main() -> int:
    load_dotenv(ROOT / ".env")

    client = OpenAI()  # nutzt OPENAI_API_KEY aus der Umgebung

    jobs = load_jobs(JOBS_PATH)
    if not jobs:
        print("Keine Jobs in jobs.json gefunden.", file=sys.stderr)
        return 1

    evaluated = evaluate_jobs(jobs, client=client)

    with OUTPUT_PATH.open("w", encoding="utf-8") as f:
        json.dump(evaluated, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"\nGespeichert: {OUTPUT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
