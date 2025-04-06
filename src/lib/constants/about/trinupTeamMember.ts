import { TeamMember } from "@/lib/types/models/teamMember";

export const executives: TeamMember[] = [
  {
    id: "AAVL1",
    name: "Astrid Ariana Verde López",
    jobTitle: "Chief Executive Officer (CEO)",
    biography:
      "Fundadora y guía la estrategia general de TRINUP, enfocándose en el crecimiento y la innovación en el sector de alimentos funcionales.",
    linkedin: "https://linkedin.com/in/astrid-ariana-verde-lopez-08939929b",
    email: "astrid@trinup.com",
    image: "images/astridverde.webp",
    subordinates: ["NRE2", "KLLA3", "MAZ4", "SZG5"],
  },
  {
    id: "NRE2",
    name: "Nilton Ramos Encarnacion",
    jobTitle: "Chief Technology Officer (CTO)",
    biography:
      "Líder tecnológico de TRINUP, supervisa el desarrollo de la plataforma e integra tecnologías avanzadas para una experiencia personalizada.",
    linkedin: "https://www.linkedin.com/in/nilton-ramos-encarnacion-0819b433b/",
    email: "202114013@uns.edu.pe",
    image: "images/niltonramos.webp",
    portfolio: "https://niltonramosencarnacion.vercel.app/",
    github: "https://github.com/NiltonRamosE",
    subordinates: ["GFJV6", "PPJD7", "CCJA8", "PIAD9"],
  },
  {
    id: "KLLA3",
    name: "Katherine Lizeth López Areche",
    jobTitle: "Chief Product Officer (CPO)",
    biography:
      "Supervisa la calidad y selección de productos, asegurando que cumplan con los estándares de salud y bienestar de los consumidores.",
    linkedin: "https://linkedin.com/in/katherine-lopez",
    email: "Katherine@trinup.com",
    image: "images/main.webp",
    subordinates: [],
  },
  {
    id: "MAZ4",
    name: "Mori Álvarez Zelidéé",
    jobTitle: "Chief Operating Officer (COO)",
    biography:
      "Gestiona las operaciones diarias de TRINUP, optimizando la cadena de suministro y la relación con las mypes del mercado actual.",
    linkedin: "https://linkedin.com/in/david-sanchez",
    email: "david@trinup.com",
    image: "images/main.webp",
    subordinates: [],
  },
  {
    id: "SZG5",
    name: "Stalyn Zevallos García",
    jobTitle: "Chief Marketing Officer (CMO)",
    biography:
      "Lidera las estrategias de marketing y promoción de la plataforma, posicionando a TRINUP como marca líder en alimentos funcionales.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "elena@trinup.com",
    image: "images/main.webp",
    subordinates: [],
  },
];

export const developers: TeamMember[] = [
  {
    id: "GFJV6",
    name: "Guevara Felipe Javier Valentino",
    jobTitle: "Desarrollador Frontend",
    biography:
      "Encargado de implementar interfaces de usuario atractivas y funcionales para la plataforma TRINUP.",
    linkedin:
      "https://www.linkedin.com/in/javier-valentino-guevara-felipe-09831a21a/",
    email: "202114033@uns.edu.pe",
    image: "images/main.webp",
    github: "https://github.com/ValentinoGuevara",
    subordinates: [],
  },
  {
    id: "PPJD7",
    name: "Panta Piscoche Jose Diego",
    jobTitle: "Desarrollador Backend",
    biography:
      "Responsable de la lógica de negocio y servicios que alimentan la plataforma TRINUP.",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-panta-piscoche-76268732b/",
    email: "202114046@uns.edu.pe",
    image: "images/main.webp",
    github: "https://github.com/Diego-Panta",
    subordinates: [],
  },
  {
    id: "CCJA8",
    name: "Cruz Castillo Jhoan Antoni",
    jobTitle: "Desarrollador Fullstack",
    biography:
      "Implementa tanto funcionalidades de frontend como backend para la plataforma.",
    linkedin: "https://linkedin.com/in",
    email: "202114004@uns.edu.pe",
    image: "images/main.webp",
    github: "https://github.com/Jhoan2-cpu",
    subordinates: [],
  },
  {
    id: "PIAD9",
    name: "Portal Ibañez Anderzon Dica",
    jobTitle: "Desarrollador Frontend",
    biography: "Encargado del desarrollo de aplicaciones móviles para TRINUP.",
    linkedin:
      "https://www.linkedin.com/in/anderzon-dica-portal-iba%C3%B1ez-bbb1851b1/",
    email: "202114048@uns.edu.pe",
    image: "images/main.webp",
    github: "https://github.com/AnderzonPortal",
    subordinates: [],
  },
];

export const mentors: TeamMember[] = [
  {
    id: "JMLH10",
    name: "Ing. Johan Max López Heredia",
    jobTitle: "Mentor en Ingeniería de Sistemas",
    biography:
      "Guía el desarrollo técnico. Fue Jefe de Área en Seguimiento de Egresados en la UNS y es docente, especializado en gestión de sistemas y software.",
    linkedin: "https://www.linkedin.com/in/johanlopezh",
    email: "johan@trinup.com",
    image: "images/johanlopez.webp",
    subordinates: [],
  },
  {
    id: "GQS",
    name: "Mag. Gisella Quispe Silva",
    jobTitle: "Gerente de Incubación de Empresas Innovadoras",
    biography:
      "Con 12 años en innovación y emprendimiento, lidera la incubación de startups en 1551 Incubadora y es docente en la UNMSM.",
    linkedin: "https://www.linkedin.com/in/guisela-carbajal/",
    email: "gisella@trinup.com",
    image: "images/gisellaquispe.webp",
    subordinates: [],
  },
];
