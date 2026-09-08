export const siteConfig = {
  metadata: {
    language: "es",
    title: "José Pablo Martín — Product Owner y Product Manager",
    description: "Product Owner y Product Manager con experiencia internacional en productos digitales, plataformas B2B y operaciones complejas.",
    canonical: "https://pendiente-de-publicar.example/",
    socialImage: "assets/profile-hero.jpg"
  },
  brand: {
    name: "José Pablo Martín",
    shortName: "JPM",
    category: "Product Owner · Product Manager",
    location: "Madrid, España · Trabajo remoto",
    availability: "Disponible para proyectos freelance y oportunidades remotas"
  },
  promise: {
    eyebrow: "Producto digital con perspectiva técnica",
    titleLines: ["Pasemos de", "complejidad", "a productos que", "avanzan."],
    body: "Alineo visión, equipos y ejecución para llevar productos digitales desde la decisión hasta la entrega.",
    attributes: ["Estrategia", "Entrega", "Adopción", "Colaboración", "Producto"]
  },
  cta: {
    label: "Hablemos",
    href: "mailto:contact@josepablomartin.com"
  },
  navigation: [
    { label: "Perfil", href: "#perfil" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Método", href: "#metodo" },
    { label: "Contacto", href: "#contacto" }
  ],
  chapters: {
    story: {
      id: "perfil",
      number: "01",
      label: "Perfil",
      titleLines: ["Producto, personas", "y tecnología"],
      paragraphs: [
        "Soy Product Owner y Product Manager con formación en ingeniería informática y experiencia internacional en banca, aviación, consultoría y operaciones logísticas.",
        "Trabajo entre la estrategia y el detalle: traduzco necesidades complejas en prioridades claras, coordino equipos multidisciplinares y acompaño la adopción del producto."
      ],
      aside: "Español nativo · Inglés fluido · Francés fluido · Alemán básico"
    },
    detailScene: {
      id: "detalle",
      number: "02",
      label: "Escala",
      titleLines: ["Claridad con impacto medible."],
      body: "Experiencia gestionando plataformas críticas, transiciones masivas y productos usados a escala internacional."
    },
    pillars: {
      id: "experiencia",
      number: "03",
      label: "Experiencia",
      titleLines: ["Tres maneras", "de mover un producto."],
      items: [
        {
          index: "01",
          title: "Dar dirección",
          body: "Visión de producto, roadmaps, backlog y relaciones con stakeholders para convertir objetivos en decisiones ejecutables.",
          proof: "Product Owner en IATA y BBVA"
        },
        {
          index: "02",
          title: "Entregar a escala",
          body: "Coordinación de equipos Scrum internacionales, UAT, calidad y gestión del cambio en entornos complejos.",
          proof: "3 equipos internacionales · 18 equipos SAFe"
        },
        {
          index: "03",
          title: "Hacer que se adopte",
          body: "Experiencia de usuario, materiales de formación y comunicación para que la solución se entienda y se utilice.",
          proof: "Transición de más de 100.000 usuarios B2B"
        }
      ]
    },
    contextScene: {
      id: "contexto",
      number: "04",
      label: "Perspectiva",
      titleLines: ["Experiencia global.", "Mentalidad práctica."],
      body: "He trabajado entre Madrid, Praga, Argelia y Estados Unidos, conectando negocio y tecnología en contextos muy distintos.",
      facts: ["121 países", "83% del tráfico aéreo global", "$18,5 B en reembolsos gestionados en 2022"]
    },
    process: {
      id: "metodo",
      number: "05",
      label: "Método",
      titleLines: ["De la ambigüedad", "a un siguiente paso claro."],
      intro: "Mi forma de colaborar reduce ruido y hace visible el avance desde el primer momento.",
      steps: [
        { title: "Entender", body: "Contexto, usuarios, restricciones y la decisión que realmente hay que tomar." },
        { title: "Ordenar", body: "Opciones, prioridades, criterios de éxito y un plan que el equipo pueda ejecutar." },
        { title: "Entregar", body: "Iteraciones, validación, comunicación y aprendizaje hasta conseguir adopción." }
      ],
      roles: "Product discovery · Estrategia · Roadmaps · Backlog · Agile/Scrum · UAT · Stakeholders · Formación"
    },
    faq: {
      id: "preguntas",
      number: "06",
      label: "Preguntas",
      titleLines: ["¿Estás buscando", "a alguien así?"],
      items: [
        {
          question: "¿Qué tipo de servicios ofrezco?",
          answer: "Proyectos freelance y posiciones de Product Owner, Product Manager o Project Manager, especialmente en modalidad remota."
        },
        {
          question: "¿En qué sectores he trabajado?",
          answer: "Banca digital, aviación, consultoría, software empresarial, administración pública y operaciones logísticas."
        },
        {
          question: "¿Puedo trabajar con equipos internacionales?",
          answer: "Sí. He coordinado equipos distribuidos en varios países y trabajo con fluidez en español, inglés y francés."
        },
        {
          question: "¿Qué aporto a un proyecto que ya esté en marcha?",
          answer: "Capacidad para entender el contexto con rapidez, ordenar prioridades, alinear stakeholders y fortalecer la entrega y adopción del producto."
        }
      ]
    },
    contact: {
      id: "contacto",
      number: "07",
      label: "Contacto",
      titleLines: ["Cuéntame qué", "necesitas."],
      body: "Si buscas liderazgo de producto con visión técnica y experiencia internacional, podemos empezar con una conversación breve.",
      directEmail: "contact@josepablomartin.com",
      linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/josepablomartin/" },
      resume: { label: "Descargar CV", href: "Resume Jose Pablo Martin.pdf" }
    }
  },
  scenes: {
    hero: {
      src: "assets/profile-hero.jpg",
      mobileSrc: "assets/profile-hero.jpg",
      alt: "Retrato profesional de José Pablo Martín ante un jardín vertical",
      positionDesktop: "61% 48%",
      positionMobile: "55% 50%"
    },
    detail: {
      src: "assets/jp-mark.png",
      mobileSrc: "assets/jp-mark.png",
      alt: "Símbolo tridimensional JP de la marca personal de José Pablo Martín",
      positionDesktop: "50% 50%",
      positionMobile: "50% 46%"
    },
    context: {
      src: "assets/profile-context.jpg",
      mobileSrc: "assets/profile-context.jpg",
      alt: "José Pablo Martín en un entorno natural junto a una cascada",
      positionDesktop: "50% 42%",
      positionMobile: "57% 45%"
    }
  },
  form: {
    destination: "mailto:contact@josepablomartin.com",
    subject: "Contacto desde la web profesional",
    fields: {
      name: { label: "Nombre", placeholder: "Tu nombre", error: "Escribe tu nombre." },
      email: { label: "Email", placeholder: "tu@email.com", error: "Escribe un email válido." },
      company: { label: "Empresa o proyecto", placeholder: "Nombre de la organización" },
      message: { label: "¿En qué puedo ayudarte?", placeholder: "Cuéntame brevemente el reto, el equipo o la oportunidad.", error: "Añade un mensaje de al menos 20 caracteres." }
    },
    consent: {
      label: "Acepto que mis datos se utilicen para responder a esta solicitud.",
      error: "Necesito tu consentimiento para preparar el correo.",
      privacyLabel: "Política de privacidad pendiente de publicar"
    },
    states: {
      ready: "Al pulsar, se abrirá tu aplicación de correo con el mensaje preparado.",
      invalid: "Revisa los campos indicados antes de continuar.",
      opened: "Se ha preparado el correo en tu aplicación habitual. Revisa el contenido y envíalo desde allí."
    }
  },
  palette: {
    background: "#f3f0e8",
    surface: "#e6e1d7",
    text: "#0b1625",
    muted: "#5d6570",
    accent: "#eb5a4f",
    accentOnLight: "#c33b35",
    accentInk: "#0b1625",
    border: "#b9b7b0",
    light: "#fffaf1",
    dark: "#07111d",
    overlaySoft: "rgba(7,17,29,.24)",
    overlayStrong: "rgba(7,17,29,.68)",
    focus: "#0b6bcf"
  },
  typography: {
    display: "Georgia, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  footer: {
    note: "Product Owner · Product Manager · Consultor independiente",
    copyright: "José Pablo Martín",
    status: "Madrid · Disponible para remoto"
  },
  pending: [
    "Sustituir el dominio provisional por la URL pública antes de publicar.",
    "Publicar y enlazar una política de privacidad.",
    "Confirmar si se prefiere una versión bilingüe español/inglés."
  ]
};
