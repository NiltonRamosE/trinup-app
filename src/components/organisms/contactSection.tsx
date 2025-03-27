import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import { ContactForm } from "@/components/molecules/contactForm";

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center gap-8 md:py-16 px-4"
    >
      <motion.div
        className="relative bg-black text-white py-2 px-4 rounded-full text-center z-10 mb-8 mt-16 font-bold dark:bg-trinup-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h5 className="text-lg md:text-xl py-1 px-12 dark:text-trinup-dark font-extrabold">
          Ponte en Contacto
        </h5>
      </motion.div>

      <motion.div
        className="relative top-[-90px] z-0 flex justify-center items-center w-[135%] sm:w-[200%] bg-trinup-green-light py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.p className="text-justify font-bold text-xl text-trinup-light px-4 max-w-4xl">
          ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. Completa
          el formulario a continuación y nos pondremos en contacto contigo lo
          antes posible.
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <Card className="p-6 bg-white dark:bg-trinup-dark dark:border-2 dark:border-trinup-light">
            <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <img
            src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Equipo TrinUp listo para ayudarte"
            className="rounded-lg shadow-lg object-cover w-full h-full max-h-[600px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
