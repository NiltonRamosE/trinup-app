"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Linkedin, Mail } from "lucide-react";
import DefaultLayout from "@/components/templates/default";

interface MiembroEquipo {
  nombre: string;
  cargo: string;
  imagen?: string;
  biografia: string;
  linkedin: string;
  correo: string;
}

// Equipo Ejecutivo
const equipoEjecutivo: MiembroEquipo[] = [
  {
    nombre: "Astrid Ariana Verde López",
    cargo: "Chief Executive Officer (CEO)",
    biografia: "Fundadora y guía la estrategia general de TRINUP, enfocándose en el crecimiento y la innovación en el sector de alimentos funcionales.",
    linkedin: "https://linkedin.com/in/astrid-ariana-verde-lopez-08939929b",
    correo: "astrid@trinup.com",
    imagen: "images/astridverde.webp"
  },
  {
    nombre: "Nilton Ramos Encarnacion",
    cargo: "Chief Technology Officer (CTO)",
    biografia: "Líder tecnológico de TRINUP, supervisa el desarrollo de la plataforma e integra tecnologías avanzadas para una experiencia personalizada.",
    linkedin: "https://www.linkedin.com/in/nilton-ramos-encarnacion-0819b433b/",
    correo: "202114013@uns.edu.pe",
    imagen: "images/niltonramos.webp"
  },
  {
    nombre: "Katherine Lizeth López Areche",
    cargo: "Chief Product Officer (CPO)",
    biografia: "Supervisa la calidad y selección de productos, asegurando que cumplan con los estándares de salud y bienestar de los consumidores.",
    linkedin: "https://linkedin.com/in/",
    correo: "Katherine@trinup.com",
    imagen: "images/main.webp"
  },
  {
    nombre: "Mori Álvarez Zelidéé",
    cargo: "Chief Operating Officer (COO)",
    biografia: "Gestiona las operaciones diarias de TRINUP, optimizando la cadena de suministro y la relación con las mypes del mercado actual.",
    linkedin: "https://linkedin.com/in/david-sanchez",
    correo: "david@trinup.com",
    imagen: "images/main.webp"
  },
  {
    nombre: "Stalyn Zevallos García",
    cargo: "Chief Marketing Officer (CMO)",
    biografia: "Lidera las estrategias de marketing y promoción de la plataforma, posicionando a TRINUP como marca líder en alimentos funcionales.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "elena@trinup.com",
    imagen: "images/main.webp"
  },
];

// Equipo Desarrollador
const equipoDesarrollador: MiembroEquipo[] = [
  {
    nombre: "Guevara Felipe Javier Valentino",
    cargo: "Desarrollador Frontend",
    biografia: "Encargado de implementar interfaces de usuario atractivas y funcionales para la plataforma TRINUP.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "202114033@uns.edu.pe",
    imagen: "images/main.webp"
  },
  {
    nombre: "Panta Piscoche Jose Diego",
    cargo: "Desarrollador Backend",
    biografia: "Responsable de la lógica de negocio y servicios que alimentan la plataforma TRINUP.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "202114046@uns.edu.pe",
    imagen: "images/main.webp"
  },
  {
    nombre: "Cruz Castillo Jhoan Antoni",
    cargo: "Desarrollador Fullstack",
    biografia: "Implementa tanto funcionalidades de frontend como backend para la plataforma.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "202114004@uns.edu.pe",
    imagen: "images/main.webp"
  },
  {
    nombre: "Portal Ibañez Anderzon Dica",
    cargo: "Desarrollador Frontend",
    biografia: "Encargado del desarrollo de aplicaciones móviles para TRINUP.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "202114048@uns.edu.pe",
    imagen: "images/main.webp"
  }
];

const mentores: MiembroEquipo[] = [
  {
    nombre: "Ing. Johan Max López Heredia",
    cargo: "Mentor en Ingeniería de Sistemas",
    biografia: "Guía el desarrollo técnico. Fue Jefe de Área en Seguimiento de Egresados en la UNS y es docente, especializado en gestión de sistemas y software.",
    linkedin: "https://linkedin.com/in/johanlopezh",
    correo: "johan@trinup.com",
    imagen: "images/johanlopez.webp"
  },
  {
    nombre: "Magíster Gisella Quispe Silva",
    cargo: "Gerente de Incubación de Empresas Innovadoras (1551 Incubadora)",
    biografia: "Con 12 años en innovación y emprendimiento, lidera la incubación de startups en 1551 Incubadora y es docente en la UNMSM.",
    linkedin: "https://linkedin.com/in/elena-fernandez",
    correo: "gisella@trinup.com",
    imagen: "images/main.webp"
  }
];

const obtenerIniciales = (nombre: string) => {
  return nombre
    .split(" ")
    .map((palabra) => palabra[0])
    .join("")
    .toUpperCase();
};

const TarjetaMiembro = ({ miembro }: { miembro: MiembroEquipo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="max-w-xs dark:bg-trinup-dark dark:border-2 dark:border-trinup-light">
        <CardBody className="overflow-visible p-0">
          <div className="relative w-full h-[150px] flex items-center justify-center">
            <Avatar
              name={miembro.imagen ? undefined : obtenerIniciales(miembro.nombre)}
              src={miembro.imagen}
              className="w-32 h-32 text-2xl text-primary"
            />
          </div>
        </CardBody>
        <CardFooter className="flex-col items-start p-4">
          <h4 className="font-bold text-large text-trinup-green">
            {miembro.nombre}
          </h4>
          <p className="text-small text-default-500">{miembro.cargo}</p>
          <p className="text-small mt-2">{miembro.biografia}</p>
          <div className="flex mt-2 gap-2">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as="a"
              href={miembro.linkedin}
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
              href={`mailto:${miembro.correo}`}
            >
              <Mail className="text-trinup-green text-primary" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const FiltroEquipo = () => {
  const [filtroActivo, setFiltroActivo] = useState<string>("ejecutivo");

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { id: "ejecutivo", label: "Equipo Ejecutivo" },
          { id: "desarrollador", label: "Equipo Desarrollador" },
          { id: "mentores", label: "Mentores" },
        ].map((filtro) => (
          <motion.div
            key={filtro.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              radius="full"
              size="lg"
              variant={filtroActivo === filtro.id ? "solid" : "bordered"}
              color="success"
              className={`font-bold text-lg transition-all duration-300 ${
                filtroActivo === filtro.id
                  ? "bg-trinup-green text-white shadow-lg shadow-trinup-green/30"
                  : "border-trinup-green text-trinup-green hover:bg-trinup-green/10"
              }`}
              onPress={() => setFiltroActivo(filtro.id)}
            >
              {filtro.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <div className="w-full">
        {filtroActivo === "ejecutivo" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center"
          >
            {equipoEjecutivo.map((miembro, indice) => (
              <TarjetaMiembro key={`ejecutivo-${indice}`} miembro={miembro} />
            ))}
          </motion.div>
        )}

        {filtroActivo === "desarrollador" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center"
          >
            {equipoDesarrollador.map((miembro, indice) => (
              <TarjetaMiembro key={`dev-${indice}`} miembro={miembro} />
            ))}
          </motion.div>
        )}

        {filtroActivo === "mentores" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-center"
          >
            {mentores.map((miembro, indice) => (
              <TarjetaMiembro key={`mentor-${indice}`} miembro={miembro} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function PaginaNosotros() {
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

        <FiltroEquipo />
      </motion.section>
    </DefaultLayout>
  );
};