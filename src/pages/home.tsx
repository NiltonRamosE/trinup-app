"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import DefaultLayout from "@/components/templates/default";
import { Apple, Leaf, Heart } from "lucide-react";
import SocialFeed from "@/components/organisms/socialFeed";
import ContactForm from "@/components/organisms/form/contactForm";

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <DefaultLayout>
      <section className="relative min-h-screen overflow-visible mt-5">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-12 pt-10 lg:pt-10 mb-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 lg:pr-8"
          >
            <motion.h1
              className="font-bold text-3xl md:text-5xl lg:text-5xl lg:text-left lg:mt-20 leading-tight text-trinup-dark dark:text-white text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <span className="inline-block hidden lg:block mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  “CONOCE TU
                </motion.span>
              </span>{" "}
              <span className="inline-block hidden lg:block mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  PRODUCTO IDEAL
                </motion.span>
              </span>{" "}
              <span className="inline-block hidden lg:block mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  CON TRINUP”
                </motion.span>
              </span>
              <span className="block lg:hidden mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  "CONOCE TU PRODUCTO IDEAL CON TRINUP”
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="font-semibold text-base md:text-xl lg:text-lg mb-8 text-trinup-dark dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Descubre una vida más saludable y sostenible
                </motion.span>
              </span>{" "}
              <span className="inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  con ayuda profesional y guías personalizadas.
                </motion.span>
              </span>{" "}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                variant="bordered"
                className="font-bold text-base md:text-base lg:text-base lg:mt-6 px-12 py-8 border-4 border-trinup-green text-trinup-black dark:text-trinup-light dark:border-trinup-light hover:bg-trinup-green/10 transition-colors rounded-full"
              >
                <motion.div>COMENCEMOS AHORA</motion.div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute top-[-15px] sm:top-[-175px] md:top-[-230px] left-[-40px] w-[180%] sm:w-[200%] md:w-[210%] h-[140%] transform -rotate-[1deg] z-0 ">
              <Image
                src="images/component_green.webp"
                alt="Fondo Verde"
                className="w-full h-auto"
              />
            </div>

            <div className="relative z-10 mt-[-80px] ">
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[40vw] h-[20vh] bg-black/30 rounded-full blur-lg"></div>
              <Image
                src="images/mall.webp"
                alt="Carrito de Compras"
                className="mx-auto mt-20 sm:mt-0"
              />
            </div>
          </motion.div>
        </div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center gap-8 md:py-16 px-4"
        >
          {/* Título */}
          <motion.div
            className="relative bg-black text-white py-2 px-4 rounded-full text-center z-10 mb-8 mt-16 dark:bg-trinup-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h5 className="text-lg md:text-xl py-1 px-12 dark:text-trinup-dark font-extrabold">NUESTROS PARTNERS</h5>
          </motion.div>
          <motion.div
            className="relative top-[-90px] z-0 flex flex-wrap justify-center items-center gap-10 lg:gap-60 w-[135%] sm:w-[200%] bg-trinup-green-light py-4 overflow-visible"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36">
              <img
                src="images/nutriavo.webp"
                alt="NutriAvo"
                className="w-[90%] h-full object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36">
              <img
                src="images/vitalmash.webp"
                alt="VitalMash"
                className="w-[60%] h-full object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36">
              <img
                src="images/sklit.webp"
                alt="Sklit"
                className="w-[100%] h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.div
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            {
              icon: Apple,
              title: "Nutrición Personalizada",
              description: "Planes adaptados a tus necesidades",
            },
            {
              icon: Leaf,
              title: "Vida Sostenible",
              description: "Aprende a vivir en armonía",
            },
            {
              icon: Heart,
              title: "Apoyo Profesional",
              description: "Expertos dedicados a tu bienestar",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center py-6 px-2 bg-white dark:bg-trinup-dark dark:border-2 dark:border-trinup-light rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-12 h-12 text-trinup-green mb-4" />
              <h3 className="text-xl mb-2 text-trinup-dark dark:text-white font-bold">
                {item.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 font-bold text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
      >
        <motion.div
          className="relative z-0 flex flex-wrap justify-center items-center gap-10 lg:gap-60 w-[135%] sm:w-[200%] bg-trinup-green-light py-10 overflow-visible"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-trinup-light"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            NUESTRO PÚBLICO
          </motion.h1>
        </motion.div>
        <SocialFeed />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center gap-8 md:py-16 px-4"
      >
        {/* Título */}
        <motion.div
          className="relative bg-black text-white py-2 px-4 rounded-full text-center z-10 mb-8 mt-16 font-bold dark:bg-trinup-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h5 className="text-lg md:text-xl py-1 px-12 dark:text-trinup-dark font-extrabold">Ponte en Contacto</h5>
        </motion.div>

        {/* Fondo verde con texto centrado */}
        <motion.div
          className="relative top-[-90px] z-0 flex justify-center items-center w-[135%] sm:w-[200%] bg-trinup-green-light py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.p className="text-justify font-bold text-xl text-trinup-light px-4 max-w-4xl">
            ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte.
            Completa el formulario a continuación y nos pondremos en contacto
            contigo lo antes posible.
          </motion.p>
        </motion.div>

        <ContactForm />
      </motion.section>
    </DefaultLayout>
  );
}