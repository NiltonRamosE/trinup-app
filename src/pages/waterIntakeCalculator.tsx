import { motion } from "framer-motion";
import { useState } from "react";
import DefaultLayout from "@/components/templates/default";
import { title } from "@/components/primitives";
import { calculateWaterIntake, calculateGlassesOfWater } from "@/lib/utils/calculationWater";
import { calculateBMI } from "@/lib/utils/bmi";
import { Helmet } from "react-helmet-async";
import { waterIntakeCalculatorPage } from "@/lib/constants/seoPages"

export default function WaterIntakeCalculatorPage() {
  const [weight, setWeight] = useState<number>(65);
  const [height, setHeight] = useState<number>(165);
  const [weightUnit, setWeightUnit] = useState<string>("kg");
  const [heightUnit, setHeightUnit] = useState<string>("cm");
  const [weather, setWeather] = useState<number>(0);

  const bmi = calculateBMI(weight, height, heightUnit, weightUnit);
  const waterIntake = calculateWaterIntake(weight, bmi, weather, weightUnit);
  const quantityGlasses  = calculateGlassesOfWater(waterIntake);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{waterIntakeCalculatorPage.title}</title>
        <meta name="title" content={waterIntakeCalculatorPage.title} />
        <meta name="description" content={waterIntakeCalculatorPage.description} />
        <meta name="keywords" content={waterIntakeCalculatorPage.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={waterIntakeCalculatorPage.url} />
        <meta property="og:title" content={waterIntakeCalculatorPage.title} />
        <meta property="og:description" content={waterIntakeCalculatorPage.description} />
        <meta property="og:image" content={waterIntakeCalculatorPage.image} />

        {/* Twitter */}
        <meta name="twitter:url" content={waterIntakeCalculatorPage.url} />
        <meta name="twitter:title" content={waterIntakeCalculatorPage.title} />
        <meta name="twitter:description" content={waterIntakeCalculatorPage.description} />
        <meta name="twitter:image" content={waterIntakeCalculatorPage.image} />

        <link rel="canonical" href={waterIntakeCalculatorPage.url}/>
      </Helmet>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-8 py-6 md:py-8 min-h-screen">
          <div className="inline-block max-w-lg text-center mb-8">
            <h1 className={title()}>Calculadora de Ingesta de Agua</h1>
            <p className="text-trinup-dark dark:text-trinup-light mt-4">
              Descubre cuánta agua deberías beber diariamente según tu IMC y condiciones climáticas.
            </p>
          </div>
          <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10 h-full w-auto p-12">
            <div className="space-y-6 pr-10">
              <div>
                <label className="font-semibold block mb-2 text-trinup-dark">TU ALTURA</label>
                <div className="flex items-center gap-4">
                  <motion.input
                    type="range"
                    min={heightUnit === "cm" ? "60" : "2"}
                    max={heightUnit === "cm" ? "225" : "7"}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-[150px] accent-trinup-green"
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                  />
                  <select
                    value={heightUnit}
                    onChange={(e) => setHeightUnit(e.target.value)}
                    className="border-2 p-2 rounded-md"
                  >
                    <option value="cm">cm</option>
                    <option value="ft">ft/in</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-2 text-trinup-dark">TU PESO</label>
                <div className="flex items-center gap-4">
                  <motion.input
                    type="range"
                    min={weightUnit === "kg" ? "6" : "15"}
                    max={weightUnit === "kg" ? "225" : "500"}
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-[150px] accent-trinup-green"
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="border-3 p-2 text-center w-20 text-lg font-semibold rounded-full border-trinup-green"
                  />
                  <select
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                    className="border-2 p-2 rounded-md"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-2 text-trinup-dark">CONDICIÓN CLIMÁTICA</label>
                <select
                  value={weather}
                  onChange={(e) => setWeather(Number(e.target.value))}
                  className="border-2 p-2 rounded-md"
                >
                  <option value="0">Templado</option>
                  <option value="0.5">Caluroso y húmedo</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-lg font-semibold text-trinup-dark">INGESTA DIARIA RECOMENDADA</h2>
              <motion.div
                key={waterIntake}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-7xl font-extrabold mt-2 text-trinup-green"
              >
                {waterIntake} L
              </motion.div>
              <p className="text-sm mt-4 text-trinup-dark">
                Equivalente a <span className="text-black font-semibold">{quantityGlasses} vasos</span>
              </p>

              <div className="flex flex-wrap justify-center">
                {Array.from({ length: quantityGlasses }, (_, i) => (
                  <span key={i} className="text-3xl mx-1">🥛</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}