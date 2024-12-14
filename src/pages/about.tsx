"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Linkedin, Mail } from "lucide-react";
import DefaultLayout from "@/layouts/default";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin: string;
  email: string;
}
const teamMembers: TeamMember[] = [
  {
    name: "Astrid Ariana Verde López",
    role: "Chief Executive Officer (CEO)",
    bio: "Fundadora y líder visionaria, guía la estrategia general de TRINUP, enfocándose en el crecimiento y la innovación en el sector de alimentos funcionales.",
    linkedin: "https://linkedin.com/in/",
    email: "astrid@trinup.com",
    image:"/main.png"
  },
  {
    name: "Nilton Ramos Encarnacion",
    role: "Chief Technology Officer (CTO)",
    bio: "Líder tecnológico de TRINUP, supervisa el desarrollo de la plataforma e integra tecnologías avanzadas como machine learning para una experiencia personalizada.",
    linkedin: "https://www.linkedin.com/in/nilton-ramos-encarnacion-0819b433b/",
    email: "202114013@uns.edu.pe",
    image:"/niltonramos.jpg"
  },
  {
    name: "Sait Anjelo Cabrera Jara",
    role: "Chief Marketing Strategist (CMS)",
    bio: "Desarrolla y ejecuta estrategias de marketing para posicionar la plataforma en el mercado y aumentar la visibilidad de los productos saludables.",
    linkedin: "https://www.linkedin.com/in/ilannestorangelesrodriguez/",
    email: "202014026@uns.edu.pe",
    image:"/main.png"
  },
  {
    name: "Katherine Lizeth López Areche",
    role: "Chief Product Officer (CPO)",
    bio: "Supervisa la calidad y selección de productos, asegurando que cumplan con los estándares de salud y bienestar de los consumidores.",
    linkedin: "https://linkedin.com/in/",
    email: "Katherine@trinup.com",
    image:"/main.png"
  },
  {
    name: "Mori Álvarez Zelidéé",
    role: "Chief Operating Officer (COO)",
    bio: "Gestiona las operaciones diarias de TRINUP, optimizando la cadena de suministro y la relación con las mypes.",
    linkedin: "https://linkedin.com/in/david-sanchez",
    email: "david@trinup.com",
    image:"/main.png"
  },
  {
    name: "Stalyn Zevallos García",
    role: "Chief Marketing Officer (CMO)",
    bio: "Lidera las estrategias de marketing y promoción de la plataforma, posicionando a TRINUP como marca líder en alimentos funcionales.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "elena@trinup.com",
    image:"/main.png"
  },
  {
    name: "Ilan Néstor Ángeles Rodríguez",
    role: "Chief Experience Officer (CXO)",
    bio: "Mejora la experiencia de usuario en la plataforma, asegurando una interfaz intuitiva y una experiencia personalizada para los consumidores.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "202014026@uns.edu.pe",
    image:"/main.png"
  },
  {
    name: "Ing. Johan Max López Heredia",
    role: "Mentor en Ingeniería de Sistemas",
    bio: "Con experiencia en ingeniería de sistemas, guía el desarrollo técnico de TRINUP. Es Jefe de Área en Seguimiento de Egresados en la UNS y docente, especializado en gestión de sistemas y software.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "elena@trinup.com",
    image:"/main.png"
  },
  {
    name: "Magíster Gisella Quispe Silva",
    role: "Gerente de Incubación de Empresas Innovadoras (1551 Incubadora)",
    bio: "Con 12 años en innovación y emprendimiento, lidera la incubación de startups en 1551 Incubadora y es docente en la Universidad Nacional Mayor de San Marcos.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    email: "elena@trinup.com",
    image:"/main.png"
  }
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="max-w-xs dark:bg-trinup-dark dark:border-2 dark:border-trinup-light">
        <CardBody className="overflow-visible p-0">
          <div className="relative w-full h-[150px] flex items-center justify-center ">
            <Avatar
              name={member.image ? undefined : getInitials(member.name)}
              src={member.image}
              className="w-32 h-32 text-2xl text-primary"
            />
          </div>
        </CardBody>
        <CardFooter className="flex-col items-start p-4">
          <h4 className="font-bold text-large text-trinup-green">
            {member.name}
          </h4>
          <p className="text-small text-default-500">{member.role}</p>
          <p className="text-small mt-2">{member.bio}</p>
          <div className="flex mt-2 gap-2">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as="a"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-trinup-green text-primary" />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as="a"
              href={`mailto:${member.email}`}
            >
              <Mail className="text-trinup-green text-primary" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <DefaultLayout>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-trinup-dark dark:text-trinup-light"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Conoce al Equipo TrinUp
        </motion.h1>
        <motion.p
          className="text-xl text-center text-trinup-dark dark:text-trinup-light max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Somos un equipo apasionado dedicado a transformar vidas a través de la
          nutrición y el bienestar. Juntos, combinamos experiencia, innovación y
          compromiso para hacer de TrinUp tu mejor aliado en el camino hacia una
          vida más saludable.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
