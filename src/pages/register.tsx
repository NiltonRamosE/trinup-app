"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import DefaultLayout from "@/components/templates/default";
import { CustomerInput } from "@/components/molecules/customer/customerInputsPartOne";
import { CompanyInput } from "@/components/molecules/company/companyInputsPartOne";
import { CompanyInputAditional } from "@/components/molecules/company/companyInputsPartTwo";
import { CustomerInputAditional } from "@/components/molecules/customer/customerInputsPartTwo";

import { Customer } from "@/lib/types/models/customer";
import { Company } from "@/lib/types/models/company";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState<"customer" | "company">("customer");
  const [formStep, setFormStep] = useState(1);

  const [customerData, setCustomerData] = useState<Customer>({
    nombre: "",
    email: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    password: "",
    passwordConfirm: "",
    peso: "",
    talla: "",
  });

  const [companyData, setCompanyData] = useState<Company>({
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
    console.log("Datos Cliente:", customerData);
    console.log("Datos Empresa:", companyData);

    setTimeout(() => {
      setFormStep(1);
    }, 1000);
  };

  const renderFormContent = () => {
    if (formStep === 1) {
      if (activeTab === "customer") {
        return (
          <CustomerInput
            data={customerData}
            onChangeCustomer={(newData) =>
              setCustomerData({ ...customerData, ...newData })
            }
          />
        );
      } else if (activeTab === "company") {
        return (
          <CompanyInput
            data={companyData}
            onChangeOrg={(newData) =>
              setCompanyData({ ...companyData, ...newData })
            }
          />
        );
      }
    } else if (formStep === 2) {
      if (activeTab === "customer") {
        return (
          <CustomerInputAditional
            data={customerData}
            onChangeCustomer={(newData) =>
              setCustomerData({ ...customerData, ...newData })
            }
          />
        );
      } else if (activeTab === "company") {
        return (
          <CompanyInputAditional
            data={companyData}
            onChangeOrg={(newData) =>
              setCompanyData({ ...companyData, ...newData })
            }
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
            className="bg-white dark:bg-trinup-dark dark:border-2 dark:border-trinup-light shadow-xl py-6 px-12 rounded-lg"
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
                  onClick={() => setActiveTab("customer")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 border-2 ${
                    activeTab === "customer"
                      ? "bg-trinup-green text-white border-trinup-green font-extrabold"
                      : "bg-transparent text-gray-700 dark:text-gray-300 border-trinup-green hover:bg-gray-100 dark:hover:bg-gray-800 font-extrabold"
                  } rounded-l-lg`}
                >
                  Cliente
                </button>
                <button
                  onClick={() => setActiveTab("company")}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-300 border-2 ${
                    activeTab === "company"
                      ? "bg-trinup-green text-white border-trinup-green font-extrabold"
                      : "bg-transparent text-gray-700 dark:text-gray-300 border-trinup-green hover:bg-gray-100 dark:hover:bg-gray-800 font-extrabold"
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
                    color="success"
                    className="w-1/2 mr-2 py-3 bg-trinup-green"
                    startContent={<ArrowLeft size={16} />}
                  >
                    Volver
                  </Button>
                )}
                {formStep === 1 ? (
                  <Button
                    onClick={handleContinue}
                    color="success"
                    className="py-3 bg-trinup-green"
                    endContent={<ArrowRight size={16} />}
                  >
                    Continuar
                  </Button>
                ) : (
                  <Button
                    onClick={handleFinalizar}
                    color="success"
                    className="w-1/2 ml-2 py-3 bg-trinup-green"
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
                  ⬅ Regresar al Inicio de Sesión
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
