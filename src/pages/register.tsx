"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import DefaultLayout from "@/layouts/default";
import DatosPersonales from "@/pages/formsRegister/client/datosPersonales";
import DatosEmpresa from "@/pages/formsRegister/org/datosEmpresa";
import DatosSalud from "@/pages/formsRegister/client/datosSalud";
import DatosEmpresaAdicional from "@/pages/formsRegister/org/datosEmpresaAdicional";

import { Cliente } from "@/models/cliente";
import { Empresa } from "@/models/empresa";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<"cliente" | "empresa">("cliente");
  const [formStep, setFormStep] = useState(1);

  const [clienteData, setClienteData] = useState<Cliente>({
    nombre: "",
    email: "",
    peso: "",
    talla: "",
  });

  const [empresaData, setEmpresaData] = useState<Empresa>({
    ruc: "",
    razonSocial: "",
    pago: "no",
    sucursales: "",
  });

  const handleContinue = () => {
    setFormStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setFormStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalizar = () => {
    console.log("Datos Cliente:", clienteData);
    console.log("Datos Empresa:", empresaData);

    setTimeout(() => {
      setFormStep(1);
    }, 1000);
  };

  const renderFormContent = () => {
    if (formStep === 1) {
      if (activeTab === "cliente") {
        return (
          <DatosPersonales
            data={clienteData}
            onChange={(newData) => setClienteData({ ...clienteData, ...newData })}
          />
        );
      } else if (activeTab === "empresa") {
        return (
          <DatosEmpresa
            data={empresaData}
            onChange={(newData) => setEmpresaData({ ...empresaData, ...newData })}
          />
        );
      }
    } else if (formStep === 2) {
      if (activeTab === "cliente") {
        return (
          <DatosSalud
            data={clienteData}
            onChange={(newData) => setClienteData({ ...clienteData, ...newData })}
          />
        );
      } else if (activeTab === "empresa") {
        return (
          <DatosEmpresaAdicional
            data={empresaData}
            onChange={(newData) => setEmpresaData({ ...empresaData, ...newData })}
          />
        );
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 shadow-xl py-6 px-12 rounded-lg"
            layout
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <motion.h1
              className="text-3xl font-bold text-center mb-10 text-trinup-dark dark:text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Registrarse como:
            </motion.h1>

            {formStep === 1 && (
              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={() => setActiveTab("cliente")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 border-2 ${
                    activeTab === "cliente"
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  } rounded-l-lg`}
                >
                  Cliente
                </button>
                <button
                  onClick={() => setActiveTab("empresa")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 border-2 ${
                    activeTab === "empresa"
                      ? "bg-yellow-400 text-black border-yellow-400"
                      : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  } rounded-r-lg`}
                >
                  Empresa
                </button>
              </div>
            )}

            <form className="space-y-8 w-full max-w-lg mx-auto">
              {renderFormContent()}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`flex ${formStep === 1 ? "justify-center" : "justify-between"} w-full`}
              >
                {formStep > 1 && (
                  <Button
                    onClick={handleBack}
                    color="secondary"
                    className="w-1/2 mr-2 py-3"
                    startContent={<ArrowLeft size={16} />}
                  >
                    Volver
                  </Button>
                )}
                {formStep === 1 ? (
                  <Button
                    onClick={handleContinue}
                    color="primary"
                    className="py-3"
                    endContent={<ArrowRight size={16} />}
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={handleFinalizar}
                    color="primary"
                    className="w-1/2 ml-2 py-3"
                    endContent={<ArrowRight size={16} />}
                  >
                    Finalizar
                  </Button>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center mt-4"
              >
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:border-gray-400 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  ⬅ Iniciar Sesión
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
