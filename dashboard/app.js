(function () {
  "use strict";

  var STORAGE_KEY = "carlo-cv-dashboard-status";
  var STATUSES = [
    { value: "entwurf", label: "Entwurf" },
    { value: "versendet", label: "Versendet" },
    { value: "gespraech", label: "Gespräch" },
    { value: "absage", label: "Absage" },
    { value: "zusage", label: "Zusage" },
  ];

  var data = window.DASHBOARD_DATA || { bewerbungen: [], jobs: [] };
  var state = {
    tab: "bewerbungen",
    search: "",
    quelle: "alle",
    status: "alle",
    jobSearch: "",
    jobMappe: "alle",
  };

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
    var parts = iso.split("-");
    if (parts.length !== 3) return iso;
    return parts[2] + "." + parts[1] + "." + parts[0];
  }

  function matchesSearch(text, query) {
    if (!query) return true;
    return String(text || "")
      .toLowerCase()
      .indexOf(query.toLowerCase()) !== -1;
  }

  function bewerbungMatches(item) {
    var q = state.search.trim();
    var hay = [item.firma, item.titel, item.ort, item.id].join(" ");
    if (!matchesSearch(hay, q)) return false;
    if (state.quelle !== "alle" && item.quelle !== state.quelle) return false;
    if (state.status !== "alle" && getStatus(item.id) !== state.status) return false;
    return true;
  }

  function jobMatches(item) {
    var q = state.jobSearch.trim();
    var hay = [item.firma, item.titel, item.ort].join(" ");
    if (!matchesSearch(hay, q)) return false;
    var hasMappe = Boolean(item.bewerbungId);
    if (state.jobMappe === "mit" && !hasMappe) return false;
    if (state.jobMappe === "ohne" && hasMappe) return false;
    return true;
  }

  function computeStats() {
    var counts = {
      total: data.bewerbungen.length,
      jobs: data.jobs.length,
      ohneMappe: 0,
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
    data.jobs.forEach(function (j) {
      if (!j.bewerbungId) counts.ohneMappe += 1;
    });
    return counts;
  }

  function renderStats() {
    var el = document.getElementById("stats");
    var c = computeStats();
    el.innerHTML =
      statHtml(c.total, "Bewerbungen") +
      statHtml(c.jobs, "Gefundene Jobs") +
      statHtml(c.ohneMappe, "Jobs ohne Mappe") +
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
        var metaParts = [item.firma, item.ort];
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

  function mappePathFor(bewerbungId) {
    for (var i = 0; i < data.bewerbungen.length; i++) {
      if (data.bewerbungen[i].id === bewerbungId) {
        return data.bewerbungen[i].mappe;
      }
    }
    return null;
  }

  function renderJobs() {
    var list = document.getElementById("jobs-list");
    var items = data.jobs.filter(jobMatches);
    if (!items.length) {
      list.innerHTML = '<p class="empty">Keine Jobs für diese Filter.</p>';
      return;
    }
    list.innerHTML = items
      .map(function (item) {
        var mappe = item.bewerbungId ? mappePathFor(item.bewerbungId) : null;
        return (
          '<article class="row">' +
          '<div class="row-main">' +
          '<h3 class="row-title">' +
          escapeHtml(item.titel) +
          "</h3>" +
          '<p class="row-meta">' +
          escapeHtml([item.firma, item.ort, item.veroeffentlicht].filter(Boolean).join(" · ")) +
          "</p>" +
          '<div class="badges">' +
          (mappe
            ? '<span class="badge badge--ok">Mappe vorhanden</span>'
            : '<span class="badge badge--muted">Keine Mappe</span>') +
          "</div></div>" +
          '<div class="row-actions">' +
          (mappe
            ? '<a class="link-btn" href="' + escapeHtml(mappe) + '">Mappe</a>'
            : "") +
          '<a class="link-btn" href="' +
          escapeHtml(item.link) +
          '" target="_blank" rel="noopener noreferrer">Stelle</a>' +
          "</div></article>"
        );
      })
      .join("");
  }

  function renderAll() {
    renderStats();
    renderBewerbungen();
    renderJobs();
  }

  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll(".tab").forEach(function (btn) {
      btn.setAttribute("aria-selected", btn.dataset.tab === tab ? "true" : "false");
    });
    document.getElementById("panel-bewerbungen").hidden = tab !== "bewerbungen";
    document.getElementById("panel-jobs").hidden = tab !== "jobs";
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
    document.getElementById("job-mappe").addEventListener("change", function (e) {
      state.jobMappe = e.target.value;
      renderJobs();
    });

    document.getElementById("bewerbungen-list").addEventListener("change", function (e) {
      var select = e.target.closest(".status-select");
      if (!select) return;
      setStatus(select.dataset.id, select.value);
      select.dataset.status = select.value;
      renderAll();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bind();
    setTab("bewerbungen");
    renderAll();
  });
})();
