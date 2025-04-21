import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import MessageForm from "@/components/molecules/home/messageForm";
import ImageManos3D from "/images/manos_3d.svg";
import {
  IconChatBubble,
} from "@/components/atoms/icons";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FloatingBanner from "@/components/molecules/home/floatingBanner";




const faqs = [
    {
      id: 1,
      pregunta: "¿Quienes somos y que hacemos?",
      respuesta:
        "Somos Trinup, un equipo dedicado a brindar soluciones creativas, saludables y funcionales para tu bienestar diario.",
    },
    {
      id: 2,
      pregunta: "¿Por qué entrar a Trinup?",
      respuesta:
        "Porque estamos comprometidos con mejorar tu calidad de vida de forma divertida, saludable y personalizada.",
    },
    {
      id: 3,
      pregunta: "¿Dónde puedo ubicarlos?",
      respuesta:
        "Puedes encontrarnos online o contactarnos directamente para agendar una cita presencial en Lima.",
    },
  ];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleIndex = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
    <div className="flex flex-col items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col lg:flex-row items-center justify-between gap-10 py-12 px-6 max-w-7xl mx-auto"
      >
        {/* Texto Intro */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-[#19ee65] mb-4">Preguntas Frecuentes</h2>
          <p className="text-black text-md">
            ¿Tienes alguna otra duda? Llámanos <br />
            al <span className="font-bold">51+ xxx xxx xxx</span>
          </p>
        </div>
  
        {/* Acordeón de FAQs */}
        <div className="lg:w-1/2 w-full flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="w-full">
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full bg-[#19ee65] text-black px-6 py-4 rounded-full font-medium text-left hover:opacity-90 transition-all"
              >
                <span>{`${faq.id}. ${faq.pregunta}`}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white border border-[#19ee65] text-black px-6 py-4 rounded-b-xl shadow-md"
                >
                  <p className="text-sm">{faq.respuesta}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    <FloatingBanner />
    </div>
    );
  }