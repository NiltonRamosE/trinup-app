import { motion } from "framer-motion";
import { useState } from "react";
import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";
import BMITable from "@/components/organisms/bmiCalculator/bmiTable";
import { calculateBMI, getClassification, getRisk, getBMIClassificationPosition } from "@/lib/utils/bmi";

export default function BMICalculatorPage() {
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(165);

  const getBMIReport = (bmi: number) => {
    const index = getBMIClassificationPosition(bmi);
    return {
      classification: getClassification(index),
      risk: getRisk(index)
    };
  };

  const bmi = calculateBMI(weight, height, "cm", "kg");
  const { classification, risk } = getBMIReport(bmi);
  
  const getBorderClass = (index: number, rowType: string): string => {
    let baseBorderClass = "";
  
    if (rowType === "header") {
      baseBorderClass = "border-t-4 border-l-4 border-r-4"; // Para la fila de rangos de IMC
    } else if (rowType === "risk") {
      baseBorderClass = "border-b-4 border-l-4 border-r-4"; // Para la fila de riesgos
    } else {
      baseBorderClass = "border-l-4 border-r-4"; // Para la fila de clasificaciones
    }
  
    const highlightedIndex = getBMIClassificationPosition(bmi);
  
    return index === highlightedIndex
      ? `${baseBorderClass} border-trinup-dark dark:border-trinup-light`
      : "";
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-6 md:py-8 min-h-screen">
        <div className="inline-block max-w-lg text-center mb-8">
          <h1 className={title()}>Calculadora de IMC</h1>
          <p className="text-trinup-dark dark:text-trinup-light mt-4">
            Tu IMC puede ser una medida inicial útil para identificar tu
            clasificación de peso y factores de riesgo.
          </p>
        </div>
        <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 h-full w-auto p-12 ">
          <div className="space-y-6 pr-10">
            <div>
              <label className="font-semibold block mb-2 text-trinup-dark">TU ALTURA</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min="60"
                  max="225"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green"
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  min="60"
                  max="225"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                <span className="text-trinup-dark">cm</span>
              </div>
            </div>
            <div>
              <label className="font-semibold block mb-2 text-trinup-dark">TU PESO</label>
              <div className="flex items-center gap-4">
                <motion.input
                  type="range"
                  min="6"
                  max="225"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-[150px] accent-trinup-green "
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  type="number"
                  min="6"
                  max="225"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                />
                <span className="text-trinup-dark" >kg</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-lg font-semibold text-trinup-dark">
              TU IMC ES
            </h2>
            <motion.div
              key={bmi}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold mt-2 text-trinup-green"
            >
              {bmi}
            </motion.div>
            <p className="text-sm mt-4 text-trinup-dark">
              Clasificación:{" "}
              <span className="text-black font-semibold">{classification}</span>
            </p>
            <p className="text-sm mt-1 text-trinup-dark">
              Riesgo de enfermedad relacionada:
              <br />
              <span className="font-bold text-black">{risk}</span>
            </p>
          </div>
        </div>

        <BMITable
          bmi={bmi}
          risk={risk}
          getBMIClassificationPosition={getBMIClassificationPosition}
          getBorderClass={getBorderClass}
        />
      </section>
    </DefaultLayout>
  );
}
