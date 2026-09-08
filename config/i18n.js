export const defaultLanguage = "en";

export const translations = {
  en: {
    metadata: {
      language: "en", locale: "en_GB",
      title: "José Pablo Martín — Product Owner & Product Manager",
      description: "Product Owner and Product Manager with international experience in digital products, B2B platforms and complex operations."
    },
    brand: {
      category: "Product Owner · Product Manager", location: "Spain · Remote work",
      availability: "Available for freelance projects and remote opportunities",
      logo: { alt: "José Pablo Martín logo" }
    },
    promise: {
      eyebrow: "Digital products with a technical perspective",
      titleLines: ["From", "complexity", "to products", "that move."],
      body: "I align vision, teams and execution to move digital products from decision to delivery.",
      attributes: ["Strategy", "Delivery", "Adoption", "Collaboration", "Product"]
    },
    cta: { label: "Let's talk" },
    navigation: [
      { label: "Home", href: "#inicio" }, { label: "Profile", href: "#perfil" },
      { label: "Experience", href: "#experiencia" }, { label: "Approach", href: "#metodo" },
      { label: "Contact", href: "#contacto" }
    ],
    ui: {
      homeLabel: "home", openMenu: "Open menu", closeMenu: "Close menu",
      navigationLabel: "Main navigation", languageLabel: "Choose language",
      languages: { en: "English", es: "Spanish" }, specialtiesLabel: "Areas of expertise",
      skipLink: "Skip to content", genericFieldError: "Please check this field."
    },
    chapters: {
      story: {
        id: "perfil", number: "01", label: "Profile", titleLines: ["Product, people", "and technology"],
        paragraphs: [
          "I am a Product Owner and Product Manager with a background in computer engineering and international experience across banking, aviation, consulting and logistics operations.",
          "I work between strategy and detail: translating complex needs into clear priorities, coordinating multidisciplinary teams and supporting product adoption."
        ],
        aside: "Native Spanish · Fluent English · Fluent French · Basic German"
      },
      detailScene: {
        id: "detalle", number: "02", label: "Scale", titleLines: ["Clarity with measurable impact."],
        body: "I have experience managing critical platforms, large-scale transitions and products used across international markets."
      },
      pillars: {
        id: "experiencia", number: "03", label: "Experience", titleLines: ["Let's move", "forward together."],
        items: [
          { index: ">", title: "Direction", body: "Product vision, roadmaps, backlog and stakeholder relationships that turn objectives into actionable decisions.", proof: "Product Owner at IATA and BBVA" },
          { index: ">", title: "Organisation", body: "Coordination of international Scrum teams, UAT, quality and change management in complex environments.", proof: "3 international teams · 18 SAFe teams" },
          { index: ">", title: "Impact", body: "User experience, training materials and communication that help people understand and use the solution.", proof: "Transition of 100,000+ B2B users · App serving 6M+ customers" }
        ]
      },
      contextScene: {
        id: "contexto", number: "04", label: "Perspective", titleLines: ["Global experience.", "Practical mindset."],
        body: "I have worked across Madrid, Prague, Algeria and the United States, connecting business and technology in very different contexts.",
        facts: ["121 countries", "83% of global air traffic", "$18.5B in refunds managed in 2022"]
      },
      process: {
        id: "metodo", number: "05", label: "Approach", titleLines: ["Collaboration, clarity", "and context."],
        intro: "My way of working reduces noise and makes progress visible from day one.",
        steps: [
          { title: "Understand", body: "The context, users, constraints and the decision that really needs to be made." },
          { title: "Structure", body: "Options, priorities, success criteria and a plan the team can execute." },
          { title: "Deliver", body: "Iteration, validation, communication and learning until adoption is achieved." }
        ],
        roles: "Product discovery · Strategy · Roadmaps · Backlog · Agile/Scrum · UAT · Stakeholders · Training"
      },
      faq: {
        id: "preguntas", number: "06", label: "Questions", titleLines: ["Looking for", "someone like this?"],
        items: [
          { question: "What services do I offer?", answer: "Freelance projects and Product Owner, Product Manager or Project Manager roles, particularly remote opportunities." },
          { question: "Which sectors have I worked in?", answer: "Digital banking, aviation, consulting, enterprise software, public administration and logistics operations." },
          { question: "Can I work with international teams?", answer: "Yes. I have coordinated distributed teams across several countries and work fluently in Spanish, English and French." },
          { question: "What do I bring to a project already under way?", answer: "The ability to understand context quickly, organise priorities, align stakeholders and strengthen product delivery and adoption." }
        ]
      },
      contact: {
        id: "contacto", number: "07", label: "Contact", titleLines: ["Tell me what", "you need."],
        body: "If you need product leadership with a technical perspective and international experience, we can start with a brief conversation.",
        directEmail: "contact@josepablomartin.com",
        linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/josepablomartin/" },
        resume: { label: "Download résumé", href: "Resume Jose Pablo Martin.pdf" }
      }
    },
    scenes: {
      hero: { alt: "Professional portrait of José Pablo Martín in front of a living wall" },
      detail: { alt: "Three-dimensional JP symbol from José Pablo Martín's personal brand" },
      context: { alt: "José Pablo Martín in a natural setting beside a waterfall" }
    },
    form: {
      subject: "Enquiry from the professional website",
      fields: {
        name: { label: "Name", placeholder: "Your name", error: "Please enter your name." },
        email: { label: "Email", placeholder: "you@email.com", error: "Please enter a valid email address." },
        company: { label: "Company or project", placeholder: "Organisation name" },
        message: { label: "How can I help?", placeholder: "Tell me briefly about the challenge, team or opportunity.", error: "Please add a message of at least 20 characters." }
      },
      consent: {
        label: "I agree that my data may be used to respond to this enquiry.",
        error: "Your consent is needed to prepare the email.", privacyLabel: "Privacy policy pending publication"
      },
      states: {
        ready: "When you continue, your email application will open with a prepared message.",
        invalid: "Please check the highlighted fields before continuing.",
        opened: "The email has been prepared in your usual application. Please review and send it from there."
      },
      emailBody: { name: "Name", email: "Email", company: "Company or project", notProvided: "Not provided" }
    },
    footer: {
      note: "Product Owner · Product Manager · Independent consultant", copyright: "José Pablo Martín",
      status: "Spain · Available for remote work"
    },
    pending: ["Replace the provisional domain with the public URL before publishing.", "Publish and link a privacy policy."]
  },
  es: {
    metadata: {
      language: "es", locale: "es_ES", title: "José Pablo Martín — Product Owner y Product Manager",
      description: "Product Owner y Product Manager con experiencia internacional en productos digitales, plataformas B2B y operaciones complejas."
    },
    brand: {
      category: "Product Owner · Product Manager", location: "España · Trabajo remoto",
      availability: "Disponible para proyectos freelance y oportunidades remotas",
      logo: { alt: "Logotipo de José Pablo Martín" }
    },
    promise: {
      eyebrow: "Producto digital con perspectiva técnica", titleLines: ["Pasemos de", "complejidad", "a productos que", "avanzan."],
      body: "Alineo visión, equipos y ejecución para llevar productos digitales desde la fase de decisión hasta la entrega.",
      attributes: ["Estrategia", "Entrega", "Adopción", "Colaboración", "Producto"]
    },
    cta: { label: "Hablemos" },
    navigation: [
      { label: "Inicio", href: "#inicio" }, { label: "Perfil", href: "#perfil" },
      { label: "Experiencia", href: "#experiencia" }, { label: "Método", href: "#metodo" },
      { label: "Contacto", href: "#contacto" }
    ],
    ui: {
      homeLabel: "inicio", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
      navigationLabel: "Navegación principal", languageLabel: "Elegir idioma",
      languages: { en: "Inglés", es: "Español" }, specialtiesLabel: "Especialidades",
      skipLink: "Saltar al contenido", genericFieldError: "Revisa este campo."
    },
    chapters: {
      story: {
        id: "perfil", number: "01", label: "Perfil", titleLines: ["Producto, personas", "y tecnología"],
        paragraphs: [
          "Soy Product Owner y Product Manager con formación en ingeniería informática y experiencia internacional en banca, aviación, consultoría y operaciones logísticas.",
          "Trabajo entre la estrategia y el detalle: traduzco necesidades complejas en prioridades claras, coordino equipos multidisciplinares y acompaño la adopción del producto."
        ],
        aside: "Español nativo · Inglés fluido · Francés fluido · Alemán básico"
      },
      detailScene: {
        id: "detalle", number: "02", label: "Escala", titleLines: ["Claridad con impacto medible."],
        body: "Cuento con experiencia gestionando plataformas críticas, transiciones masivas y productos usados a escala internacional."
      },
      pillars: {
        id: "experiencia", number: "03", label: "Experiencia", titleLines: ["Recorramos juntos", "este camino."],
        items: [
          { index: ">", title: "Dirección", body: "Visión de producto, roadmaps, backlog y relaciones con stakeholders para convertir objetivos en decisiones ejecutables.", proof: "Product Owner en IATA y BBVA" },
          { index: ">", title: "Organización", body: "Coordinación de equipos Scrum internacionales, UAT, calidad y gestión del cambio en entornos complejos.", proof: "3 equipos internacionales · 18 equipos SAFe" },
          { index: ">", title: "Impacto", body: "Experiencia de usuario, materiales de formación y comunicación para que la solución se entienda y se utilice.", proof: "Transición de más de 100.000 usuarios B2B · 6M+ clientes de app" }
        ]
      },
      contextScene: {
        id: "contexto", number: "04", label: "Perspectiva", titleLines: ["Experiencia global.", "Mentalidad práctica."],
        body: "He trabajado entre Madrid, Praga, Argelia y Estados Unidos, conectando negocio y tecnología en contextos muy distintos.",
        facts: ["121 países", "83% del tráfico aéreo global", "$18,5 B en reembolsos gestionados en 2022"]
      },
      process: {
        id: "metodo", number: "05", label: "Método", titleLines: ["Colaboración, claridad", "y contexto."],
        intro: "Mi forma de colaborar reduce ruido y hace visible el avance desde el primer momento.",
        steps: [
          { title: "Entender", body: "Contexto, usuarios, restricciones y la decisión que realmente hay que tomar." },
          { title: "Ordenar", body: "Opciones, prioridades, criterios de éxito y un plan que el equipo pueda ejecutar." },
          { title: "Entregar", body: "Iteraciones, validación, comunicación y aprendizaje hasta conseguir adopción." }
        ],
        roles: "Product discovery · Estrategia · Roadmaps · Backlog · Agile/Scrum · UAT · Stakeholders · Formación"
      },
      faq: {
        id: "preguntas", number: "06", label: "Preguntas", titleLines: ["¿Estás buscando", "a alguien así?"],
        items: [
          { question: "¿Qué tipo de servicios ofrezco?", answer: "Proyectos freelance y posiciones de Product Owner, Product Manager o Project Manager, especialmente en modalidad remota." },
          { question: "¿En qué sectores he trabajado?", answer: "Banca digital, aviación, consultoría, software empresarial, administración pública y operaciones logísticas." },
          { question: "¿Puedo trabajar con equipos internacionales?", answer: "Sí. He coordinado equipos distribuidos en varios países y trabajo con fluidez en español, inglés y francés." },
          { question: "¿Qué aporto a un proyecto que ya esté en marcha?", answer: "Capacidad para entender el contexto con rapidez, ordenar prioridades, alinear stakeholders y fortalecer la entrega y adopción del producto." }
        ]
      },
      contact: {
        id: "contacto", number: "07", label: "Contacto", titleLines: ["Cuéntame qué", "necesitas."],
        body: "Si buscas liderazgo de producto con visión técnica y experiencia internacional, podemos empezar con una conversación breve.",
        directEmail: "contact@josepablomartin.com",
        linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/josepablomartin/" },
        resume: { label: "Descargar CV", href: "Resume Jose Pablo Martin.pdf" }
      }
    },
    scenes: {
      hero: { alt: "Retrato profesional de José Pablo Martín ante un jardín vertical" },
      detail: { alt: "Símbolo tridimensional JP de la marca personal de José Pablo Martín" },
      context: { alt: "José Pablo Martín en un entorno natural junto a una cascada" }
    },
    form: {
      subject: "Contacto desde la web profesional",
      fields: {
        name: { label: "Nombre", placeholder: "Tu nombre", error: "Escribe tu nombre." },
        email: { label: "Email", placeholder: "tu@email.com", error: "Escribe un email válido." },
        company: { label: "Empresa o proyecto", placeholder: "Nombre de la organización" },
        message: { label: "¿En qué puedo ayudarte?", placeholder: "Coméntame brevemente el reto, el equipo o la oportunidad.", error: "Añade un mensaje de al menos 20 caracteres." }
      },
      consent: {
        label: "Acepto que mis datos se utilicen para responder a esta solicitud.",
        error: "Necesito tu consentimiento para preparar el correo.", privacyLabel: "Política de privacidad pendiente de publicar"
      },
      states: {
        ready: "Al pulsar, se abrirá tu aplicación de correo con el mensaje preparado.",
        invalid: "Revisa los campos indicados antes de continuar.",
        opened: "Se ha preparado el correo en tu aplicación habitual. Revisa el contenido y envíalo desde allí."
      },
      emailBody: { name: "Nombre", email: "Email", company: "Empresa o proyecto", notProvided: "No indicado" }
    },
    footer: {
      note: "Product Owner · Product Manager · Consultor independiente", copyright: "José Pablo Martín",
      status: "España · Disponible para remoto"
    },
    pending: ["Sustituir el dominio provisional por la URL pública antes de publicar.", "Publicar y enlazar una política de privacidad."]
  }
};
