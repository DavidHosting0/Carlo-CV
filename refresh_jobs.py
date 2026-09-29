#!/usr/bin/env python3
"""
Pipeline: jobs.ch scrapen → geocoden → mit OpenAI bewerten → dashboard/live-jobs.json.

Aufruf:
  python refresh_jobs.py
  python refresh_jobs.py --skip-scrape   # bestehende jobs.json verwenden
  python refresh_jobs.py --skip-eval    # ohne OpenAI (Score 0)
"""

from __future__ import annotations

import argparse
import asyncio
import json
import logging
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent
LIVE_JOBS_PATH = ROOT / "dashboard" / "live-jobs.json"
GEOCODE_CACHE_PATH = ROOT / ".geocode-cache.json"
DEFAULT_JOBS_FILE = ROOT / "jobs.json"

NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"
USER_AGENT = "CarloCV-JobDashboard/1.0 (github.com/DavidHosting0/Carlo-CV)"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("refresh_jobs")


def load_geocode_cache() -> dict[str, Any]:
    if not GEOCODE_CACHE_PATH.exists():
        return {}
    try:
        return json.loads(GEOCODE_CACHE_PATH.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def save_geocode_cache(cache: dict[str, Any]) -> None:
    GEOCODE_CACHE_PATH.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def geocode_ort(ort: str, cache: dict[str, Any]) -> tuple[float | None, float | None]:
    """Geocodiert einen Ort in der Schweiz via Nominatim (mit Cache + Rate-Limit)."""
    key = ort.strip().lower()
    if not key:
        return None, None
    if key in cache:
        entry = cache[key]
        if entry is None:
            return None, None
        return entry.get("lat"), entry.get("lng")

    query = urllib.parse.urlencode(
        {
            "q": f"{ort}, Schweiz",
            "format": "json",
            "limit": "1",
            "countrycodes": "ch",
        }
    )
    req = urllib.request.Request(
        f"{NOMINATIM_URL}?{query}",
        headers={"User-Agent": USER_AGENT, "Accept-Language": "de"},
    )
    time.sleep(1.1)  # Nominatim usage policy
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            results = json.loads(resp.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        logger.warning("Geocode fehlgeschlagen für %r: %s", ort, exc)
        cache[key] = None
        return None, None

    if not results:
        logger.warning("Kein Geocode-Treffer für %r", ort)
        cache[key] = None
        return None, None

    lat = float(results[0]["lat"])
    lng = float(results[0]["lon"])
    cache[key] = {"lat": lat, "lng": lng}
    return lat, lng


def slugify(value: str) -> str:
    text = value.lower().strip()
    text = re.sub(r"[^a-z0-9äöü]+", "-", text, flags=re.IGNORECASE)
    text = re.sub(r"-+", "-", text).strip("-")
    return text or "job"


def job_id_from(job: dict[str, Any], index: int) -> str:
    link = job.get("link") or job.get("url") or ""
    match = re.search(r"/detail/([a-f0-9-]+)", link)
    if match:
        return f"live-{match.group(1)[:8]}"
    if job.get("id"):
        return str(job["id"])
    firma = job.get("firma") or job.get("company") or "job"
    ort = job.get("ort") or job.get("location") or str(index)
    return f"live-{slugify(firma)}-{slugify(ort)}"


async def run_scrape(output_file: Path) -> dict[str, Any]:
    from scraper import (
        DEFAULT_LOCATION,
        DEFAULT_MAX_RESULTS,
        DEFAULT_SEARCH_TERM,
        run_scraper,
    )

    term = os.getenv("SEARCH_TERM", DEFAULT_SEARCH_TERM)
    location = os.getenv("LOCATION", DEFAULT_LOCATION)
    max_results = int(os.getenv("MAX_RESULTS", str(DEFAULT_MAX_RESULTS)))

    logger.info(
        "Scrape: term=%r location=%r max=%d", term, location, max_results
    )
    await run_scraper(
        term=term,
        location=location,
        max_results=max_results,
        output_file=str(output_file),
    )
    return json.loads(output_file.read_text(encoding="utf-8"))


def load_scraped(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"Keine Scraping-Datei: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, list):
        return {"meta": {}, "count": len(data), "jobs": data}
    if isinstance(data, dict) and isinstance(data.get("jobs"), list):
        return data
    raise ValueError("Unerwartetes Scraping-Format")


def to_live_job(job: dict[str, Any], index: int, cache: dict[str, Any]) -> dict[str, Any]:
    from evaluator import normalize_job

    normalized = normalize_job(job, index)
    ort = normalized.get("ort") or ""
    lat, lng = geocode_ort(ort, cache)

    entry: dict[str, Any] = {
        "id": job_id_from(normalized, index),
        "titel": normalized.get("titel") or "",
        "firma": normalized.get("firma") or "",
        "ort": ort,
        "veroeffentlicht": normalized.get("veroeffentlicht") or "",
        "link": normalized.get("link") or "",
        "score": int(normalized.get("score") or 0),
        "reason": normalized.get("reason") or "",
    }
    if lat is not None and lng is not None:
        entry["lat"] = lat
        entry["lng"] = lng
    return entry


def main() -> int:
    parser = argparse.ArgumentParser(description="Scraper + Evaluator → live-jobs.json")
    parser.add_argument(
        "--skip-scrape",
        action="store_true",
        help="Bestehende jobs.json verwenden statt neu zu scrapen",
    )
    parser.add_argument(
        "--skip-eval",
        action="store_true",
        help="OpenAI-Bewertung überspringen (Score 0)",
    )
    parser.add_argument(
        "--jobs-file",
        type=Path,
        default=DEFAULT_JOBS_FILE,
        help="Pfad zur Scraping-JSON",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=LIVE_JOBS_PATH,
        help="Ausgabe-Pfad (default: dashboard/live-jobs.json)",
    )
    args = parser.parse_args()

    load_dotenv(ROOT / ".env")

    if args.skip_scrape:
        scraped = load_scraped(args.jobs_file)
    else:
        scraped = asyncio.run(run_scrape(args.jobs_file))

    raw_jobs = scraped.get("jobs") or []
    meta_in = scraped.get("meta") or {}

    if not args.skip_eval:
        from openai import OpenAI
        from evaluator import evaluate_jobs, normalize_job

        if not os.getenv("OPENAI_API_KEY"):
            logger.error("OPENAI_API_KEY fehlt – Bewertung nicht möglich.")
            return 1
        client = OpenAI()
        normalized = [normalize_job(j, i) for i, j in enumerate(raw_jobs, start=1)]
        evaluated = evaluate_jobs(normalized, client=client)
    else:
        evaluated = list(raw_jobs)
        for job in evaluated:
            job.setdefault("score", 0)
            job.setdefault("reason", "Keine KI-Bewertung (--skip-eval)")

    cache = load_geocode_cache()
    live_jobs = [
        to_live_job(job, i, cache) for i, job in enumerate(evaluated, start=1)
    ]
    save_geocode_cache(cache)

    payload = {
        "meta": {
            "fetchedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "quelle": meta_in.get("quelle", "jobs.ch"),
            "suchbegriff": meta_in.get(
                "suchbegriff", os.getenv("SEARCH_TERM", "Verkäufer")
            ),
            "standort": meta_in.get("standort", os.getenv("LOCATION", "Bern")),
            "count": len(live_jobs),
            "such_url": meta_in.get("such_url"),
        },
        "jobs": live_jobs,
    }

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    logger.info("Geschrieben: %s (%d Jobs)", args.output, len(live_jobs))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
