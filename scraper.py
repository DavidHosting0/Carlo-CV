#!/usr/bin/env python3
"""
Asynchroner jobs.ch-Scraper mit Playwright.

Sucht Stellenangebote nach konfigurierbarem Berufsbild und Standort,
extrahiert die ersten N Treffer und speichert sie als JSON.
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import re
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any
from urllib.parse import quote_plus, urljoin

from dotenv import load_dotenv
from playwright.async_api import Browser, Page, async_playwright

# ---------------------------------------------------------------------------
# Konfiguration
# ---------------------------------------------------------------------------

load_dotenv()

BASE_URL = "https://www.jobs.ch"
SEARCH_PATH = "/de/stellenangebote/"

# Standardwerte – können über .env oder Umgebungsvariablen überschrieben werden
DEFAULT_SEARCH_TERM = os.getenv("SEARCH_TERM", "Verkäufer")
DEFAULT_LOCATION = os.getenv("LOCATION", "Bern")
DEFAULT_MAX_RESULTS = int(os.getenv("MAX_RESULTS", "15"))
DEFAULT_OUTPUT_FILE = os.getenv("OUTPUT_FILE", "jobs.json")

# CSS-/DOM-Selektoren (jobs.ch-Suchergebnisliste)
JOB_LINK_SELECTOR = 'a[href*="/stellenangebote/detail/"]'

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("jobs_ch_scraper")


# ---------------------------------------------------------------------------
# Datenmodell
# ---------------------------------------------------------------------------


@dataclass
class JobListing:
    """Ein einzelnes Stellenangebot aus der Suchergebnisliste."""

    titel: str
    firma: str
    ort: str
    veroeffentlicht: str
    link: str


# ---------------------------------------------------------------------------
# Hilfsfunktionen
# ---------------------------------------------------------------------------


def build_search_url(term: str, location: str) -> str:
    """Baut die jobs.ch-Such-URL für Begriff und Standort."""
    query = f"?term={quote_plus(term)}&location={quote_plus(location)}"
    return urljoin(BASE_URL, SEARCH_PATH) + query


def normalize_whitespace(value: str | None) -> str:
    """Entfernt überflüssige Leerzeichen und Zeilenumbrüche."""
    if not value:
        return ""
    return re.sub(r"\s+", " ", value).strip()


def absolute_job_url(href: str) -> str:
    """Stellt sicher, dass der Inserat-Link eine vollständige URL ist."""
    if href.startswith("http"):
        return href.split("?")[0].rstrip("/") + "/"
    return urljoin(BASE_URL, href.split("?")[0]).rstrip("/") + "/"


# ---------------------------------------------------------------------------
# Extraktion im Browser-Kontext
# ---------------------------------------------------------------------------


EXTRACT_JOBS_JS = """
(maxResults) => {
  const anchors = Array.from(
    document.querySelectorAll('a[href*="/stellenangebote/detail/"]')
  );

  const seen = new Set();
  const jobs = [];

  for (const anchor of anchors) {
    if (jobs.length >= maxResults) break;

    const href = anchor.href || "";
    // Nur echte Detail-Seiten (UUID im Pfad), keine Navigations-Links
    if (!/\\/stellenangebote\\/detail\\/[0-9a-f-]{36}\\/?/i.test(href)) continue;
    if (seen.has(href)) continue;
    seen.add(href);

    // Veröffentlichungsdatum: Caption oben rechts/links in der Karte
    const dateEl = anchor.querySelector('div[class*="jc_space-between"] p');
    let veroeffentlicht = dateEl ? (dateEl.textContent || "").trim() : "";

    // Jobtitel: Span innerhalb des Titel-Wrappers (mb_s8)
    const titleWrap = anchor.querySelector('div[class*="mb_s8"]');
    const titleEl = titleWrap ? titleWrap.querySelector("span") : null;
    let titel = titleEl ? (titleEl.textContent || "").trim() : "";

    // Ort: Text direkt nach dem Screenreader-Label "Arbeitsort:"
    let ort = "";
    for (const label of anchor.querySelectorAll("span")) {
      const t = (label.textContent || "").trim();
      if (t === "Arbeitsort:" || t === "Location:") {
        const valueEl = label.parentElement
          ? label.parentElement.querySelector("p")
          : null;
        if (valueEl) {
          ort = (valueEl.textContent || "").trim();
          break;
        }
      }
    }

    // Firmenname: Absatz im unteren Firmen-Block (mt_s12)
    const companyWrap = anchor.querySelector('div[class*="mt_s12"]');
    const companyEl = companyWrap ? companyWrap.querySelector("p") : null;
    let firma = companyEl ? (companyEl.textContent || "").trim() : "";

    // Fallback über den sichtbaren Kartentext, falls ein Feld fehlt
    if (!titel || !firma || !ort || !veroeffentlicht) {
      const lines = (anchor.innerText || "")
        .split("\\n")
        .map((l) => l.trim())
        .filter(Boolean);

      if (!veroeffentlicht && lines.length) {
        const datePattern =
          /^(Heute|Gestern|Vor |Letzte|Today|Yesterday|\\d)/i;
        if (datePattern.test(lines[0])) {
          veroeffentlicht = lines[0];
        }
      }

      const ortIdx = lines.findIndex(
        (l) => l === "Arbeitsort:" || l === "Location:"
      );

      if (!titel) {
        const start =
          veroeffentlicht && lines[0] === veroeffentlicht ? 1 : 0;
        if (ortIdx > start) {
          // Nur die erste Titelzeile – verhindert Vermischung mit Nachbarkarten
          titel = lines[start] || "";
        } else if (lines.length > start) {
          titel = lines[start];
        }
      }

      if (!ort && ortIdx >= 0 && lines[ortIdx + 1]) {
        ort = lines[ortIdx + 1];
      }

      if (!firma && lines.length) {
        firma = lines[lines.length - 1];
      }
    }

    jobs.push({
      titel: titel || "",
      firma: firma || "",
      ort: ort || "",
      veroeffentlicht: veroeffentlicht || "",
      link: href,
    });
  }

  return jobs;
}
"""


async def dismiss_cookie_banner(page: Page) -> None:
    """Schliesst ggf. Cookie-/Consent-Banner, falls vorhanden."""
    candidates = [
        'button:has-text("Alle akzeptieren")',
        'button:has-text("Accept all")',
        'button:has-text("Akzeptieren")',
        'button:has-text("Zustimmen")',
        '[id*="accept"]',
        '[data-testid*="accept"]',
    ]
    for selector in candidates:
        try:
            button = page.locator(selector).first
            if await button.is_visible(timeout=800):
                await button.click(timeout=2000)
                logger.info("Cookie-Banner geschlossen (%s).", selector)
                return
        except Exception:
            continue


async def wait_for_results(page: Page, timeout_ms: int = 30_000) -> None:
    """Wartet, bis mindestens ein Stellen-Link gerendert wurde."""
    await page.wait_for_selector(JOB_LINK_SELECTOR, timeout=timeout_ms)


async def scrape_job_listings(
    page: Page,
    term: str,
    location: str,
    max_results: int,
) -> list[JobListing]:
    """
    Öffnet die Suchseite und extrahiert die ersten `max_results` Treffer.
    """
    url = build_search_url(term, location)
    logger.info("Lade Suchseite: %s", url)

    await page.goto(url, wait_until="domcontentloaded", timeout=60_000)
    await dismiss_cookie_banner(page)

    try:
        await wait_for_results(page)
    except Exception as exc:
        logger.error("Keine Suchergebnisse gefunden: %s", exc)
        return []

    # Kurz warten, bis lazy Inhalte (Logos/Firmenzeile) nachgeladen sind
    await page.wait_for_timeout(1500)

    raw_jobs: list[dict[str, Any]] = await page.evaluate(
        EXTRACT_JOBS_JS, max_results
    )
    logger.info("%d Roh-Treffer aus dem DOM gelesen.", len(raw_jobs))

    listings: list[JobListing] = []
    for item in raw_jobs:
        listing = JobListing(
            titel=normalize_whitespace(item.get("titel")),
            firma=normalize_whitespace(item.get("firma")),
            ort=normalize_whitespace(item.get("ort")),
            veroeffentlicht=normalize_whitespace(item.get("veroeffentlicht")),
            link=absolute_job_url(item.get("link", "")),
        )
        if listing.titel and listing.link:
            listings.append(listing)

    return listings[:max_results]


# ---------------------------------------------------------------------------
# Persistenz
# ---------------------------------------------------------------------------


def save_jobs_to_json(
    jobs: list[JobListing],
    output_path: str | Path,
    meta: dict[str, Any] | None = None,
) -> Path:
    """
    Speichert die Jobs strukturiert als JSON.

    Schema:
      {
        "meta": { ... },
        "count": N,
        "jobs": [ { titel, firma, ort, veroeffentlicht, link }, ... ]
      }
    """
    path = Path(output_path)
    payload = {
        "meta": meta or {},
        "count": len(jobs),
        "jobs": [asdict(job) for job in jobs],
    }
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    logger.info("Gespeichert: %s (%d Jobs)", path.resolve(), len(jobs))
    return path


# ---------------------------------------------------------------------------
# Orchestrierung
# ---------------------------------------------------------------------------


async def run_scraper(
    term: str = DEFAULT_SEARCH_TERM,
    location: str = DEFAULT_LOCATION,
    max_results: int = DEFAULT_MAX_RESULTS,
    output_file: str = DEFAULT_OUTPUT_FILE,
    headless: bool = True,
) -> list[JobListing]:
    """Startet Browser, scraped die Suche und schreibt die JSON-Datei."""
    async with async_playwright() as playwright:
        browser: Browser = await playwright.chromium.launch(headless=headless)
        context = await browser.new_context(
            locale="de-CH",
            user_agent=(
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1400, "height": 900},
        )
        page = await context.new_page()

        try:
            jobs = await scrape_job_listings(
                page, term=term, location=location, max_results=max_results
            )
        finally:
            await context.close()
            await browser.close()

    save_jobs_to_json(
        jobs,
        output_file,
        meta={
            "quelle": "jobs.ch",
            "suchbegriff": term,
            "standort": location,
            "max_results": max_results,
            "such_url": build_search_url(term, location),
        },
    )
    return jobs


def main() -> None:
    """CLI-Einstiegspunkt."""
    term = DEFAULT_SEARCH_TERM
    location = DEFAULT_LOCATION
    max_results = DEFAULT_MAX_RESULTS
    output_file = DEFAULT_OUTPUT_FILE

    logger.info(
        "Starte Scraper: term=%r, location=%r, max=%d",
        term,
        location,
        max_results,
    )
    jobs = asyncio.run(
        run_scraper(
            term=term,
            location=location,
            max_results=max_results,
            output_file=output_file,
        )
    )

    if not jobs:
        logger.warning("Keine Jobs extrahiert.")
        return

    for idx, job in enumerate(jobs, start=1):
        logger.info(
            "%02d. %s | %s | %s | %s",
            idx,
            job.titel,
            job.firma,
            job.ort,
            job.veroeffentlicht,
        )


if __name__ == "__main__":
    main()
