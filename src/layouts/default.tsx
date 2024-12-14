import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-trinup-light dark:bg-trinup-dark">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 flex-grow pt-14 pb-8">
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
