"use client";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import DefaultLayout from "@/components/templates/default";
import { LoginForm } from "@/components/molecules/loginForm";

export default function LoginPage() {
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
            <LoginForm />
          </Card>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
