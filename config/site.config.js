import { defaultLanguage, translations } from "./i18n.js";

const sharedConfig = {
  metadata: {
    canonical: "https://josepablomartin.com/",
    socialImage: "assets/profile-hero.jpg"
  },
  brand: {
    name: "José Pablo Martín",
    shortName: "JPM",
    logo: { src: "assets/jp-mark.png" }
  },
  cta: { href: "mailto:contact@josepablomartin.com" },
  scenes: {
    hero: {
      src: "assets/profile-hero.jpg", mobileSrc: "assets/profile-hero.jpg",
      positionDesktop: "61% 48%", positionMobile: "55% 50%"
    },
    detail: {
      src: "assets/jp-mark.png", mobileSrc: "assets/jp-mark.png",
      positionDesktop: "50% 50%", positionMobile: "50% 46%"
    },
    context: {
      src: "assets/profile-context.jpg", mobileSrc: "assets/profile-context.jpg",
      fitDesktop: "contain", fitMobile: "contain",
      positionDesktop: "50% 42%", positionMobile: "57% 45%"
    }
  },
  form: { destination: "mailto:contact@josepablomartin.com" },
  palette: {
    background: "#f3f0e8", surface: "#e6e1d7", text: "#0b1625", muted: "#5d6570",
    accent: "#eb5a4f", accentOnLight: "#c33b35", accentInk: "#0b1625", border: "#b9b7b0",
    light: "#fffaf1", dark: "#07111d", overlaySoft: "rgba(7,17,29,.24)",
    overlayStrong: "rgba(7,17,29,.68)", focus: "#0b6bcf"
  },
  typography: {
    display: "Georgia, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  }
};

function mergeSections(base, localized) {
  return Object.fromEntries(
    Object.keys({ ...base, ...localized }).map((key) => [
      key,
      typeof base[key] === "object" && base[key] !== null && !Array.isArray(base[key])
        ? { ...base[key], ...localized[key] }
        : localized[key] ?? base[key]
    ])
  );
}

export function getSiteConfig(language = defaultLanguage) {
  const locale = translations[language] || translations[defaultLanguage];
  return {
    ...sharedConfig,
    ...locale,
    metadata: mergeSections(sharedConfig.metadata, locale.metadata),
    brand: {
      ...mergeSections(sharedConfig.brand, locale.brand),
      logo: mergeSections(sharedConfig.brand.logo, locale.brand.logo)
    },
    cta: mergeSections(sharedConfig.cta, locale.cta),
    scenes: {
      hero: mergeSections(sharedConfig.scenes.hero, locale.scenes.hero),
      detail: mergeSections(sharedConfig.scenes.detail, locale.scenes.detail),
      context: mergeSections(sharedConfig.scenes.context, locale.scenes.context)
    },
    form: mergeSections(sharedConfig.form, locale.form)
  };
}

export { defaultLanguage };
export const supportedLanguages = Object.keys(translations);
export const siteConfig = getSiteConfig();
