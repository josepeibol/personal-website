import { defaultLanguage, getSiteConfig, supportedLanguages } from "../config/site.config.js";
import { EditorialLanding } from "./components.js";

const root = document.documentElement;
const app = document.querySelector("#app");
const languageStorageKey = "jpm-language";
let menuCleanup = () => {};
let motionCleanup = () => {};

function languageFromUrl() {
  const language = new URL(window.location.href).searchParams.get("lang");
  return supportedLanguages.includes(language) ? language : null;
}

function storedLanguage() {
  try {
    const language = window.localStorage.getItem(languageStorageKey);
    return supportedLanguages.includes(language) ? language : null;
  } catch {
    return null;
  }
}

function applyConfig(config) {
  root.lang = config.metadata.language;
  const localizedUrl = new URL(config.metadata.canonical);
  if (config.metadata.language !== defaultLanguage) localizedUrl.searchParams.set("lang", config.metadata.language);
  const paletteNames = {
    background: "background", surface: "surface", text: "text", muted: "muted",
    accent: "accent", accentOnLight: "accent-on-light", accentInk: "accent-ink", border: "border", light: "light",
    dark: "dark", overlaySoft: "overlay-soft", overlayStrong: "overlay-strong", focus: "focus"
  };
  Object.entries(paletteNames).forEach(([key, cssName]) => root.style.setProperty(`--${cssName}`, config.palette[key]));
  root.style.setProperty("--font-display", config.typography.display);
  root.style.setProperty("--font-body", config.typography.body);

  document.title = config.metadata.title;
  document.querySelector(".skip-link").textContent = config.ui.skipLink;
  document.querySelector('meta[name="description"]')?.setAttribute("content", config.metadata.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", localizedUrl.href);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", config.metadata.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", config.metadata.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", localizedUrl.href);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", config.metadata.locale);
  document.querySelector('meta[property="og:image"]')?.setAttribute("content", new URL(config.metadata.socialImage, config.metadata.canonical).href);
}

function setupMenu(config) {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const header = document.querySelector("[data-header]");
  if (!button || !menu || !header) return () => {};

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    button.querySelector(".sr-only").textContent = config.ui.openMenu;
    header.classList.remove("menu-open");
    document.body.classList.remove("nav-open");
  };
  const open = () => {
    button.setAttribute("aria-expanded", "true");
    button.querySelector(".sr-only").textContent = config.ui.closeMenu;
    header.classList.add("menu-open");
    document.body.classList.add("nav-open");
    menu.querySelector("a")?.focus();
  };
  const toggle = () => button.getAttribute("aria-expanded") === "true" ? close() : open();
  const onKeydown = (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      close();
      button.focus();
    }
  };

  button.addEventListener("click", toggle);
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", onKeydown);
  return () => {
    document.removeEventListener("keydown", onKeydown);
    document.body.classList.remove("nav-open");
  };
}

function setupForm(config) {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  const validate = (field) => {
    let valid = field.checkValidity();
    if (field.name === "message" && field.value.trim().length < 20) valid = false;
    const container = field.closest(".field, .consent");
    const error = container?.querySelector(".field__error");
    field.setAttribute("aria-invalid", String(!valid));
    if (error) error.textContent = valid ? "" : field.dataset.error || config.ui.genericFieldError;
    return valid;
  };

  form.querySelectorAll("[required]").forEach((field) => field.addEventListener("blur", () => validate(field)));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.website.value) return;
    const valid = [...form.querySelectorAll("[required]")].map(validate).every(Boolean);
    if (!valid) {
      status.textContent = config.form.states.invalid;
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    const data = new FormData(form);
    const labels = config.form.emailBody;
    const body = [
      `${labels.name}: ${data.get("name")}`,
      `${labels.email}: ${data.get("email")}`,
      `${labels.company}: ${data.get("company") || labels.notProvided}`,
      "",
      String(data.get("message"))
    ].join("\n");
    status.textContent = config.form.states.opened;
    window.location.href = `${config.form.destination}?subject=${encodeURIComponent(config.form.subject)}&body=${encodeURIComponent(body)}`;
  });
}

function setupMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".chapter h2, .chapter__body, .pillar-list > li, .process__steps > li, .faq__items, .contact__heading, .contact-form, .contact__direct").forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
  return () => observer.disconnect();
}

function setLanguage(language) {
  if (!supportedLanguages.includes(language)) return;
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // The language still changes when storage is unavailable.
  }
  const url = new URL(window.location.href);
  if (language === defaultLanguage) url.searchParams.delete("lang");
  else url.searchParams.set("lang", language);
  window.history.replaceState({ language }, "", url);
  render(language, true);
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
}

function render(language, focusLanguage = false) {
  menuCleanup();
  motionCleanup();
  const config = getSiteConfig(language);
  applyConfig(config);
  app.innerHTML = EditorialLanding(config);
  menuCleanup = setupMenu(config);
  setupForm(config);
  setupLanguageSwitcher();
  motionCleanup = setupMotion();
  if (focusLanguage) document.querySelector(`[data-language="${language}"]`)?.focus();
}

const initialLanguage = languageFromUrl() || storedLanguage() || defaultLanguage;
render(initialLanguage);

window.addEventListener("popstate", () => render(languageFromUrl() || defaultLanguage));
