import { siteConfig } from "../config/site.config.js";
import { EditorialLanding } from "./components.js";

const root = document.documentElement;
const app = document.querySelector("#app");

function applyConfig(config) {
  root.lang = config.metadata.language;
  const paletteNames = {
    background: "background", surface: "surface", text: "text", muted: "muted",
    accent: "accent", accentOnLight: "accent-on-light", accentInk: "accent-ink", border: "border", light: "light",
    dark: "dark", overlaySoft: "overlay-soft", overlayStrong: "overlay-strong", focus: "focus"
  };
  Object.entries(paletteNames).forEach(([key, cssName]) => root.style.setProperty(`--${cssName}`, config.palette[key]));
  root.style.setProperty("--font-display", config.typography.display);
  root.style.setProperty("--font-body", config.typography.body);

  document.title = config.metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", config.metadata.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", config.metadata.canonical);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", config.metadata.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", config.metadata.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", config.metadata.canonical);
  document.querySelector('meta[property="og:image"]')?.setAttribute("content", new URL(config.metadata.socialImage, config.metadata.canonical).href);
}

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const header = document.querySelector("[data-header]");
  if (!button || !menu || !header) return;

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    button.querySelector(".sr-only").textContent = "Abrir menú";
    header.classList.remove("menu-open");
    document.body.classList.remove("nav-open");
  };
  const open = () => {
    button.setAttribute("aria-expanded", "true");
    button.querySelector(".sr-only").textContent = "Cerrar menú";
    header.classList.add("menu-open");
    document.body.classList.add("nav-open");
    menu.querySelector("a")?.focus();
  };
  button.addEventListener("click", () => button.getAttribute("aria-expanded") === "true" ? close() : open());
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      close();
      button.focus();
    }
  });
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
    if (error) error.textContent = valid ? "" : field.dataset.error || "Revisa este campo.";
    return valid;
  };

  form.querySelectorAll("[required]").forEach((field) => field.addEventListener("blur", () => validate(field)));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.website.value) return;
    const required = [...form.querySelectorAll("[required]")];
    const valid = required.map(validate).every(Boolean);
    if (!valid) {
      status.textContent = config.form.states.invalid;
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    const data = new FormData(form);
    const body = [
      `Nombre: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Empresa o proyecto: ${data.get("company") || "No indicado"}`,
      "",
      String(data.get("message"))
    ].join("\n");
    status.textContent = config.form.states.opened;
    window.location.href = `${config.form.destination}?subject=${encodeURIComponent(config.form.subject)}&body=${encodeURIComponent(body)}`;
  });
}

function setupMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
}

applyConfig(siteConfig);
app.innerHTML = EditorialLanding(siteConfig);
setupMenu();
setupForm(siteConfig);
setupMotion();
