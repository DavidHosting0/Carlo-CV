const rowsEl = document.getElementById("rows");
const unmatchedEl = document.getElementById("unmatched");
const metaEl = document.getElementById("meta");
let filter = "all";
let state = null;

function formatDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("de-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

async function load() {
  const res = await fetch("/api/state");
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    metaEl.textContent = err.error || "Fehler beim Laden";
    return;
  }
  state = await res.json();
  const updated = state.updatedAt
    ? `Stand Sync: ${new Date(state.updatedAt).toLocaleString("de-CH")}`
    : "Noch kein Sync — lokal: npm run sync";
  metaEl.textContent = `${state.count} Bewerbungen · ${updated}`;
  render();
}

function render() {
  if (!state) return;
  const rows = state.applications.filter(
    (a) => filter === "all" || a.status === filter
  );
  rowsEl.innerHTML = rows
    .map((a) => {
      const mail = a.matchedEmail;
      return `<tr>
        <td>
          <span class="firma">${escapeHtml(a.firma)}</span>
          ${a.ort ? `<span class="ort">${escapeHtml(a.ort)}</span>` : ""}
        </td>
        <td>${escapeHtml(a.titel || "—")}</td>
        <td>
          <span class="badge ${a.status}">${a.status}</span>
          ${a.manualOverride ? `<span class="manual">manuell</span>` : ""}
        </td>
        <td>${formatDate(mail?.date || a.updatedAt)}</td>
        <td class="snippet">
          ${
            mail
              ? `<div class="subject">${escapeHtml(mail.subject || "")}</div>
                 <div>${escapeHtml(mail.snippet || "")}</div>`
              : "—"
          }
        </td>
        <td>
          <div class="override" data-id="${escapeAttr(a.id)}">
            <button type="button" data-status="zusage">Zusage</button>
            <button type="button" data-status="absage">Absage</button>
            <button type="button" data-status="offen">Offen</button>
            <button type="button" data-status="unklar">Unklar</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");

  const unmatched = state.unmatched || [];
  if (!unmatched.length) {
    unmatchedEl.innerHTML = "<li class=\"meta\">Keine.</li>";
  } else {
    unmatchedEl.innerHTML = unmatched
      .slice()
      .reverse()
      .map(
        (m) => `<li>
          <strong>${escapeHtml(m.subject || "(kein Betreff)")}</strong>
          <div class="meta">${escapeHtml(m.from || "")} · ${formatDate(m.date)} · ${escapeHtml(m.classification || "")}</div>
          <div class="snippet">${escapeHtml(m.snippet || "")}</div>
        </li>`
      )
      .join("");
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

document.querySelector(".filters").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  filter = btn.dataset.filter;
  document
    .querySelectorAll(".filters button")
    .forEach((b) => b.classList.toggle("active", b === btn));
  render();
});

rowsEl.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-status]");
  if (!btn) return;
  const wrap = btn.closest("[data-id]");
  const appId = wrap?.dataset.id;
  const status = btn.dataset.status;
  if (!appId) return;
  const res = await fetch("/api/override", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ appId, status }),
  });
  if (!res.ok) {
    alert("Override fehlgeschlagen");
    return;
  }
  await load();
});

load();
