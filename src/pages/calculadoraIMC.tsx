import { motion } from "framer-motion";
import { useState } from "react";
import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";
import TablaIMC from "@/components/organisms/calculadoraIMC/tablaIMC";
import { getClasificacion, getRiesgo, getIMCIndex } from "@/lib/constants/calculadoraIMC/imcUtils";

export default function CalculadoraIMCPage() {
  const [peso, setPeso] = useState<number>(65);
  const [altura, setAltura] = useState<number>(165);

  const calcularIMC = (): number => {
    const alturaEnMetros = altura / 100;
    return parseFloat((peso / (alturaEnMetros * alturaEnMetros)).toFixed(1));
  };

  const obtenerClasificacion = (imc: number) => {
    const index = getIMCIndex(imc);
    return {
      clasificacion: getClasificacion(index),
      riesgo: getRiesgo(index)
    };
  };

  const imc = calcularIMC();
  const { clasificacion, riesgo } = obtenerClasificacion(imc);
  
  const getBorderClass = (index: number, rowType: string): string => {
    let baseBorderClass = "";
  
    if (rowType === "header") {
      baseBorderClass = "border-t-4 border-l-4 border-r-4"; // Para la fila de rangos de IMC
    } else if (rowType === "risk") {
      baseBorderClass = "border-b-4 border-l-4 border-r-4"; // Para la fila de riesgos
    } else {
      baseBorderClass = "border-l-4 border-r-4"; // Para la fila de clasificaciones
    }
  
    const highlightedIndex = getIMCIndex(imc);
  
    return index === highlightedIndex
      ? `${baseBorderClass} border-trinup-dark`
      : "";
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-6 md:py-8 min-h-screen">
        <div className="inline-block max-w-lg text-center mb-8">
          <h1 className={title()}>Calculadora de IMC</h1>
          <p className="text-trinup-dark mt-4">
            Tu IMC puede ser una medida inicial útil para identificar tu
            clasificación de peso y factores de riesgo.
          </p>
        </div>
        <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 h-full w-auto p-12 ">
          <div className="space-y-6 pr-10">
            <div>
              <label className="font-semibold block mb-2">TU ALTURA</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min="60"
                  max="225"
                  value={altura}
                  onChange={(e) => setAltura(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green"
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  min="60"
                  max="225"
                  value={altura}
                  onChange={(e) => setAltura(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                cm
              </div>
            </div>
            <div>
              <label className="font-semibold block mb-2">TU PESO</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min="6"
                  max="225"
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green "
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  min="6"
                  max="225"
                  value={peso}
                  onChange={(e) => setPeso(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                kg
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-lg font-semibold text-trinup-dark">
              TU IMC ES
            </h2>
            <motion.div
              key={imc}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold mt-2 text-trinup-green"
            >
              {imc}
            </motion.div>
            <p className="text-sm mt-4">
              Clasificación:{" "}
              <span className="text-black font-semibold">{clasificacion}</span>
            </p>
            <p className="text-sm mt-1">
              Riesgo de enfermedad relacionada:
              <br />
              <span className="font-bold text-black">{riesgo}</span>
            </p>
          </div>
        </div>

        <TablaIMC
          imc={imc}
          riesgo={riesgo}
          getIMCIndex={getIMCIndex}
          getBorderClass={getBorderClass}
        />
      </section>
    </DefaultLayout>
  );
}
