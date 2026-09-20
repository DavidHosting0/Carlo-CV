(function () {
  "use strict";

  if (typeof getCvContent !== "function") {
    console.error("getCvContent fehlt: content.js laden?");
    return;
  }

  const STORAGE_KEY = "carlo-cv-lang";

  function $(id) {
    return document.getElementById(id);
  }

  function text(id, value) {
    const el = $(id);
    if (el) el.textContent = value ?? "";
  }

  function formatDate(d, lang) {
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "de-CH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function readLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    if (fromUrl === "en" || fromUrl === "de") return fromUrl;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "de") return stored;
    } catch {
      /* ignore */
    }
    return "de";
  }

  function render(lang) {
    const c = getCvContent(lang);
    const ui = c.ui || {};
    document.documentElement.lang = lang === "en" ? "en" : "de";

    text("meta-label", c.meta?.kennzeichnung || "");
    text("meta-hinweis", c.meta?.hinweis || "");
    const banner = $("ideal-banner");
    if (banner) {
      const hasBanner = Boolean(c.meta?.kennzeichnung || c.meta?.hinweis);
      banner.hidden = !hasBanner;
    }

    text("heading-profil", ui.profil);
    text("heading-erfahrung", ui.erfahrung);
    text("heading-ausbildung", ui.ausbildung);
    text("heading-sprachen", ui.sprachen);
    text("heading-skills", ui.skills);
    text("heading-projekte", ui.projekte);
    text("heading-zeugnisse", ui.zeugnisse);

    const ph = $("photo-placeholder");
    if (ph) {
      ph.innerHTML = "";
      const span = document.createElement("span");
      span.textContent = ui.foto || "Foto";
      const small = document.createElement("small");
      small.textContent = ui.fotoHint || "";
      ph.appendChild(span);
      ph.appendChild(small);
    }

    text("name", c.name);
    text("zielposition", c.zielposition);
    const wohnort = c.ort
      ? `${ui.wohnortPrefix || ""} ${c.ort}`.trim()
      : null;
    const nationalitaet = c.nationalitaet
      ? `${ui.nationalitaetLabel || ""}: ${c.nationalitaet}`.trim()
      : null;
    text(
      "hero-meta",
      [c.alter ? `${c.alter} ${ui.alterSuffix || ""}`.trim() : null, nationalitaet]
        .filter(Boolean)
        .join(" · ")
    );

    const contact = $("contact-list");
    if (contact) {
      contact.innerHTML = "";
      const items = [
        wohnort,
        c.telefon
          ? { href: `tel:${c.telefon.replace(/\s/g, "")}`, label: c.telefon }
          : null,
        c.email ? { href: `mailto:${c.email}`, label: c.email } : null,
      ].filter(Boolean);

      items.forEach((item) => {
        const li = document.createElement("li");
        if (typeof item === "string") {
          li.textContent = item;
        } else {
          const a = document.createElement("a");
          a.href = item.href;
          a.textContent = item.label;
          li.appendChild(a);
        }
        contact.appendChild(li);
      });
    }

    const img = $("photo-img");
    const placeholder = $("photo-placeholder");
    if (c.foto && img && placeholder) {
      img.src = c.foto;
      img.alt = c.name ? `Bewerbungsfoto ${c.name}` : "Bewerbungsfoto";
      img.hidden = false;
      placeholder.hidden = true;
      img.onerror = () => {
        img.hidden = true;
        placeholder.hidden = false;
      };
    } else if (img && placeholder) {
      img.hidden = true;
      placeholder.hidden = false;
    }

    text("kurzprofil", c.kurzprofil);

    const erfahrungList = $("erfahrung-list");
    if (erfahrungList) {
      erfahrungList.innerHTML = "";
      (c.erfahrung || []).forEach((job) => {
        const article = document.createElement("article");
        article.className = "job";

        const header = document.createElement("div");
        header.className = "job-header";

        const left = document.createElement("div");
        const title = document.createElement("p");
        title.className = "job-title";
        title.textContent = job.rolle;
        const meta = document.createElement("p");
        meta.className = "job-meta";
        meta.textContent = [job.firma, job.ort].filter(Boolean).join(" · ");
        left.appendChild(title);
        left.appendChild(meta);

        const zeit = document.createElement("span");
        zeit.className = "job-zeitraum";
        zeit.textContent = job.zeitraum || "";

        header.appendChild(left);
        header.appendChild(zeit);
        article.appendChild(header);

        if (job.bullets?.length) {
          const ul = document.createElement("ul");
          ul.className = "job-bullets";
          job.bullets.forEach((b) => {
            const li = document.createElement("li");
            li.textContent = b;
            ul.appendChild(li);
          });
          article.appendChild(ul);
        }

        erfahrungList.appendChild(article);
      });
    }

    const ausbildung = $("ausbildung-block");
    if (ausbildung && c.ausbildung) {
      ausbildung.innerHTML = "";
      const title = document.createElement("p");
      title.className = "ausbildung-title";
      title.textContent = c.ausbildung.abschluss;
      const meta = document.createElement("p");
      meta.className = "ausbildung-meta";
      meta.textContent = [c.ausbildung.institution, c.ausbildung.zeitraum]
        .filter(Boolean)
        .join(" · ");
      const details = document.createElement("p");
      details.className = "ausbildung-details";
      details.textContent = c.ausbildung.details || "";
      ausbildung.appendChild(title);
      ausbildung.appendChild(meta);
      if (c.ausbildung.details) ausbildung.appendChild(details);
    }

    const sprachen = $("sprachen-list");
    if (sprachen) {
      sprachen.innerHTML = "";
      (c.sprachen || []).forEach((s) => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = s.name;
        const niveau = document.createElement("span");
        niveau.className = "niveau";
        niveau.textContent = s.niveau;
        li.appendChild(name);
        li.appendChild(niveau);
        sprachen.appendChild(li);
      });
    }

    const skills = $("skills-list");
    if (skills) {
      skills.innerHTML = "";
      (c.skills || []).forEach((s) => {
        const li = document.createElement("li");
        li.textContent = s;
        skills.appendChild(li);
      });
    }

    const projekteList = $("projekte-list");
    const projekteSection = $("projekte-section");
    if (projekteList) {
      projekteList.innerHTML = "";
      const items = c.projekte || [];
      if (!items.length && projekteSection) {
        projekteSection.hidden = true;
      } else if (projekteSection) {
        projekteSection.hidden = false;
      }
      items.forEach((p) => {
        const div = document.createElement("div");
        div.className = "projekt";
        const t = document.createElement("p");
        t.className = "projekt-titel";
        t.textContent = p.titel;
        const d = document.createElement("p");
        d.className = "projekt-text";
        d.textContent = p.beschreibung;
        div.appendChild(t);
        div.appendChild(d);
        projekteList.appendChild(div);
      });
    }

    const sender = $("letter-sender");
    if (sender) {
      sender.innerHTML = "";
      const strong = document.createElement("strong");
      strong.textContent = c.name;
      sender.appendChild(strong);
      const lines = [
        nationalitaet,
        wohnort,
        c.telefon,
        c.email,
      ].filter(Boolean);
      lines.forEach((line) => {
        sender.appendChild(document.createTextNode(line));
        sender.appendChild(document.createElement("br"));
      });
    }

    text(
      "letter-ort-datum",
      `${c.ort || ""}, ${formatDate(new Date(), lang)}`.replace(/^,\s*/, "")
    );
    text(
      "letter-betreff",
      `${ui.betreffPrefix || "Application"} ${c.zielposition}${
        c.arbeitgeberZiel ? ` | ${c.arbeitgeberZiel}` : ""
      }`
    );

    const m = c.motivation || {};
    text("motivation-anrede", m.anrede ? `${m.anrede},` : "");
    text("motivation-absatz1", m.absatz1 || "");
    text("motivation-absatz2", m.absatz2 || "");
    text("motivation-absatz3", m.absatz3 || "");
    text("motivation-gruss", m.gruss || "");

    const signImg = $("motivation-sign-img");
    const signText = $("motivation-unterschrift");
    const signFile = c.unterschriftBild || "carlosignature.png";
    if (signImg) {
      signImg.src = signFile;
      signImg.alt = m.unterschrift || c.name || "Unterschrift";
      signImg.removeAttribute("hidden");
      signImg.hidden = false;
      if (signText) {
        signText.textContent = "";
        signText.hidden = true;
      }
      signImg.onerror = () => {
        signImg.hidden = true;
        if (signText) {
          signText.hidden = false;
          signText.textContent = m.unterschrift || c.name || "";
        }
      };
    } else if (signText) {
      signText.hidden = false;
      signText.textContent = m.unterschrift || c.name || "";
    }

    text("letter-footnote", c.meta?.hinweis || "");
    const footnote = $("letter-footnote");
    if (footnote) {
      footnote.hidden = !c.meta?.hinweis;
      const footer = footnote.closest(".letter-footer");
      if (footer) footer.hidden = !c.meta?.hinweis;
    }

    const zeugnisseSection = $("zeugnisse");
    const zeugnisseList = $("zeugnisse-list");
    if (zeugnisseSection && zeugnisseList) {
      const items = c.zeugnisse || [];
      if (!items.length) {
        zeugnisseSection.hidden = true;
      } else {
        zeugnisseSection.hidden = false;
        text("zeugnisse-intro", ui.zeugnisseIntro || "");
        zeugnisseList.innerHTML = "";
        items.forEach((z) => {
          const figure = document.createElement("figure");
          figure.className = "zeugnis";

          const caption = document.createElement("figcaption");
          const title = document.createElement("strong");
          title.textContent = z.titel || "";
          caption.appendChild(title);
          if (z.hinweis) {
            caption.appendChild(document.createElement("br"));
            caption.appendChild(document.createTextNode(z.hinweis));
          }
          figure.appendChild(caption);

          const zImg = document.createElement("img");
          zImg.src = z.datei;
          zImg.alt = "";
          zImg.className = "zeugnis-img";
          zImg.loading = "eager";
          zImg.decoding = "sync";
          figure.appendChild(zImg);

          zeugnisseList.appendChild(figure);
        });
      }
    }

    document.title = `${lang === "en" ? "Application" : "Bewerbung"} | ${c.name}${
      c.zielposition ? ` | ${c.zielposition}` : ""
    }`;
  }

  window.__cvTitle = "";
  window.addEventListener("beforeprint", () => {
    window.__cvTitle = document.title;
    document.title = " ";
    // Zeugnisbilder vor dem Druck nachladen
    document.querySelectorAll(".zeugnis-img").forEach((img) => {
      if (!img.complete) {
        const src = img.getAttribute("src");
        if (src) img.src = src;
      }
    });
  });
  window.addEventListener("afterprint", () => {
    if (window.__cvTitle) document.title = window.__cvTitle;
  });

  render(readLang());
})();
