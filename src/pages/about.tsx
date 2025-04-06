"use client";

import { motion } from "framer-motion";
import DefaultLayout from "@/components/templates/default";
import { FilterTeamMember } from "@/components/organisms/about/filterTeamMember";

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

        <FilterTeamMember />
      </motion.section>
    </DefaultLayout>
  );
};