import { motion } from "framer-motion";
import { useState } from "react";
import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";
import { calcularIMC, calcularIngestaAgua, calcularVasos } from "@/lib/utils/ingestaAgua/calculoAgua";

export default function CalculadoraIAPage() {
  const [peso, setPeso] = useState<number>(65);
  const [altura, setAltura] = useState<number>(165);
  const [pesoUnidad, setPesoUnidad] = useState<string>("kg");
  const [alturaUnidad, setAlturaUnidad] = useState<string>("cm");
  const [clima, setClima] = useState<number>(0);

  const imc = calcularIMC(peso, altura, alturaUnidad, pesoUnidad);
  const ingestaAgua = calcularIngestaAgua(peso, imc, clima, pesoUnidad);
  const cantidadVasos = calcularVasos(ingestaAgua);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-6 md:py-8 min-h-screen">
        <div className="inline-block max-w-lg text-center mb-8">
          <h1 className={title()}>Calculadora de Ingesta de Agua</h1>
          <p className="text-trinup-dark dark:text-trinup-light mt-4">
            Descubre cuánta agua deberías beber diariamente según tu peso, IMC y condiciones climáticas.
          </p>
        </div>
        <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 h-full w-auto p-12">
          <div className="space-y-6 pr-10">
            {/* Altura */}
            <div>
              <label className="font-semibold block mb-2 text-trinup-dark">TU ALTURA</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min={alturaUnidad === "cm" ? "60" : "2"}
                  max={alturaUnidad === "cm" ? "225" : "7"}
                  value={altura}
                  onChange={(e) => setAltura(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green"
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  value={altura}
                  onChange={(e) => setAltura(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                <select
                  value={alturaUnidad}
                  onChange={(e) => setAlturaUnidad(e.target.value)}
                  className="border-2 p-2 rounded-md"
                >
                  <option value="cm">cm</option>
                  <option value="ft">ft/in</option>
                </select>
              </div>
            </div>

            {/* Peso */}
            <div>
              <label className="font-semibold block mb-2 text-trinup-dark">TU PESO</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min={pesoUnidad === "kg" ? "6" : "15"}
                  max={pesoUnidad === "kg" ? "225" : "500"}
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green"
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                <select
                  value={pesoUnidad}
                  onChange={(e) => setPesoUnidad(e.target.value)}
                  className="border-2 p-2 rounded-md"
                >
                  <option value="kg">kg</option>
                  <option value="lbs">lbs</option>
                </select>
              </div>
            </div>

            {/* Clima */}
            <div>
              <label className="font-semibold block mb-2 text-trinup-dark">CONDICIÓN CLIMÁTICA</label>
              <select
                value={clima}
                onChange={(e) => setClima(Number(e.target.value))}
                className="border-2 p-2 rounded-md"
              >
                <option value="0">Templado</option>
                <option value="0.5">Caluroso y húmedo</option>
              </select>
            </div>
          </div>

          {/* Resultado */}
          <div className="space-y-4 text-center">
            <h2 className="text-lg font-semibold text-trinup-dark">INGESTA DIARIA RECOMENDADA</h2>
            <motion.div
              key={ingestaAgua}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold mt-2 text-trinup-green"
            >
              {ingestaAgua} L
            </motion.div>
            <p className="text-sm mt-4 text-trinup-dark">
              Equivalente a <span className="text-black font-semibold">{cantidadVasos} vasos</span>
            </p>

            {/* Representación con dibujitos de vasos */}
            <div className="flex flex-wrap justify-center">
              {Array.from({ length: cantidadVasos }, (_, i) => (
                <span key={i} className="text-3xl mx-1">🥛</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}