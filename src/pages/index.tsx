import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import DefaultLayout from "@/layouts/default";
import { Apple, Leaf, Heart } from "lucide-react";
import SocialFeed from "@/components/socialFeed";
import ContactForm from "@/components/contactForm";

export default function IndexPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <DefaultLayout>
      <section className="relative min-h-screen overflow-hidden mt-5">
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-12 pt-10 lg:pt-10 mb-5">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2 lg:pr-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl leading-tight text-trinup-dark dark:text-white text-center lg:text-left"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {/* Bloques que cambian a inline solo en móvil */}
              <span className="inline-block sm:block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  “CONOCE TU
                </motion.span>
              </span>{" "}
              <span className="inline-block sm:block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  PRODUCTO IDEAL
                </motion.span>
              </span>{" "}
              <span className="inline-block sm:block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  CON TRINUP”
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-trinup-dark dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="inline-block sm:block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Descubre una vida más saludable y sostenible
                </motion.span>
              </span>{" "}
              <span className="inline-block sm:block">
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
                className="text-2xl px-24 py-8 border-4 border-trinup-green text-trinup-black dark:text-trinup-yellow dark:border-trinup-yellow hover:bg-trinup-green/10 transition-colors rounded-full"
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
            <div className="absolute top-[-250px] left-[-10px] w-[175%] h-[140%] transform -rotate-[-2deg] z-0">
              <Image
                src="/component_green.png"
                alt="Fondo Verde"
                className="w-full h-auto"
              />
            </div>

            <div className="relative z-10 mt-[-80px] ">
              <Image
                src="/mall.png"
                alt="Carrito de Compras"
                className="w-[80%] mx-auto"
              />
            </div>
          </motion.div>
        </div>
        {/* 
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
              className="flex flex-col items-center py-6 px-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-12 h-12 text-trinup-green mb-4" />
              <h3 className="text-xl mb-2 text-trinup-dark dark:text-white">
                {item.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>*/}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-trinup-dark"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Nuestro público
        </motion.h1>
        <SocialFeed />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 px-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-trinup-dark"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Ponte en Contacto
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. Completa
          el formulario a continuación y nos pondremos en contacto contigo lo
          antes posible.
        </motion.p>

        <ContactForm />
      </motion.section>
    </DefaultLayout>
  );
}
