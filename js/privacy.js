import { defaultLanguage, getSiteConfig, supportedLanguages } from "../config/site.config.js";
import { LanguageSwitcher } from "./components.js";

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const storageKey = "jpm-language";
const requestedLanguage = new URL(window.location.href).searchParams.get("lang");
let language = supportedLanguages.includes(requestedLanguage) ? requestedLanguage : defaultLanguage;

function render() {
  const config = getSiteConfig(language);
  const policy = config.privacy;
  const localizedHome = language === defaultLanguage ? "index.html" : `index.html?lang=${language}`;
  const localizedCanonical = language === defaultLanguage
    ? "https://josepablomartin.com/privacy.html"
    : `https://josepablomartin.com/privacy.html?lang=${language}`;

  document.documentElement.lang = language;
  document.title = `${policy.title} — ${config.brand.name}`;
  document.querySelector(".skip-link").textContent = config.ui.skipLink;
  document.querySelector('meta[name="description"]')?.setAttribute("content", policy.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", localizedCanonical);

  document.querySelector("#app").innerHTML = `
    <header class="legal-header wrap">
      <a class="wordmark" href="${escapeHtml(localizedHome)}" aria-label="${escapeHtml(config.brand.name)}">
        <span><img src="${escapeHtml(config.brand.logo.src)}" alt="${escapeHtml(config.brand.logo.alt)}" /></span>
        <small>${escapeHtml(config.brand.category)}</small>
      </a>
      ${LanguageSwitcher(config)}
    </header>
    <main id="main-content" class="legal-main wrap">
      <a class="legal-back" href="${escapeHtml(localizedHome)}">← ${escapeHtml(policy.backLabel)}</a>
      <div class="legal-title">
        <p>${escapeHtml(policy.updated)}</p>
        <h1>${escapeHtml(policy.title)}</h1>
        <p class="legal-summary">${escapeHtml(policy.summary)}</p>
      </div>
      <div class="legal-content">
        ${policy.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>`).join("")}
      </div>
    </main>
  `;

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.language;
      try { window.localStorage.setItem(storageKey, language); } catch { /* Optional preference only. */ }
      const url = new URL(window.location.href);
      if (language === defaultLanguage) url.searchParams.delete("lang");
      else url.searchParams.set("lang", language);
      window.history.replaceState({ language }, "", url);
      render();
      document.querySelector(`[data-language="${language}"]`)?.focus();
    });
  });
}

render();
window.addEventListener("popstate", () => {
  const next = new URL(window.location.href).searchParams.get("lang");
  language = supportedLanguages.includes(next) ? next : defaultLanguage;
  render();
});
