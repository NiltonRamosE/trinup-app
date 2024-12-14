"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Button, Card, Link, Checkbox } from "@nextui-org/react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white dark:bg-trinup-dark dark:border-2 dark:border-trinup-light shadow-xl py-6 px-12">
            <motion.h1
              className="text-3xl font-bold text-center mb-10 text-trinup-dark dark:text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              Bienvenido a TrinUp
            </motion.h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 w-full max-w-lg mx-auto"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Input
                  label="Email"
                  placeholder="tu@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-2 border-trinup-green rounded-xl font-extrabold"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border-2 border-trinup-green rounded-xl font-extrabold"
                  endContent={
                    <button type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between gap-4"
              >
                <Checkbox
                  isSelected={rememberMe}
                  onValueChange={setRememberMe}
                  size="sm"
                  className="mr-2"
                  color="success"
                >
                  Recordarme
                </Checkbox>
                <Link href="#" size="sm" className="text-sm text-trinup-green">
                  ¿Olvidaste tu contraseña?
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  color="success"
                  className="w-full py-3 bg-trinup-green"
                  endContent={<LogIn size={16} />}
                >
                  Iniciar Sesión
                </Button>
              </motion.div>
              {/* Separador */}
              <div className="flex items-center justify-center my-4">
                <div className="border-t border-gray-700 w-full"></div>
                <span className="px-4 text-gray-500 text-sm">o</span>
                <div className="border-t border-gray-700 w-full"></div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between gap-4"
              >
                ¿No tienes cuenta?
                <Link href="/register" size="sm" className="text-sm text-trinup-green">
                  ¡Registrate aquí!
                </Link>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
