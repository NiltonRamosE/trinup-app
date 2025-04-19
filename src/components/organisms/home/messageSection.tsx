import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import MessageForm from "@/components/molecules/home/messageForm";
import ImageManos3D from "/images/manos_3d.svg";
import {
  IconChatBubble,
  IconFlechaArriba,
  IconLibro,
  IconMailOutline,
  IconPhoneSolid,
  IconWhatsAppLogo1,
} from "@/components/atoms/icons";

export default function MessageSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center gap-4 md:py-8 px-4"
    >
      <h2 className="flex flex-col items-center">
        <span className="font-semibold">CONTÁCTANOS AHORA</span>
        <span className="text-[#19ee65] font-bold text-4xl text-center">
          ¿QUÉ MEDIO PREFIERES?
        </span>
        <span className="border-b-2 px-10 py-4 border-[#19ee65] w-[60%]"></span>
      </h2>

      <motion.div
        className="flex items-center justify-center text-white px-4 rounded-full w-[100%] text-center z-10 font-bold dark:bg-slate-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 w-[100%]">
          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-4 h-[60px] min-w-[300px] justify-center rounded-xl bg-[#25D366] text-black font-medium text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <IconChatBubble className="w-6 h-6 text-green-200" />
            WhatsApp
          </a>

          {/* Llamar */}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 py-4 h-[60px] min-w-[300px] justify-center rounded-xl bg-[#0F1B21] text-white font-medium text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <IconPhoneSolid className="w-5 h-5 text-white" />
            Llamar ahora
          </a>

          {/* Correo */}
          <a
            href="mailto:correo@ejemplo.com"
            className="flex items-center gap-3 py-4 h-[60px] min-w-[300px] justify-center rounded-xl bg-[#FFFF3F] text-black font-medium text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            <IconMailOutline className="w-6 h-6 text-black" />
            Correo
          </a>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 p-4 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2]"
        >
          <Card className="bg-transparen py-12 shadow-none dark:bg-trinup-dark border-none">
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2> */}
            <MessageForm />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold">
              ¿Algo más rápido? <span className="">¡Claro!</span>
            </h3>
            <p className="mt-2">
              <span className="font-semibold">Tel:</span>{" "}
              <span className="">+51 xxx xxx xxx</span>
            </p>
            <p>
              <span className="font-semibold">Correo:</span>{" "}
              <span className="">Trinup@gmail.com</span>
            </p>
          </div>

          <img
            src={ImageManos3D}
            alt="Equipo TrinUp listo para ayudarte"
            className="rounded-lg object-contain w-full max-w-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
