const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const lines = (items, tag = "span") => items
  .map((line) => `<${tag}>${escapeHtml(line)}</${tag}>`)
  .join("");

export function ChapterMarker({ number, label, light = false }) {
  return `<p class="chapter-marker${light ? " chapter-marker--light" : ""}"><span>${escapeHtml(number)}</span>${escapeHtml(label)}</p>`;
}

export function PrimaryCTA({ cta, modifier = "" }) {
  return `<a class="primary-cta ${modifier}" href="${escapeHtml(cta.href)}"><span>${escapeHtml(cta.label)}</span><span aria-hidden="true">↗</span></a>`;
}

export function LanguageSwitcher(config) {
  const currentLanguage = config.metadata.language;
  return `<div class="language-switcher" role="group" aria-label="${escapeHtml(config.ui.languageLabel)}">
    ${["en", "es"].map((language) => `<button type="button" lang="${language}" data-language="${language}" aria-label="${escapeHtml(config.ui.languages[language])}" aria-pressed="${String(currentLanguage === language)}">${language === "en" ? "ENG" : "ESP"}</button>`).join("")}
  </div>`;
}

function picture(scene, priority = false) {
  return `<picture class="scene__picture">
    <source media="(max-width: 600px)" srcset="${escapeHtml(scene.mobileSrc)}" />
    <img src="${escapeHtml(scene.src)}" alt="${escapeHtml(scene.alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'} style="--position-desktop:${escapeHtml(scene.positionDesktop)};--position-mobile:${escapeHtml(scene.positionMobile)};--fit-desktop:${escapeHtml(scene.fitDesktop || "cover")};--fit-mobile:${escapeHtml(scene.fitMobile || "cover")}" />
  </picture>`;
}

export function FullBleedScene({ scene, content, className = "", priority = false, id = "" }) {
  return `<section class="scene ${className}" ${id ? `id="${escapeHtml(id)}"` : ""}>
    ${picture(scene, priority)}
    <div class="scene__veil" aria-hidden="true"></div>
    ${content}
  </section>`;
}

export function Navigation(config) {
  return `<header class="site-header" data-header>
    <a class="wordmark" href="#inicio" aria-label="${escapeHtml(config.brand.name)}, ${escapeHtml(config.ui.homeLabel)}">
      <span><img src="${escapeHtml(config.brand.logo.src)}" alt="${escapeHtml(config.brand.logo.alt)}" /></span>
      <small>${escapeHtml(config.brand.category)}</small>
    </a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-button>
      <span class="sr-only">${escapeHtml(config.ui.openMenu)}</span><i></i><i></i>
    </button>
    <nav id="site-menu" class="site-menu" aria-label="${escapeHtml(config.ui.navigationLabel)}" data-menu>
      ${config.navigation.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join("")}
      ${LanguageSwitcher(config)}
      ${PrimaryCTA({ cta: config.cta, modifier: "primary-cta--nav" })}
    </nav>
  </header>`;
}

export function Hero(config) {
  const content = `<div class="hero__content wrap">
    <div class="hero__topline"><p>${escapeHtml(config.promise.eyebrow)}</p><p>${escapeHtml(config.brand.location)}</p></div>
    <div class="hero__copy">
      <h1>${lines(config.promise.titleLines)}</h1>
      <div class="hero__support">
        <p>${escapeHtml(config.promise.body)}</p>
        ${PrimaryCTA({ cta: config.cta })}
      </div>
    </div>
    <ul class="hero__attributes" aria-label="${escapeHtml(config.ui.specialtiesLabel)}">${config.promise.attributes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  </div>`;
  return FullBleedScene({ scene: config.scenes.hero, content, className: "hero", priority: true, id: "inicio" });
}

export function StoryChapter(chapter) {
  return `<section class="chapter story" id="${escapeHtml(chapter.id)}">
    <div class="wrap chapter__grid">
      ${ChapterMarker(chapter)}
      <h2>${lines(chapter.titleLines)}</h2>
      <div class="chapter__body">${chapter.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div>
      <p class="story__aside">${escapeHtml(chapter.aside)}</p>
    </div>
  </section>`;
}

export function DetailScene(config) {
  const c = config.chapters.detailScene;
  const content = `<div class="detail-scene__content wrap">
    ${ChapterMarker({ ...c, light: false })}
    <div><h2>${lines(c.titleLines)}</h2><p>${escapeHtml(c.body)}</p></div>
  </div>`;
  return FullBleedScene({ scene: config.scenes.detail, content, className: "detail-scene", id: c.id });
}

