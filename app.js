// 1. CONFIGURACIÓN DE TAILWIND CSS
tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f4f4f4',
        card: '#181818',
        popover: '#181818',
        primary: '#d4af37',
        'primary-foreground': '#0a0a0a',
        secondary: '#202020',
        muted: '#242424',
        'muted-foreground': '#a3a3a3',
        border: 'rgba(255,255,255,0.10)',
        input: '#252525'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Segoe UI"', 'sans-serif']
      },
      boxShadow: {
        premium: '0 20px 60px rgba(0,0,0,0.45)',
        gold: '0 18px 50px rgba(212,175,55,0.15)'
      },
      backgroundImage: {
        hero:
          'linear-gradient(90deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.84) 45%, rgba(10,10,10,0.42) 100%), radial-gradient(circle at top left, rgba(212,175,55,0.18), transparent 28%), linear-gradient(135deg, #0f0f0f 0%, #111111 35%, #181818 100%)',
        mesh:
          'radial-gradient(circle at 15% 10%, rgba(212,175,55,0.10), transparent 20%), radial-gradient(circle at 85% 10%, rgba(255,255,255,0.06), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0))'
      }
    }
  }
};

// 2. DICCIONARIO DE TRADUCCIONES (ES, EN, PT)
const translations = {
  es: {
    brand: 'Paraguay Advisory Group',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      firm: 'El Estudio',
      blog: 'Blog',
      contact: 'Contacto'
    },
    home: {
      title: 'Soluciones Legales de Excelencia',
      subtitle: 'Ofrecemos asesoría jurídica integral con los más altos estándares de calidad y compromiso profesional.',
      cta: 'Consulta Gratuita',
      experience: {
        years: '4 años',
        title: 'creando proyectos',
        description: 'Experiencia sólida en el desarrollo, planificación y ejecución de proyectos enfocados en soluciones eficientes y funcionales.',
        cta: 'Ver Empresa'
      },
      partnerText: 'Partner Oviedo Medina Group.\n\nEmpresa paraguaya especializada en desarrollo de proyectos.\n\nBrindamos soluciones integrales adaptadas a cada proyecto, combinando experiencia operativa, tecnología y una fuerte orientación a resultados.\n\nNos especializamos en optimizar recursos y superar expectativas, con la premisa de que el futuro no se crea, se construye.',
      features: [
        {
          title: 'EFICIENTE',
          description: 'Navegar por la burocracia paraguaya y las políticas fiscales internacionales puede ser desalentador. Agilizamos el proceso, haciéndolo sencillo y sin complicaciones.'
        },
        {
          title: 'FIABLE',
          description: 'El tiempo es oro. Nuestra experiencia y conocimiento local garantizan que pueda conseguir lo que desea rápidamente, sin demoras innecesarias, y con un equipo que ya ha ayudado a clientes y empresas.'
        },
        {
          title: 'PERSONALIZADO',
          description: 'Tener un camino claro a seguir, cuando se trata de la optimización fiscal internacional, requiere una evaluación cuidadosa de sus necesidades específicas. Y nuestro enfoque en la fiscalidad internacional es exactamente lo que nos diferencia de cualquier otro proveedor.'
        }
      ]
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'La forma en la que podemos ayudarle',
      list: [
        { title: 'Residencia', description: 'Obtenga su residencia paraguaya y traslade su negocio aquí', icon: 'home' },
        { title: 'Planificación fiscal', description: 'Minimice la cantidad de impuestos adeudados mediante una planificación cuidadosa', icon: 'calculator' },
        { title: 'Gestión fiscal', description: 'Podemos gestionar su situación fiscal y su declaración para que no tenga que preocuparse por la burocracia', icon: 'shield' },
        { title: 'Prueba de domicilio', description: 'Obtenga todos los documentos para pasar las comprobaciones KYC sobre su domicilio en Paraguay y reciba su correspondencia aquí', icon: 'file-text' },
        { title: 'Facilitación de negocios', description: '¿Necesita un abogado, un banco o cualquier otro servicio? Nuestra red of profesionales comprende soluciones para cada escenario', icon: 'building-2' },
        { title: 'Soporte continuo', description: 'Estamos ahí para usted, asegurándonos de que siempre pueda contar con un equipo local, sin importar dónde se encuentre', icon: 'users' }
      ]
    },
    firm: {
      title: 'El Estudio',
      subtitle: 'Tradición, Innovación y Compromiso',
      description: 'En Paraguay Advisory, combinamos una visión global con una profunda raíz en la tradición jurídica. Nuestra firma está liderada por sus directivos, Emilia Oviedo y Alejandro Penayo, quienes representan la continuidad de una trayectoria familiar con más de 60 años de experiencia en el ejercicio del derecho, transmitida a lo largo de generaciones.\n\nEste legado se traduce en un estándar de excelencia basado en la ética, el rigor técnico y el compromiso absoluto con cada cliente. Nuestra práctica está orientada a brindar asesoramiento estratégico, preciso y confidencial, acompañando tanto a clientes locales como internacionales en la toma de decisiones clave.\n\nEn Paraguay Advisory, entendemos que la confianza es el activo más valioso. Por ello, cada servicio que ofrecemos refleja no solo nuestra experiencia, sino también una vocación constante por construir relaciones sólidas y resultados sostenibles en el tiempo.',
      values: [
        { title: 'Integridad', description: 'Actuamos con honestidad y transparencia en cada aspecto de nuestra práctica profesional.' },
        { title: 'Excelencia', description: 'Buscamos la perfección en cada detalle, garantizando el más alto estándar de calidad.' },
        { title: 'Compromiso', description: 'Nos dedicamos plenamente a defender los intereses de nuestros clientes.' },
        { title: 'Innovación', description: 'Aplicamos las últimas tecnologías y metodologías para optimizar nuestros servicios.' }
      ],
      team: [
        { name: 'Emilia Oviedo', role: 'Directora', image: './imagenes/EmiliaOviedo.jpg' },
        { name: 'Alejandro Penayo', role: 'Socio', image: './imagenes/AlejandroPenayo.jpg'},
      ]
    },
    blog: {
      title: 'Noticias Jurídicas',
      subtitle: 'Mantente informado sobre las últimas novedades legales',
      articles: [
        {
          title: 'Pedidos de residencias se duplican: ¿por qué vienen los extranjeros a Paraguay?',
          excerpt: 'Más de 47.600 extranjeros solicitaron residencia en Paraguay durante el 2025 y, según datos oficiales de la Dirección Nacional de Migraciones, ese número prácticamente se está duplicando en estos primeros meses del año. El fenómeno crece y se hace visible en distintos ámbitos, especialmente en el sector estudiantil y emprendedor. Pero la pregunta es inevitable: ¿qué atrae a los extranjeros al país?',
          date: '27 Abr 2026',
          category: 'Nacionales',
          image: 'https://www.abc.com.py/resizer/v2/FZGRTXDBYBHONL3EQHKM2IVQ6U.jpg?auth=5f9c6b00e69ac21e4f6e084590d773e1f29b204920e8d693e0de0a419e95e579&width=770&smart=true',
          link: 'https://www.abc.com.py/nacionales/2026/04/21/pedidos-de-residencias-se-duplican-por-que-vienen-los-extranjeros-a-paraguay/'
        },
        {
          title: 'Facilitarán la residencia permanente para extranjeros que inviertan en el país',
          excerpt: 'Una de las principales innovaciones de esta nueva reglamentación es el reconocimiento de distintos perfiles de inversión, entendiendo que no todas implican necesariamente la creación inmediata de empleos formales.',
          date: '24 Abr 2026',
          category: 'MIC',
          image: 'https://statics.elnacional.com.py/2026/03/crop/69aa02da61a09__990x520.webp',
          link: 'https://elnacional.com.py/economia/facilitaran-residencia-permanente-extranjeros-inviertan-pais-n104706/amp'
        },
        {
          title: 'Investor Pass ya es oficial: Paraguay lanza residencia permanente exprés para captar capital extranjerol',
          excerpt: 'El Gobierno oficializó el “Paraguay Investor Pass”, un nuevo régimen que permite a inversionistas extranjeros acceder directamente a la residencia permanente sin pasar por la residencia temporal. La medida fue presentada en Brasil y apunta a posicionar al país como destino competitivo para capitales regionales.',
          date: '17 Abr 2026',
          category: 'Plus',
          image: 'https://infonegocios.com.py/images/resize/639480.webp?fm=webp',
          link: 'https://infonegocios.com.py/plus/investor-pass-paraguay-apunta-a-captar-capital-extranjero-con-residencia-directa-pero-el-anuncio-oficial-aun-espera'
        }
      ]
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Estamos aquí para ayudarle. Programe una consulta con nuestros expertos.',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        message: 'Su Mensaje',
        submit: 'Enviar Mensaje'
      },
      info: {
        address: ' Legión Civil Extranjera esquina Dr. Eulogio Estigarribia, Edificio Art 2020, Asuncion ',
        phone: '+595 983 996523',
        email: 'paraguayadvisorygroup@gmail.com',
        hours: 'Lunes a Viernes: 9:00 - 18:00'
      },
      labels: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Correo',
        hours: 'Horario'
      },
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Gracias por contactarnos. Nuestro equipo revisará su mensaje y le responderá a la brevedad.',
      successReset: 'Enviar otro mensaje',
      error: 'Hubo un error al enviar el mensaje. Inténtelo de nuevo.'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
      description: 'Firma de abogados líder en servicios legales corporativos y comerciales.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      developedBy: 'Desarrollado por SOG Studio PY'
    }
  },
  en: {
    brand: 'Paraguay Advisory Group',
    nav: {
      home: 'Home',
      services: 'Services',
      firm: 'The Firm',
      blog: 'Blog',
      contact: 'Contact'
    },
    home: {
      title: 'Legal Solutions of Excellence',
      subtitle: 'We offer comprehensive legal advice with the highest standards of quality and professional commitment.',
      cta: 'Free Consultation',
      experience: {
        years: '4 years',
        title: 'creating projects',
        description: 'Solid experience in the development, planning and execution of projects focused on efficient and functional solutions.',
        cta: 'View Company'
      },
      partnerText: 'Partner Oviedo Medina Group.\n\nParaguayan company specializing in project development.\n\nWe provide integrated solutions tailored to each project, combining operational experience, technology and a strong results-oriented mindset.\n\nWe specialize in optimizing resources and exceeding expectations, based on the premise that the future is not created, it is built.',
      features: [
        {
          title: 'EFFICIENT',
          description: 'Navigating Paraguayan bureaucracy and international tax policies can be daunting. We streamline the process, making it straightforward and free of complexities.'
        },
        {
          title: 'RELIABLE',
          description: 'Time is precious. Our expertise and local knowledge ensure you secure you can get what you want fast, without unnecessary delays, and with a team that has already helped customers and businesses.'
        },
        {
          title: 'PERSONALIZED',
          description: 'Having a clear path forward, when it comes to international tax optimization, requires a careful evaluation of your specific needs. And our focus on international taxation is exactly what makes us different from any other provider.'
        }
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'The way we can help you',
      list: [
        { title: 'Residency', description: 'Get your Paraguayan residency and move your business here', icon: 'home' },
        { title: 'Fiscal planning', description: 'Minimize the amount of taxes due through careful planning', icon: 'calculator' },
        { title: 'Tax management', description: 'We can manage your tax position and declaration so you do not have to worry about bureaucracy', icon: 'shield' },
        { title: 'Proof of Domicile', description: 'Get all the documents to pass KYC checks about your domicile in Paraguay and receive your correspondence here', icon: 'file-text' },
        { title: 'Business facilitation', description: 'Need a lawyer, a bank or any other service? Our network of professionals comprises solutions for every scenario', icon: 'building-2' },
        { title: 'Ongoing support', description: 'We are there for you, making sure that you can always rely on a local team no matter where you are', icon: 'users' }
      ]
    },
    firm: {
      title: 'The Firm',
      subtitle: 'Tradition, Innovation and Commitment',
      description: 'At Paraguay Advisory, we combine a global perspective with deep roots in legal tradition. Our firm is led by its directors, Emilia Oviedo and Alejandro Penayo, who represent the continuity of a family legacy with more than 60 years of experience in the practice of law, passed down through generations.\n\nThis legacy translates into a standard of excellence based on ethics, technical rigor, and an absolute commitment to each client. Our practice is focused on providing strategic, precise, and confidential counsel, supporting both local and international clients in key decision-making processes.\n\nAt Paraguay Advisory, we understand that trust is the most valuable asset. Therefore, every service we provide reflects not only our experience, but also a constant commitment to building strong relationships and delivering sustainable results over time.',
      values: [
        { title: 'Integrity', description: 'We act with honesty and transparency in every aspect of our professional practice.' },
        { title: 'Excellence', description: 'We seek perfection in every detail, guaranteeing the highest quality standard.' },
        { title: 'Commitment', description: 'We are fully dedicated to defending the interests of our clients.' },
        { title: 'Innovation', description: 'We apply the latest technologies and methodologies to optimize our services.' }
      ],
      team: [
        { name: 'Emilia Oviedo', role: 'Director', image: './imagenes/EmiliaOviedo.jpg' },
        { name: 'Alejandro Penayo', role: 'Partner', image: './imagenes/AlejandroPenayo.jpg' },
      ]
    },
    blog: {
      title: 'Legal News',
      subtitle: 'Stay informed about the latest legal updates',
      articles: [
        {
          title: 'Residency applications double: why are foreigners coming to Paraguay?',
          excerpt: 'More than 47.600 foreigners applied for residency in Paraguay during 2025 and, according to official data from the National Directorate of Migration, that number is practically doubling in these first months of the year. The phenomenon is growing and becoming visible in different areas, especially in the student and entrepreneurial sectors. But the question is inevitable: what attracts foreigners to the country?',
          date: 'Apr 27, 2026',
          category: 'National',
          image: 'https://www.abc.com.py/resizer/v2/FZGRTXDBYBHONL3EQHKM2IVQ6U.jpg?auth=5f9c6b00e69ac21e4f6e084590d773e1f29b204920e8d693e0de0a419e95e579&width=770&smart=true',
          link: 'https://www.abc.com.py/nacionales/2026/04/21/pedidos-de-residencias-se-duplican-por-que-vienen-los-extranjeros-a-paraguay/'
        },
        {
          title: 'Permanent residency will be facilitated for foreigners investing in the country',
          excerpt: 'One of the main innovations of this new regulation is the recognition of different investment profiles, understanding that not all of them necessarily involve the immediate creation of formal jobs.',
          date: 'Apr 24, 2026',
          category: 'MIC',
          image: 'https://statics.elnacional.com.py/2026/03/crop/69aa02da61a09__990x520.webp',
          link: 'https://elnacional.com.py/economia/facilitaran-residencia-permanente-extranjeros-inviertan-pais-n104706/amp'
        },
        {
          title: 'Investor Pass is now official: Paraguay launches fast-track permanent residency to attract foreign capital',
          excerpt: 'The government has formalized the “Paraguay Investor Pass”, a new regime that allows foreign investors to directly access permanent residency without going through temporary residency. The measure was presented in Brazil and aims to position the country as a competitive destination for regional capital.',
          date: 'Apr 17, 2026',
          category: 'Plus',
          image: 'https://infonegocios.com.py/images/resize/639480.webp?fm=webp',
          link: 'https://infonegocios.com.py/plus/investor-pass-paraguay-apunta-a-captar-capital-extranjero-con-residencia-directa-pero-el-anuncio-oficial-aun-espera'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help. Schedule a consultation with our experts.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone',
        message: 'Your Message',
        submit: 'Send Message'
      },
      info: {
        address: 'Legión Civil Extranjera esquina Dr. Eulogio Estigarribia, Edificio Art 2020, Asuncion',
        phone: '+595 983 996523',
        email: 'paraguayadvisorygroup@gmail.com',
        hours: 'Monday to Friday: 9:00 AM - 6:00 PM'
      },
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours'
      },
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successMessage: 'Thank you for contacting us. Our team will review your message and reply shortly.',
      successReset: 'Send another message',
      error: 'There was an error sending your message. Please try again.'
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      description: 'Leading law firm in corporate and commercial legal services.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      developedBy: 'Developed by SOG Studio PY'
    }
  },
  pt: {
    brand: 'Paraguay Advisory Group',
    nav: {
      home: 'Início',
      services: 'Serviços',
      firm: 'O Escritório',
      blog: 'Blog',
      contact: 'Contato'
    },
    home: {
      title: 'Soluções Jurídicas de Excelência',
      subtitle: 'Oferecemos assessoria jurídica integral com os mais altos padrões de qualidade e compromisso profissional.',
      cta: 'Consulta Gratuita',
      experience: {
        years: '4 anos',
        title: 'criando projetos',
        description: 'Sólida experiência no desenvolvimento, planejamento e execução de projetos focados em soluções eficientes e funcionais.',
        cta: 'Ver Empresa'
      },
      partnerText: 'Parceiro do Grupo Oviedo Medina.\n\nEmpresa paraguaia especializada em desenvolvimento de projetos.\n\nOferecemos soluções integrais adaptadas a cada projeto, combinando experiência operacional, tecnologia e uma forte orientação para resultados.\n\nSomos especializados em otimizar recursos e superar expectativas, com a premissa de que el futuro no se cria, ele se constrói.',
      features: [
        {
          title: 'EFICIENTE',
          description: 'Navegar pela burocracia paraguaia e pelas políticas tributárias internacionais pode ser assustador. Simplificamos o processo, tornando-o direto e livre de complexidades.'
        },
        {
          title: 'CONFIÁVEL',
          description: 'O tempo é precioso. Nossa experiência e conhecimento local garantem que você consiga o que deseja rapidamente, sem atrasos desnecessários, e com uma equipe que já ajudou clientes e empresas.'
        },
        {
          title: 'PERSONALIZADO',
          description: 'Ter um caminho claro a seguir, quando se trata de otimização tributária internacional, requer uma avaliação cuidadosa de suas necessidades específicas. E nosso foco na tributação internacional é exatamente o que nos diferencia de qualquer outro provedor.'
        }
      ]
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'A maneira como podemos ajudar você',
      list: [
        { title: 'Residência', description: 'Obtenha sua residência paraguaia e mude sua empresa para cá', icon: 'home' },
        { title: 'Planejamento fiscal', description: 'Minimize o valor dos impostos devidos por meio de um planejamento cuidadoso', icon: 'calculator' },
        { title: 'Gestão tributária', description: 'Podemos gerenciar sua posição fiscal e declaração para que você não precise se preocupar com a burocracia', icon: 'shield' },
        { title: 'Direito Civil', description: 'Contratos, heranças, família, responsabilidade civil e recuperação de dívidas.', icon: 'file-text' },
        { title: 'Direito Tributário', description: 'Planejamento fiscal, defesa em auditorias, otimização de cargas tributárias.', icon: 'calculator' },
        { title: 'Direito Imobiliário', description: 'Compra e venda de imóveis, arrendamentos, desenvolvimento de projetos imobiliários.', icon: 'home' }
      ]
    },
    firm: {
      title: 'O Escritório',
      subtitle: 'Tradição, Inovação e Compromisso',
      description: 'Na Paraguay Advisory, combinamos uma visão global con profundas raízes na tradição jurídica. Nosso escritório é liderado por seus diretores, Emilia Oviedo e Alejandro Penayo, que representam a continuidade de uma trajetória familiar com mais de 60 anos de experiência no exercício do direito, transmitida ao longo de gerações.\n\nEsse legado se traduz em um padrão de excelência baseado na ética, no rigor técnico e no compromisso absoluto com cada cliente. Nossa prática está voltada a oferecer assessoria estratégica, precisa e confidencial, acompanhando clientes locais e internacionais na tomada de decisões-chave.\n\nNa Paraguay Advisory, entendemos que a confiança é o ativo mais valioso. Por isso, cada serviço que oferecemos reflete não apenas nossa experiência, mas também um compromisso constante em construir relações sólidas e resultados sustentáveis ao longo do tempo.',
      values: [
        { title: 'Integridade', description: 'Atuamos com honestidade e transparência em cada aspecto da nossa prática profissional.' },
        { title: 'Excelência', description: 'Buscamos a perfeição em cada detalhe, garantindo o mais alto padrão de qualidade.' },
        { title: 'Compromisso', description: 'Nos dedicamos plenamente a defender os interesses dos nossos clientes.' },
        { title: 'Inovação', description: 'Aplicamos as últimas tecnologias e metodologias para optimizar nossos serviços.' }
      ],
      team: [
        { name: 'Emilia Oviedo', role: 'Diretor', image: './imagenes/EmiliaOviedo.jpg' },
        { name: 'Alejandro Penayo', role: 'Parceiro', image: './imagenes/AlejandroPenayo.jpg' }
      ]
    },
    blog: {
      title: 'Notícias Jurídicas',
      subtitle: 'Mantenha-se atualizado sobre as últimas novidades jurídicas',
      articles: [
        {
          title: 'Pedidos de residência dobram: por que estrangeiros estão vindo ao Paraguai?',
          excerpt: 'Mais de 47.600 estrangeiros solicitaron residência no Paraguai durante 2025 e, segundo dados oficiais da Direção Nacional de Migrações, esse número praticamente está dobrando nos primeiros meses do ano. O fenômeno cresce e se torna visível em diferentes áreas, especialmente nos setores estudantil e empreendedor. Mas a pergunta é inevitável: o que atrai os estrangeiros ao país?',
          date: '27 Abr 2026',
          category: 'Nacionales',
          image: 'https://www.abc.com.py/resizer/v2/FZGRTXDBYBHONL3EQHKM2IVQ6U.jpg?auth=5f9c6b00e69ac21e4f6e084590d773e1f29b204920e8d693e0de0a419e95e579&width=770&smart=true',
          link: 'https://www.abc.com.py/nacionales/2026/04/21/pedidos-de-residencias-se-duplican-por-que-vienen-los-extranjeros-a-paraguay/'
        },
        {
          title: 'Residência permanente será facilitada para estrangeiros que investirem no país',
          excerpt: 'Uma das principais inovações desta nova regulamentação é o reconhecimento de diferentes perfis de investimento, entendendo que nem todos implicam necessariamente na criação imediata de empregos formais.',
          date: '24 Abr 2026',
          category: 'MIC',
          image: 'https://statics.elnacional.com.py/2026/03/crop/69aa02da61a09__990x520.webp',
          link: 'https://elnacional.com.py/economia/facilitaran-residencia-permanente-extranjeros-inviertan-pais-n104706/amp'
        },
        {
          title: 'Investor Pass já é oficial: Paraguai lança residência permanente expressa para atrair capital estrangeiro',
          excerpt: 'O governo oficializou o “Paraguay Investor Pass”, um novo regime que permite aos investidores estrangeiros acessar diretamente a residência permanente sem passar pela residência temporária. A medida foi apresentada no Brasil e busca posicionar o país como destino competitivo para capitais regionais.',
          date: '17 Abr 2026',
          category: 'Plus',
          image: 'https://infonegocios.com.py/images/resize/639480.webp?fm=webp',
          link: 'https://infonegocios.com.py/plus/investor-pass-paraguay-apunta-a-captar-capital-extranjero-con-residencia-directa-pero-el-anuncio-oficial-aun-espera'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos aqui para ajudar. Agende uma consulta com nossos especialistas.',
      form: {
        name: 'Nome Completo',
        email: 'E-mail',
        phone: 'Telefone',
        message: 'Sua Mensagem',
        submit: 'Enviar Mensagem'
      },
      info: {
        address: 'Legión Civil Extranjera esquina Dr. Eulogio Estigarribia, Edificio Art 2020, Asuncion',
        phone: '+595 983 996523',
        email: 'paraguayadvisorygroup@gmail.com',
        hours: 'Segunda a Sexta: 9:00 - 18:00'
      },
      labels: {
        address: 'Endereço',
        phone: 'Telefone',
        email: 'E-mail',
        hours: 'Horário'
      },
      sending: 'Enviando...',
      successTitle: 'Mensagem enviada!',
      successMessage: 'Obrigado por entrar em contato. Nossa equipe revisará sua mensagem e responderá em breve.',
      successReset: 'Enviar outra mensagem',
      error: 'Houve um erro ao enviar sua mensagem. Tente novamente.'
    },
    footer: {
      rights: 'Todos os direitos reservados',
      privacy: 'Privacidad',
      terms: 'Termos',
      cookies: 'Cookies',
      description: 'Escritório de advocacia líder em serviços jurídicos corporativos e comerciais.',
      quickLinks: 'Links Rápidos',
      services: 'Serviços',
      contact: 'Contato',
      developedBy: 'Desenvolvido por SOG Studio PY'
    }
  }
};

// 3. CONTROLADOR DE LA APLICACIÓN ALPINE.JS
function lawFirmApp() {
  return {
    pages: ['home', 'services', 'firm', 'blog', 'contact'],
    currentPage: 'home',
    language: 'es',
    isTransitioning: false,
    mobileMenuOpen: false,
    contactStatus: 'IDLE',
    contactForm: {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    },
    get t() {
      return translations[this.language];
    },
    refreshIcons() {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    },
    init() {
      const savedLang = localStorage.getItem('language');
      if (savedLang && translations[savedLang]) {
        this.language = savedLang;
      }
      window.addEventListener('load', () => this.refreshIcons(), { once: true });
      this.$nextTick(() => this.refreshIcons());
    },
    showPage(page) {
      if (page === this.currentPage) {
        this.mobileMenuOpen = false;
        return;
      }
      this.isTransitioning = true;
      this.mobileMenuOpen = false;
      setTimeout(() => {
        this.currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          this.isTransitioning = false;
          this.$nextTick(() => this.refreshIcons());
        }, 50);
      }, 300);
    },
    changeLanguage(lang) {
      this.language = lang;
      localStorage.setItem('language', lang);
    },
    async submitContact() {
      this.contactStatus = 'SENDING';
      const data = new FormData();
      data.append('_subject', 'Nuevo mensaje desde la web');
      data.append('nombre', this.contactForm.nombre);
      data.append('email', this.contactForm.email);
      data.append('telefono', this.contactForm.telefono);
      data.append('mensaje', this.contactForm.mensaje);

      try {
        const response = await fetch('https://formspree.io/f/xyklwprr', {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json'
          }
        });

        if (response.ok) {
          this.contactStatus = 'SUCCESS';
          this.contactForm = {
            nombre: '',
            email: '',
            telefono: '',
            mensaje: ''
          };
        } else {
          this.contactStatus = 'ERROR';
        }
      } catch (error) {
        this.contactStatus = 'ERROR';
      }
    }
  };
}