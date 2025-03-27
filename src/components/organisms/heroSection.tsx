import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
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
    </section>
  );
}