export function DetailSequence(chapter) {
  return `<section class="chapter pillars" id="${escapeHtml(chapter.id)}">
    <div class="wrap">
      <div class="chapter__grid chapter__grid--intro">${ChapterMarker(chapter)}<h2>${lines(chapter.titleLines)}</h2></div>
      <ol class="pillar-list">${chapter.items.map((item) => `<li>
        <span class="pillar-list__index">${escapeHtml(item.index)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
        <small>${escapeHtml(item.proof)}</small>
      </li>`).join("")}</ol>
    </div>
  </section>`;
}

export function ContextScene(config) {
  const c = config.chapters.contextScene;
  const content = `<div class="context-scene__content wrap">
    <div>${ChapterMarker({ ...c, light: true })}<h2>${lines(c.titleLines)}</h2><p>${escapeHtml(c.body)}</p></div>
    <ul>${c.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>
  </div>`;
  return FullBleedScene({ scene: config.scenes.context, content, className: "context-scene", id: c.id });
}

export function ClosingChapter(chapter) {
  return `<section class="chapter process" id="${escapeHtml(chapter.id)}">
    <div class="wrap">
      <div class="chapter__grid chapter__grid--intro">${ChapterMarker(chapter)}<div><h2>${lines(chapter.titleLines)}</h2><p class="process__intro">${escapeHtml(chapter.intro)}</p></div></div>
      <ol class="process__steps">${chapter.steps.map((step, index) => `<li><span></span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.body)}</p></li>`).join("")}</ol>
      <p class="process__roles">${escapeHtml(chapter.roles)}</p>
    </div>
  </section>`;
}

export function FAQChapter(chapter) {
  return `<section class="chapter faq" id="${escapeHtml(chapter.id)}">
    <div class="wrap chapter__grid">
      ${ChapterMarker(chapter)}
      <h2>${lines(chapter.titleLines)}</h2>
      <div class="faq__items">${chapter.items.map((item) => `<details><summary>${escapeHtml(item.question)}<span aria-hidden="true">+</span></summary><p>${escapeHtml(item.answer)}</p></details>`).join("")}</div>
    </div>
  </section>`;
}

export function ContactForm(config) {
  const f = config.form;
  const fields = f.fields;
  return `<form class="contact-form" novalidate data-contact-form>
    <div class="form-row">
      <div class="field"><label for="name">${escapeHtml(fields.name.label)}</label><input id="name" name="name" type="text" autocomplete="name" placeholder="${escapeHtml(fields.name.placeholder)}" required data-error="${escapeHtml(fields.name.error)}" /><small class="field__error"></small></div>
      <div class="field"><label for="email">${escapeHtml(fields.email.label)}</label><input id="email" name="email" type="email" autocomplete="email" placeholder="${escapeHtml(fields.email.placeholder)}" required data-error="${escapeHtml(fields.email.error)}" /><small class="field__error"></small></div>
    </div>
    <div class="field"><label for="company">${escapeHtml(fields.company.label)}</label><input id="company" name="company" type="text" autocomplete="organization" placeholder="${escapeHtml(fields.company.placeholder)}" /></div>
    <div class="field"><label for="message">${escapeHtml(fields.message.label)}</label><textarea id="message" name="message" rows="5" minlength="20" placeholder="${escapeHtml(fields.message.placeholder)}" required data-error="${escapeHtml(fields.message.error)}"></textarea><small class="field__error"></small></div>
    <div class="honeypot" aria-hidden="true"><label for="website">Website</label><input id="website" name="website" tabindex="-1" autocomplete="off" /></div>
    <div class="consent"><input id="consent" name="consent" type="checkbox" required data-error="${escapeHtml(f.consent.error)}" /><label for="consent">${escapeHtml(f.consent.label)}</label><small class="field__error"></small></div>
    <p class="privacy-pending">${escapeHtml(f.consent.privacyLabel)}. <a href="${escapeHtml(f.consent.privacyHref)}">${escapeHtml(f.consent.privacyLink)}</a>.</p>
    <p class="form-status" aria-live="polite" data-form-status>${escapeHtml(f.states.ready)}</p>
    <button class="primary-cta primary-cta--button" type="submit"><span>${escapeHtml(config.cta.label)}</span><span aria-hidden="true">↗</span></button>
  </form>`;
}

export function ContactChapter(config) {
  const c = config.chapters.contact;
  return `<section class="contact" id="${escapeHtml(c.id)}">
    <div class="wrap">
      <div class="contact__heading">${ChapterMarker({ ...c, light: true })}<h2>${lines(c.titleLines)}</h2><p>${escapeHtml(c.body)}</p></div>
      <div class="contact__grid">
        ${ContactForm(config)}
        <aside class="contact__direct"><p>${escapeHtml(c.directEmail)}</p><a href="${escapeHtml(c.linkedin.href)}" target="_blank" rel="noreferrer">${escapeHtml(c.linkedin.label)} ↗</a></aside>
      </div>
    </div>
  </section>`;
}

export function Footer(config) {
  const year = new Date().getFullYear();
  return `<footer class="footer"><div class="wrap"><p>${escapeHtml(config.footer.note)}</p><p>© ${year} ${escapeHtml(config.footer.copyright)} · <a href="${escapeHtml(config.footer.privacyHref)}">${escapeHtml(config.footer.privacyLabel)}</a></p><p>${escapeHtml(config.footer.status)}</p></div></footer>`;
}

export function EditorialLanding(config) {
  return `${Navigation(config)}<main id="main-content">${Hero(config)}${StoryChapter(config.chapters.story)}${DetailScene(config)}${DetailSequence(config.chapters.pillars)}${ContextScene(config)}${ClosingChapter(config.chapters.process)}${FAQChapter(config.chapters.faq)}${ContactChapter(config)}</main>${Footer(config)}`;
}
