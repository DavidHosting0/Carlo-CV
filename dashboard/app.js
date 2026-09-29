(function () {
  "use strict";

  var STORAGE_KEY = "carlo-cv-dashboard-status";
  var LIVE_JOBS_URL = "dashboard/live-jobs.json";
  var ACTIONS_URL =
    "https://github.com/DavidHosting0/Carlo-CV/actions/workflows/refresh-jobs.yml";

  var STATUSES = [
    { value: "entwurf", label: "Entwurf" },
    { value: "versendet", label: "Versendet" },
    { value: "gespraech", label: "Gespräch" },
    { value: "absage", label: "Absage" },
    { value: "zusage", label: "Zusage" },
  ];

  var data = window.DASHBOARD_DATA || { bewerbungen: [], jobs: [] };
  var liveJobs = [];
  var liveMeta = null;
  var state = {
    tab: "bewerbungen",
    search: "",
    quelle: "alle",
    status: "alle",
    jobSearch: "",
    jobScore: "alle",
  };
  var mapInstance = null;
  var mapMarkersLayer = null;
  var mapDidFit = false;

  function loadStatuses() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveStatuses(map) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  }

  function getStatus(id) {
    var map = loadStatuses();
    return map[id] || "entwurf";
  }

  function setStatus(id, value) {
    var map = loadStatuses();
    map[id] = value;
    saveStatuses(map);
  }

  function statusLabel(value) {
    for (var i = 0; i < STATUSES.length; i++) {
      if (STATUSES[i].value === value) return STATUSES[i].label;
    }
    return value;
  }

  function formatStand(iso) {
    if (!iso) return null;
    var parts = String(iso).split("T")[0].split("-");
    if (parts.length !== 3) return iso;
    return parts[2] + "." + parts[1] + "." + parts[0];
  }

  function formatFetchedAt(iso) {
    if (!iso) return "unbekannt";
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleString("de-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function matchesSearch(text, query) {
    if (!query) return true;
    return (
      String(text || "")
        .toLowerCase()
        .indexOf(query.toLowerCase()) !== -1
    );
  }

  function bewerbungMatches(item) {
    var q = state.search.trim();
    var hay = [item.firma, item.titel, item.ort, item.id].join(" ");
    if (!matchesSearch(hay, q)) return false;
    if (state.quelle !== "alle" && item.quelle !== state.quelle) return false;
    if (state.status !== "alle" && getStatus(item.id) !== state.status) return false;
    return true;
  }

  function scoreBand(score) {
    var n = Number(score) || 0;
    if (n >= 8) return "high";
    if (n >= 5) return "mid";
    return "low";
  }

  function jobMatches(item) {
    var q = state.jobSearch.trim();
    var hay = [item.firma, item.titel, item.ort, item.reason].join(" ");
    if (!matchesSearch(hay, q)) return false;
    if (state.jobScore !== "alle" && scoreBand(item.score) !== state.jobScore) {
      return false;
    }
    return true;
  }

  function normalizeLink(link) {
    return String(link || "")
      .replace(/\/+$/, "")
      .toLowerCase();
  }

  function mappeForLiveJob(job) {
    var link = normalizeLink(job.link);
    if (!link) return null;
    for (var i = 0; i < data.bewerbungen.length; i++) {
      var b = data.bewerbungen[i];
      if (normalizeLink(b.link) === link) return b.mappe;
    }
    return null;
  }

  function computeStats() {
    var counts = {
      total: data.bewerbungen.length,
      jobs: liveJobs.length,
      high: 0,
      mid: 0,
      low: 0,
      entwurf: 0,
      versendet: 0,
      gespraech: 0,
      absage: 0,
      zusage: 0,
    };
    data.bewerbungen.forEach(function (b) {
      var s = getStatus(b.id);
      if (counts[s] !== undefined) counts[s] += 1;
    });
    liveJobs.forEach(function (j) {
      var band = scoreBand(j.score);
      if (counts[band] !== undefined) counts[band] += 1;
    });
    return counts;
  }

  function renderStats() {
    var el = document.getElementById("stats");
    var c = computeStats();
    el.innerHTML =
      statHtml(c.total, "Bewerbungen") +
      statHtml(c.jobs, "Analysierte Jobs") +
      statHtml(c.high, "Score 8–10") +
      statHtml(c.versendet, "Versendet") +
      statHtml(c.gespraech, "Gespräch") +
      statHtml(c.zusage + c.absage, "Entschieden");
  }

  function statHtml(value, label) {
    return (
      '<div class="stat">' +
      '<span class="stat-value">' +
      value +
      "</span>" +
      '<span class="stat-label">' +
      escapeHtml(label) +
      "</span></div>"
    );
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function statusOptions(selected) {
    return STATUSES.map(function (s) {
      return (
        '<option value="' +
        s.value +
        '"' +
        (s.value === selected ? " selected" : "") +
        ">" +
        s.label +
        "</option>"
      );
    }).join("");
  }

  function renderLiveMeta() {
    var el = document.getElementById("live-meta");
    if (!el) return;
    if (!liveMeta) {
      el.textContent = "Noch keine Live-Jobs geladen.";
      return;
    }
    var parts = [
      "Stand " + formatFetchedAt(liveMeta.fetchedAt),
      (liveMeta.count != null ? liveMeta.count : liveJobs.length) + " Jobs",
    ];
    if (liveMeta.suchbegriff) {
      parts.push(liveMeta.suchbegriff + " · " + (liveMeta.standort || ""));
    }
    el.textContent = parts.join(" · ");
  }

  function renderBewerbungen() {
    var list = document.getElementById("bewerbungen-list");
    var items = data.bewerbungen.filter(bewerbungMatches);
    if (!items.length) {
      list.innerHTML = '<p class="empty">Keine Bewerbungen für diese Filter.</p>';
      return;
    }
    list.innerHTML = items
      .map(function (item) {
        var status = getStatus(item.id);
        var stand = formatStand(item.stand);
        var metaParts = [item.firma, item.adresse || item.ort];
        if (stand) metaParts.push("Stand " + stand);
        return (
          '<article class="row" data-id="' +
          escapeHtml(item.id) +
          '">' +
          '<div class="row-main">' +
          '<h3 class="row-title">' +
          escapeHtml(item.titel) +
          "</h3>" +
          '<p class="row-meta">' +
          escapeHtml(metaParts.join(" · ")) +
          "</p>" +
          '<div class="badges">' +
          '<span class="badge">' +
          escapeHtml(item.quelle) +
          "</span>" +
          '<span class="badge badge--banner">' +
          escapeHtml(item.art) +
          "</span>" +
          '<span class="badge badge--muted">' +
          escapeHtml(statusLabel(status)) +
          "</span>" +
          "</div></div>" +
          '<div class="row-actions">' +
          '<select class="status-select" data-status="' +
          escapeHtml(status) +
          '" data-id="' +
          escapeHtml(item.id) +
          '" aria-label="Status für ' +
          escapeHtml(item.firma) +
          '">' +
          statusOptions(status) +
          "</select>" +
          '<a class="link-btn" href="' +
          escapeHtml(item.mappe) +
          '">Mappe</a>' +
          (item.link
            ? '<a class="link-btn" href="' +
              escapeHtml(item.link) +
              '" target="_blank" rel="noopener noreferrer">Stelle</a>'
            : '<span class="link-btn" aria-disabled="true">Stelle</span>') +
          "</div></article>"
        );
      })
      .join("");
  }

  function scoreBadgeClass(score) {
    var band = scoreBand(score);
    if (band === "high") return "badge badge--score-high";
    if (band === "mid") return "badge badge--score-mid";
    return "badge badge--score-low";
  }

  function renderJobs() {
    var list = document.getElementById("jobs-list");
    var items = liveJobs.filter(jobMatches);
    if (!items.length) {
      list.innerHTML =
        '<p class="empty">Keine analysierten Jobs für diese Filter. Mit „Aktualisieren“ neu laden oder die GitHub Action für eine Neusuche starten.</p>';
      return;
    }
    list.innerHTML = items
      .map(function (item) {
        var mappe = mappeForLiveJob(item);
        var score = item.score != null ? item.score : "–";
        return (
          '<article class="row">' +
          '<div class="row-main">' +
          '<h3 class="row-title">' +
          escapeHtml(item.titel) +
          "</h3>" +
          '<p class="row-meta">' +
          escapeHtml(
            [item.firma, item.ort, item.veroeffentlicht].filter(Boolean).join(" · ")
          ) +
          "</p>" +
          (item.reason
            ? '<p class="row-reason">' + escapeHtml(item.reason) + "</p>"
            : "") +
          '<div class="badges">' +
          '<span class="' +
          scoreBadgeClass(item.score) +
          '">Score ' +
          escapeHtml(String(score)) +
          "</span>" +
          (mappe
            ? '<span class="badge badge--ok">Mappe vorhanden</span>'
            : '<span class="badge badge--muted">Keine Mappe</span>') +
          "</div></div>" +
          '<div class="row-actions">' +
          (mappe
            ? '<a class="link-btn" href="' + escapeHtml(mappe) + '">Mappe</a>'
            : "") +
          (item.link
            ? '<a class="link-btn" href="' +
              escapeHtml(item.link) +
              '" target="_blank" rel="noopener noreferrer">Stelle</a>'
            : "") +
          "</div></article>"
        );
      })
      .join("");
  }

  function renderAll() {
    renderStats();
    renderLiveMeta();
    renderBewerbungen();
    renderJobs();
    if (mapInstance) {
      refreshMapMarkers(false);
    }
  }

  function markerIcon(kind) {
    return L.divIcon({
      className: "",
      html: '<div class="marker-pin marker-pin--' + kind + '"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 16],
      popupAnchor: [0, -12],
    });
  }

  function popupHtml(item) {
    var status = getStatus(item.id);
    var links =
      '<div class="map-popup__actions">' +
      '<a class="link-btn" href="' +
      escapeHtml(item.mappe) +
      '">Mappe</a>' +
      (item.link
        ? '<a class="link-btn" href="' +
          escapeHtml(item.link) +
          '" target="_blank" rel="noopener noreferrer">Stelle</a>'
        : "") +
      "</div>";
    return (
      '<div class="map-popup">' +
      '<p class="map-popup__title">' +
      escapeHtml(item.titel) +
      "</p>" +
      '<p class="map-popup__meta">' +
      escapeHtml(item.firma) +
      " · " +
      escapeHtml(statusLabel(status)) +
      "</p>" +
      '<p class="map-popup__adresse">' +
      escapeHtml(item.adresse || item.ort) +
      "</p>" +
      '<div class="badges">' +
      '<span class="badge">' +
      escapeHtml(item.quelle) +
      "</span>" +
      "</div>" +
      links +
      "</div>"
    );
  }

  function livePopupHtml(item) {
    var mappe = mappeForLiveJob(item);
    var links = '<div class="map-popup__actions">';
    if (mappe) {
      links += '<a class="link-btn" href="' + escapeHtml(mappe) + '">Mappe</a>';
    }
    if (item.link) {
      links +=
        '<a class="link-btn" href="' +
        escapeHtml(item.link) +
        '" target="_blank" rel="noopener noreferrer">Stelle</a>';
    }
    links += "</div>";
    return (
      '<div class="map-popup">' +
      '<p class="map-popup__title">' +
      escapeHtml(item.titel) +
      "</p>" +
      '<p class="map-popup__meta">' +
      escapeHtml(item.firma) +
      " · Score " +
      escapeHtml(String(item.score != null ? item.score : "–")) +
      "</p>" +
      '<p class="map-popup__adresse">' +
      escapeHtml(item.ort) +
      "</p>" +
      (item.reason
        ? '<p class="map-popup__reason">' + escapeHtml(item.reason) + "</p>"
        : "") +
      '<div class="badges">' +
      '<span class="' +
      scoreBadgeClass(item.score) +
      '">Analysiert</span>' +
      "</div>" +
      links +
      "</div>"
    );
  }

  function refreshMapMarkers(fit) {
    if (!mapInstance || typeof L === "undefined") return;
    if (mapMarkersLayer) {
      mapMarkersLayer.clearLayers();
    } else {
      mapMarkersLayer = L.layerGroup().addTo(mapInstance);
    }
    var bounds = [];

    data.bewerbungen.forEach(function (item) {
      if (typeof item.lat !== "number" || typeof item.lng !== "number") return;
      var kind = item.quelle === "kuratiert" ? "kuratiert" : "scraper";
      var marker = L.marker([item.lat, item.lng], {
        icon: markerIcon(kind),
        title: item.firma + " – " + item.titel,
      });
      marker.bindPopup(popupHtml(item));
      mapMarkersLayer.addLayer(marker);
      bounds.push([item.lat, item.lng]);
    });

    liveJobs.forEach(function (item) {
      if (typeof item.lat !== "number" || typeof item.lng !== "number") return;
      var kind = "score-" + scoreBand(item.score);
      var marker = L.marker([item.lat, item.lng], {
        icon: markerIcon(kind),
        title:
          "Score " +
          (item.score != null ? item.score : "?") +
          " – " +
          item.firma +
          " – " +
          item.titel,
        zIndexOffset: 200,
      });
      marker.bindPopup(livePopupHtml(item));
      mapMarkersLayer.addLayer(marker);
      bounds.push([item.lat, item.lng]);
    });

    if (fit && bounds.length) {
      mapInstance.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
      mapDidFit = true;
    }
  }

  function ensureMap() {
    if (typeof L === "undefined") return;
    if (mapInstance) {
      setTimeout(function () {
        mapInstance.invalidateSize();
      }, 50);
      return;
    }
    mapInstance = L.map("map", {
      scrollWheelZoom: true,
    }).setView([46.948, 7.4474], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapInstance);
    refreshMapMarkers(true);
    setTimeout(function () {
      mapInstance.invalidateSize();
      if (mapDidFit) {
        refreshMapMarkers(true);
      }
    }, 80);
  }

  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach(function (btn) {
      btn.setAttribute("aria-selected", btn.dataset.tab === tab ? "true" : "false");
    });
    document.getElementById("panel-bewerbungen").hidden = tab !== "bewerbungen";
    document.getElementById("panel-jobs").hidden = tab !== "jobs";
    document.getElementById("panel-karte").hidden = tab !== "karte";
    if (tab === "karte") {
      ensureMap();
    }
  }

  function setRefreshBusy(busy) {
    var btn = document.getElementById("btn-refresh-live");
    if (!btn) return;
    btn.disabled = busy;
    btn.textContent = busy ? "Lädt…" : "Aktualisieren";
  }

  function fetchLiveJobs() {
    setRefreshBusy(true);
    var url = LIVE_JOBS_URL + "?t=" + Date.now();
    return fetch(url, { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (payload) {
        liveMeta = payload.meta || {};
        liveJobs = Array.isArray(payload.jobs) ? payload.jobs : [];
        renderAll();
      })
      .catch(function (err) {
        console.error("Live-Jobs laden fehlgeschlagen:", err);
        var el = document.getElementById("live-meta");
        if (el) {
          el.textContent =
            "Live-Jobs konnten nicht geladen werden (" + err.message + ").";
        }
      })
      .finally(function () {
        setRefreshBusy(false);
      });
  }

  function bind() {
    document.querySelectorAll(".tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTab(btn.dataset.tab);
      });
    });

    document.getElementById("filter-search").addEventListener("input", function (e) {
      state.search = e.target.value;
      renderBewerbungen();
    });
    document.getElementById("filter-quelle").addEventListener("change", function (e) {
      state.quelle = e.target.value;
      renderBewerbungen();
    });
    document.getElementById("filter-status").addEventListener("change", function (e) {
      state.status = e.target.value;
      renderBewerbungen();
    });

    document.getElementById("job-search").addEventListener("input", function (e) {
      state.jobSearch = e.target.value;
      renderJobs();
    });
    var scoreFilter = document.getElementById("job-score");
    if (scoreFilter) {
      scoreFilter.addEventListener("change", function (e) {
        state.jobScore = e.target.value;
        renderJobs();
      });
    }

    document.getElementById("bewerbungen-list").addEventListener("change", function (e) {
      var select = e.target.closest(".status-select");
      if (!select) return;
      setStatus(select.dataset.id, select.value);
      select.dataset.status = select.value;
      renderAll();
    });

    var refreshBtn = document.getElementById("btn-refresh-live");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        fetchLiveJobs();
      });
    }

    var actionsLink = document.getElementById("link-run-scraper");
    if (actionsLink) {
      actionsLink.href = ACTIONS_URL;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    bind();
    setTab("bewerbungen");
    renderAll();
    fetchLiveJobs();
  });
})();
