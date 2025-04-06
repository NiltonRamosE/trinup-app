"use client";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";
import DefaultLayout from "@/components/templates/default";
import { LoginForm } from "@/components/molecules/login/loginForm";
import { Helmet } from "react-helmet-async";
import { loginPage } from "@/lib/constants/seoPages"

export default function LoginPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{loginPage.title}</title>
        <meta name="title" content={loginPage.title} />
        <meta name="description" content={loginPage.description} />
        <meta name="keywords" content={loginPage.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={loginPage.url} />
        <meta property="og:title" content={loginPage.title} />
        <meta property="og:description" content={loginPage.description} />
        <meta property="og:image" content={loginPage.image} />

        {/* Twitter */}
        <meta name="twitter:url" content={loginPage.url} />
        <meta name="twitter:title" content={loginPage.title} />
        <meta name="twitter:description" content={loginPage.description} />
        <meta name="twitter:image" content={loginPage.image} />
      </Helmet>
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
    </>
  );
}
