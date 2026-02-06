"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBg text-white px-4 text-center">
      
      {/* Círculos decorativos de fondo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-linear-to-b from-green-400 to-green-900">
          404
        </h1>
        <h2 className="text-3xl font-bold mt-4 mb-6">Ups! Te has perdido en el código</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          La página que buscas no existe o ha sido movida a otro repositorio del universo.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105"
        >
          <Home size={20} />
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  );
}