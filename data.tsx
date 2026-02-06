import {
  BookText,
  MailPlus,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Code2,
  Terminal,
  Smartphone,
  Database,
  Cpu,
  Globe,
  Briefcase,
  Users,
  Layout,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiOpenai,
  SiGoogle,
  SiFlutter,
  SiKotlin,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiGit,
  SiJira,
  SiClaude,
  SiAndroidstudio,
  SiPrisma,
  SiMongodb,
  SiDrizzle,
  SiPostgresql,
  SiSupabase,
  SiMariadb,
  SiBootstrap,
  SiAngular,
  SiVite,
  SiAstro,
  SiPhp,
  SiPython,
  SiVercel,
  SiGithub,
  SiGooglecloud,
  SiPostman,
  SiFigma,
  SiNotion,
  SiEclipseide,
  SiStripe,
} from "react-icons/si";
import { FaAws, FaJava, FaVuejs } from "react-icons/fa";
import { PiWhatsappLogoThin } from "react-icons/pi";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/MarlonDT24",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/marlon-torres-982a17305/",
  },
  {
    id: 3,
    logo: <MailPlus size={30} strokeWidth={1} />,
    src: "mailto:torresmarlon40@gmail.com?subject=Contacto%20desde%20Portfolio",
  },
  {
    id: 4,
    logo: <PiWhatsappLogoThin size={33} strokeWidth={1} />,
    src: "https://wa.me/34600000000?text=Hola%20Marlon,%20vi%20tu%20portfolio...",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Testimonials",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
  // Por ahora estará deshabilitado, pero se deja preparado para futuras secciones de servicios,blog o como uso la IA.
  /* {
    id: 5,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  }, */
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Fullstack Developer",
    subtitle: "Vidext Technologies S.L.",
    companyDescription:
      "Empresa de plataformas de IA que transforma textos y documentos en vídeos profesionales con avatares de IA personalizados.",
    description: [
      "Complementé el desarrollo de “Vidext Boost - Backoffice”, una plataforma completa de edición de video y gestión de datos, utilizando React y Next.js, mejorando la experiencia de usuario y la eficiencia operativa en un 40%.",
      "Integré APIs de OpenAI/Gemini y modelos LLM para automatizar la generación de resúmenes, consultas y creaciones.",
      "Optimicé el rendimiento de las consultas de la aplicación mediante TanStack Query logrando tiempos de carga más rápidos con metodologías actualizadas de la propia documentación.",
      "Gestioné bases de datos con MySQL y Drizzle ORM, optimizando consultas complejas y tipando formularios con TanStack Form o React Hook Form.",
      "Diseñe componentes reutilizables con Shadcn UI y Tailwind CSS asegurando un diseño responsive y consistencia visual.",
    ],
    date: "Feb 2026 ",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    subtitle: "ICAM S.L",
    companyDescription:
      "Empresa dedicada al desarrollo integral de proyectos de ingeniería en infraestructuras e instalaciones industriales y comerciales.",
    description: [
      "Desarrollo front-end de aplicaciones web utilizando tecnologías como HTML5, CSS (Tailwind), JavaScript y frameworks como Bootstrap y Laravel.",
      "Diseño interfaces de usuario de forma responsive siguiendo los principios de usabilidad y accesibilidad.",
      "Administre y programe bases de datos con PhpMyAdmin y PHP.",
      "Gestioné bases de datos con MySQL y Drizzle ORM, optimizando consultas complejas y tipando formularios con TanStack Form o React Hook Form.",
      "Me encargue del mantenimiento y desarrollo de sitios web gestionados con WordPress.",
      "Colabore estrechamente con el equipo de ingeniera para traducir las necesidades técnicas en código y desarrollar nuevas funcionalidades.",
    ],
    date: "Feb 2025",
  },
  {
    id: 3,
    title: "Grado Superior",
    subtitle: "Desarrollo de Aplicaciones Multiplataforma",
    companyDescription: "IES JUAN DE GARAY",
    description: [
      "Arquitectura Backend avanzada: Desarrollo de lógica de negocio y APIs REST utilizando Spring Boot, Hibernate/JPA, y seguridad mediante JWT y OAuth2.",
      "Desarrollo Móvil Nativo: Creación de aplicaciones con Kotlin y Android Studio, implementando persistencia local (Room), navegación con Jetpack y consumo de APIs con Retrofit.",
      "Sistemas y Concurrencia: Implementación de comunicación en tiempo real mediante Sockets/WebSockets y gestión de procesos multihilo (Threads/Executors).",
      "Interfaces Modernas y Escalables: Diseño de aplicaciones de escritorio y web utilizando React, Tailwind CSS y arquitecturas basadas en componentes reutilizables.",
      "Gestión de Infraestructura y Datos: Administración de bases de datos relacionales (MySQL/PostgreSQL) en entornos AWS y contenedorización con Docker.",
    ],
    date: "2023 - 2025",
  },
  {
    id: 4,
    title: "Grado Superior",
    subtitle: "Desarrollo de Aplicaciones Web",
    companyDescription: "IES SERPIS",
    description: [
      "Desarrollo Full-Stack: Dominio de entornos cliente-servidor utilizando PHP con Laravel para el backend y arquitecturas modernas basadas en componentes con React y Next.js.",
      "Arquitecturas de Interfaz y UX: Diseño de interfaces web responsivas y accesibles con Tailwind CSS, garantizando una experiencia de usuario óptima y alto rendimiento en navegadores.",
      "Gestión de Datos y Persistencia: Diseño avanzado de bases de datos relacionales con MySQL, implementando el uso de ORMs como Drizzle o Eloquent para la manipulación eficiente de datos.",
      "Integración de Sistemas y APIs: Desarrollo y consumo de APIs RESTful seguras, gestionando estados complejos del lado del cliente mediante herramientas como TanStack Query.",
      "Despliegue y Cloud Computing: Configuración de entornos de producción, automatización de flujos de trabajo con GitHub Actions y despliegue en plataformas como Vercel o AWS.",
    ],
    date: "Mar 2018",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 15,
    text: "Proyectos Finalizados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 550,
    text: "Commits en GitHub",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 5,
    text: "Tecnologías Dominantes",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const dataSkills = [
  {
    id: 1,
    title: "Frontend",
    icon: <Globe className="text-secondary" />,
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={18} /> },
      { name: "React", icon: <SiReact size={18} /> },
      { name: "TypeScript", icon: <SiTypescript size={18} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={18} /> },
      { name: "Astro", icon: <SiAstro size={18} /> },
      { name: "Angular", icon: <SiAngular size={18} /> },
      { name: "Vue", icon: <FaVuejs size={18} /> },
      { name: "Vite", icon: <SiVite size={18} /> },
    ],
    className: "md:col-span-2", // Este será el bloque grande
  },
  {
    id: 2,
    title: "Backend",
    icon: <Database className="text-secondary" size={24} />,
    skills: [
      { name: "PHP", icon: <SiPhp size={18} /> },
      { name: "Laravel", icon: <SiLaravel size={18} /> },
      { name: "Java", icon: <FaJava size={18} /> },
      { name: "Python", icon: <SiPython size={18} /> },
      { name: "Node.js", icon: <SiNodedotjs size={18} /> },
      { name: "Prisma", icon: <SiPrisma size={18} /> },
    ],
    className: "md:col-span-1",
  },
  {
    id: 3,
    title: "DataBases",
    icon: <Database className="text-secondary" size={24} />,
    skills: [
      { name: "MySQL", icon: <SiMysql size={18} /> },
      { name: "MariaDB", icon: <SiMariadb size={18} /> },
      { name: "Drizzle ORM", icon: <SiDrizzle size={18} /> },
      { name: "Mongo DB", icon: <SiMongodb size={18} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
      { name: "Supabase", icon: <SiSupabase size={18} /> },
    ],
    className: "md:col-span-1",
  },
  {
    id: 4,
    title: "AI & Logic",
    icon: <Cpu className="text-secondary" size={24} />,
    skills: [
      { name: "OpenAI API", icon: <SiOpenai size={18} /> },
      { name: "Gemini", icon: <SiGoogle size={18} /> },
      { name: "LLMs Integration", icon: <Code2 size={18} /> },
      { name: "Claude Code", icon: <SiClaude size={18} /> },
      { name: "Open Code", icon: <Code2 size={18} /> },
    ],
    className: "md:col-span-1",
  },
  {
    id: 5,
    title: "Mobile Dev",
    icon: <Smartphone className="text-secondary" size={24} />,
    skills: [
      { name: "React Native", icon: <SiReact size={18} /> },
      { name: "Flutter", icon: <SiFlutter size={18} /> },
      { name: "Kotlin", icon: <SiKotlin size={18} /> },
      { name: "Android Studio", icon: <SiAndroidstudio size={18} /> },
    ],
    className: "md:col-span-1",
  },
  {
    id: 6,
    title: "Tools & Methods",
    icon: <Terminal className="text-secondary" size={24} />,
    skills: [
      { name: "Git", icon: <SiGit size={18} /> },
      { name: "TanStack Query", icon: <Code2 size={18} /> },
      { name: "Shadcn UI", icon: <Code2 size={18} /> },
      { name: "Eclipse", icon: <SiEclipseide size={18} /> },
      { name: "Postman", icon: <SiPostman size={18} /> },
      { name: "Figma", icon: <SiFigma size={18} /> },
      { name: "Notion", icon: <SiNotion size={18} /> },
      { name: "Agile/Scrum", icon: <SiJira size={18} /> },
    ],
    className: "md:col-span-1",
  },
  {
    id: 7,
    title: "System, Networking & Deployment",
    icon: <Terminal className="text-secondary" size={24} />,
    skills: [
      { name: "Vercel", icon: <SiVercel size={18} /> },
      { name: "Github Actions", icon: <SiGithub size={18} /> },
      { name: "AWS", icon: <FaAws size={18} /> },
      { name: "Google Cloud", icon: <SiGooglecloud size={18} /> },
    ],
    className: "md:col-span-1",
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "CapiFriends Social Network",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Frontend",
    description:
      "Capifriends es la evolución de una red social educativa a una aplicación moderna construida con Next.js (App Router) + Tailwind CSS + Supabase (PostgreSQL).",
    imagesGallery: ["/image-1.jpg", "/image-2.jpg", "/image-3.jpg"],
    strategies: [
      {
        title: "Velocidad",
        description:
          "Carga inicial reducida en un 40% usando imágenes Next/Image optimizadas.",
      },
      {
        title: "Animación",
        description:
          "Experiencia inmersiva con Framer Motion sin sacrificar rendimiento.",
      },
      {
        title: "SEO",
        description:
          "Estructura semántica que mejoró el ranking en Lighthouse a 100%.",
      },
    ],
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact size={18} /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Supabase", icon: <SiSupabase size={18} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={18} /> },
    ],
  },
  {
    id: 2,
    title: "Icam Memory",
    image: "/image-2.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Fullstack",
    description:
      "Plataforma de gestión empresarial con panel de administración y roles de usuario.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Mongo DB", icon: <SiMongodb /> },
    ],
  },
  {
    id: 3,
    title: "AI Dashboard",
    image: "/image-3.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Frontend",
    description:
      "Dashboard de analíticas con integración de IA para predicción de datos.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 4,
    title: "Job Finder App",
    image: "/image-4.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Mobile",
    description:
      "Aplicación móvil para búsqueda de empleo con geolocalización en tiempo real.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Stripe", icon: <SiStripe /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    id: 5,
    title: "Crypto Marketplace",
    image: "/image-5.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Fullstack",
    description:
      "Exchange de criptomonedas con gráficos en tiempo real y autenticación segura.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Prisma", icon: <SiPostgresql /> },
    ],
  },
  {
    id: 6,
    title: "Dynamic Analytics",
    image: "/image-6.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Frontend",
    description:
      "Visualización de datos financieros con gráficos interactivos dinámicos.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 7,
    title: "Dark Web AI",
    image: "/image-7.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Fullstack",
    description:
      "SaaS de generación de contenido con IA en modo oscuro profundo.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "OpenAI", icon: <SiNodedotjs /> },
    ],
  },
  {
    id: 8,
    title: "E-commerce Hiring",
    image: "/image-8.jpg",
    urlGithub: "https://github.com/MarlonDT24",
    urlDemo: "#!",
    category: "Frontend",
    description:
      "Portal de contratación minimalista enfocado en la experiencia del candidato.",
    imagesGallery: ["/image-2.jpg", "/image-4.jpg", "/image-6.jpg"],
    strategies: [
      {
        title: "Seguridad",
        description: "Implementación de JWT y roles de usuario protegidos.",
      },
      {
        title: "Base de Datos",
        description: "Modelado relacional optimizado para consultas complejas.",
      },
      {
        title: "Escalabilidad",
        description: "Arquitectura modular lista para añadir microservicios.",
      },
    ],
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

export const dataCompanies = [
    {
        id: 1,
        name: "TechGlobal",
        logo: <Briefcase size={30} className="text-slate-400" />, 
    },
    {
        id: 2,
        name: "InnovateX",
        logo: <Zap size={30} className="text-slate-400" />,
    },
    {
        id: 3,
        name: "FutureWave",
        logo: <ShieldCheck size={30} className="text-slate-400" />,
    },
    {
        id: 4,
        name: "CodeCrafters",
        logo: <Layout size={30} className="text-slate-400" />,
    },
    {
        id: 5,
        name: "DataSphere",
        logo: <Users size={30} className="text-slate-400" />,
    },
    // Repetimos algunos para el efecto infinito si hay pocos
    {
        id: 6,
        name: "AlphaSys",
        logo: <Briefcase size={30} className="text-slate-400" />,
    },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    role: "CEO & Founder",
    company: "Snow Solutions",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    role: "Tech Lead",
    company: "Innovatech",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    role: "Marketing Director",
    company: "Brandify",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    role: "Product Owner",
    company: "Digital Flow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    role: "Senior Dev",
    company: "CodeMasters",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    role: "COO",
    company: "Logística Global",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
