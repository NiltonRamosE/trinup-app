import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Apple, Leaf, Heart } from "lucide-react";

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
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
        <h5 className="text-lg md:text-xl py-1 px-12 dark:text-trinup-dark font-extrabold">
          NUESTROS PARTNERS
        </h5>
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
      <motion.div
        className="relative z-10 grid w-full grid-cols-1 md:grid-cols-1 md:grid-rows-2 gap-8 max-w-6xl mx-auto pb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className=" flex items-center flex-col md:flex-row gap-16 w-full justify-between mb-8">
          <motion.div
            key={0}
            className="flex py-[45px] flex-col items-center w-[400px] py-6 px-2 bg-white dark:bg-white dark:border-2 dark:border-trinup-light rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Apple className="w-12 h-12 text-trinup-green mb-4" />
            <h3 className="text-xl mb-2 text-trinup-dark font-bold">
              {"Nutrición Personalizada"}
            </h3>
            <p className="text-center text-gray-600 font-bold text-sm">
              {"Planes adaptados a tus necesidades"}
            </p>
          </motion.div>
          <motion.div
            key={2}
            className="flex py-[45px] flex-col items-center w-[400px] py-6 px-2 bg-white dark:bg-white dark:border-2 dark:border-trinup-light rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-12 h-12 text-trinup-green mb-4" />
            <h3 className="text-xl mb-2 text-trinup-dark font-bold">
              {"Apoyo Profesional"}
            </h3>
            <p className="text-center text-gray-600 font-bold text-sm">
              {"Expertos dedicados a tu bienestar"}
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            key={1}
            className="flex flex-col py-[45px] w-[400px] items-center py-6 px-2 bg-white dark:bg-white dark:border-2 dark:border-trinup-light rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Leaf className="w-12 h-12 text-trinup-green mb-4" />
            <h3 className="text-xl mb-2 text-trinup-dark font-bold">
              {"Vida Sostenible"}
            </h3>
            <p className="text-center text-gray-600 font-bold text-sm">
              {"Aprende a vivir en armonía"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
