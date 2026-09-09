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
        label: "I have read the privacy information.",
        error: "Please confirm that you have read the privacy information.",
        privacyLabel: "Controller: José Pablo Martín · Purpose: to respond to your enquiry · Rights: access, correction, deletion and other rights",
        privacyLink: "Read the full privacy policy",
        privacyHref: "privacy.html"
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
      status: "Spain · Available for remote work", privacyLabel: "Privacy", privacyHref: "privacy.html"
    },
    privacy: {
      title: "Privacy policy",
      description: "How personal data is handled on the professional website of José Pablo Martín.",
      updated: "Last updated: 9 September 2026",
      backLabel: "Back to the website",
      summary: "This website does not use advertising or analytics cookies. If you contact me, I will use the information you send only to deal with your enquiry.",
      sections: [
        { title: "1. Who is responsible for your data?", paragraphs: ["Controller: José Pablo Martín.", "Contact: contact@josepablomartin.com.", "Location: Spain."] },
        { title: "2. What data is processed and how is it obtained?", paragraphs: ["I process the information you choose to send by email, which may include your name, email address, company or project, the content of your message and any other information you include.", "The contact form does not send information to a website database. It prepares a message in your email application; the information reaches me only if you review and send that email.", "Like most websites, the hosting provider may generate technical security and access logs, such as IP address, date and time, requested resource, browser information and error records."] },
        { title: "3. Why is the data processed and on what legal basis?", paragraphs: ["Enquiry data is used to reply, assess the requested project or professional opportunity, and continue the relationship you initiate. The legal basis is taking steps at your request before entering into a contract and, for general enquiries, my legitimate interest in answering communications addressed to me.", "Technical logs are processed to operate, protect and diagnose the website, based on the legitimate interest in maintaining a secure and reliable service.", "Your data is not used for advertising, newsletters, automated decision-making or profiling."] },
        { title: "4. How long is the data kept?", paragraphs: ["Enquiry data is kept for as long as necessary to respond and manage the resulting relationship. Afterwards it may be retained, with access restricted, for the periods needed to meet or defend legal claims.", "Unsolicited résumés and job-related information are normally deleted after 12 months unless you ask for earlier deletion or authorise a longer period. Technical logs are kept only for the period reasonably required for security and troubleshooting."] },
        { title: "5. Who receives the data?", paragraphs: ["Data is not sold. It may be processed by providers that support email and website hosting, acting under their own terms or, where applicable, as service providers. It may also be disclosed to public authorities when required by law.", "If a provider processes data outside the European Economic Area, the transfer will rely on a valid GDPR mechanism, such as an adequacy decision or standard contractual clauses, where required."] },
        { title: "6. Your rights", paragraphs: ["You may request access to, correction or deletion of your data, restriction of processing, data portability where applicable, or object to processing based on legitimate interests. You may also withdraw consent at any time where consent is the legal basis; withdrawal does not affect earlier lawful processing.", "To exercise your rights, write to contact@josepablomartin.com and identify your request. If necessary, I may ask for information to verify your identity. You may also lodge a complaint with the Spanish Data Protection Agency (AEPD) at www.aepd.es."] },
        { title: "7. Cookies and local storage", paragraphs: ["This website does not currently use advertising or analytics cookies. It stores only your language preference in your browser's local storage (jpm-language). This preference is not sent to me and you can remove it by clearing the website data in your browser."] },
        { title: "8. Changes to this policy", paragraphs: ["This policy may be updated if the website, its providers or the applicable rules change. The publication date shown above identifies the current version."] }
      ]
    },
    pending: ["Replace the provisional domain with the public URL before publishing."]
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
        label: "He leído la información de privacidad.",
        error: "Confirma que has leído la información de privacidad.",
        privacyLabel: "Responsable: José Pablo Martín · Finalidad: responder a tu consulta · Derechos: acceso, rectificación, supresión y otros derechos",
        privacyLink: "Leer la política de privacidad completa",
        privacyHref: "privacy.html?lang=es"
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
      status: "España · Disponible para remoto", privacyLabel: "Privacidad", privacyHref: "privacy.html?lang=es"
    },
    privacy: {
      title: "Política de privacidad",
      description: "Cómo se tratan los datos personales en la web profesional de José Pablo Martín.",
      updated: "Última actualización: 9 de septiembre de 2026",
      backLabel: "Volver a la web",
      summary: "Esta web no utiliza cookies publicitarias ni de analítica. Si contactas conmigo, usaré la información que envíes únicamente para atender tu consulta.",
      sections: [
        { title: "1. ¿Quién es el responsable de tus datos?", paragraphs: ["Responsable del tratamiento: José Pablo Martín.", "Contacto: contact@josepablomartin.com.", "Ubicación: España."] },
        { title: "2. ¿Qué datos se tratan y cómo se obtienen?", paragraphs: ["Trato la información que decidas enviar por correo electrónico, que puede incluir tu nombre, dirección de email, empresa o proyecto, el contenido del mensaje y cualquier otro dato que incluyas.", "El formulario de contacto no envía información a una base de datos de la web. Prepara un mensaje en tu aplicación de correo; la información solo me llega si revisas y envías dicho correo.", "Como ocurre en la mayoría de webs, el proveedor de alojamiento puede generar registros técnicos de acceso y seguridad, como la dirección IP, fecha y hora, recurso solicitado, información del navegador y registros de errores."] },
        { title: "3. ¿Para qué se tratan los datos y cuál es la base jurídica?", paragraphs: ["Los datos de las consultas se utilizan para responderte, valorar el proyecto u oportunidad profesional planteada y continuar la relación que hayas iniciado. La base jurídica es la aplicación de medidas precontractuales a petición tuya y, para consultas generales, mi interés legítimo en atender las comunicaciones que recibo.", "Los registros técnicos se tratan para operar, proteger y diagnosticar la web, sobre la base del interés legítimo en mantener un servicio seguro y fiable.", "Tus datos no se utilizan para publicidad, boletines, decisiones automatizadas ni elaboración de perfiles."] },
        { title: "4. ¿Durante cuánto tiempo se conservan?", paragraphs: ["Los datos de las consultas se conservan durante el tiempo necesario para responder y gestionar la relación resultante. Después podrán conservarse, con acceso restringido, durante los plazos necesarios para cumplir obligaciones o atender posibles responsabilidades legales.", "Los currículums no solicitados y la información relacionada con empleo se eliminan normalmente transcurridos 12 meses, salvo que solicites su supresión antes o autorices un plazo mayor. Los registros técnicos se conservan únicamente durante el periodo razonablemente necesario para seguridad y diagnóstico."] },
        { title: "5. ¿Quién recibe los datos?", paragraphs: ["Los datos no se venden. Pueden ser tratados por los proveedores que prestan servicios de correo electrónico y alojamiento web, conforme a sus propias condiciones o, cuando corresponda, como encargados del tratamiento. También podrán comunicarse a administraciones públicas cuando exista una obligación legal.", "Si un proveedor tratase datos fuera del Espacio Económico Europeo, la transferencia se apoyará en un mecanismo válido conforme al RGPD, como una decisión de adecuación o cláusulas contractuales tipo, cuando sea necesario."] },
        { title: "6. Tus derechos", paragraphs: ["Puedes solicitar el acceso, rectificación o supresión de tus datos, la limitación del tratamiento, la portabilidad cuando corresponda, u oponerte a los tratamientos basados en el interés legítimo. También puedes retirar el consentimiento en cualquier momento cuando esa sea la base jurídica, sin que ello afecte a los tratamientos anteriores.", "Para ejercer tus derechos, escribe a contact@josepablomartin.com e identifica tu solicitud. Si fuera necesario, podré pedir información para comprobar tu identidad. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en www.aepd.es."] },
        { title: "7. Cookies y almacenamiento local", paragraphs: ["Esta web no utiliza actualmente cookies publicitarias ni de analítica. Únicamente guarda en el almacenamiento local de tu navegador tu preferencia de idioma (jpm-language). Esta preferencia no se me envía y puedes eliminarla borrando los datos del sitio desde tu navegador."] },
        { title: "8. Cambios en esta política", paragraphs: ["Esta política podrá actualizarse si cambian la web, sus proveedores o la normativa aplicable. La fecha de publicación indicada arriba identifica la versión vigente."] }
      ]
    },
    pending: ["Sustituir el dominio provisional por la URL pública antes de publicar."]
  }
};
