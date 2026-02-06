"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, MotionValue, useTransform } from "framer-motion";

// Definimos la interfaz de los datos del testimonio
export interface Testimonial {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  role?: string;
  company?: string;
}

interface TestimonialCardProps {
  data: Testimonial;
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function TestimonialCard({
  data,
  index,
  total,
  progress,
  range,
  targetScale,
}: TestimonialCardProps) {
  const { name, description, imageUrl, role, company } = data;

  // Calculamos la escala dinámica basada en el progreso del scroll
  const scale = useTransform(progress, range, [1, targetScale]);

  // Color de borde dinámico: la tarjeta activa tiene borde verde
  const borderColor = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [
      "rgba(255,255,255,0.05)",
      "rgba(16,185,129,0.5)",
      "rgba(16,185,129,0.5)",
      "rgba(255,255,255,0.05)",
    ],
  );

  return (
    <div
      style={{
        top: `calc(15vh + ${index * 25}px)`, // Posición "sticky" escalonada
      }}
      className="sticky flex flex-col items-center"
    >
      <motion.div
        style={{
          scale,
          borderColor,
        }}
        className="relative w-full max-w-4xl p-8 md:p-15 rounded-3xl bg-[#121212]/90 backdrop-blur-xl border transition-colors duration-500 h-[50vh] md:h-[50vh] flex flex-col justify-between shadow-2xl origin-top"
      >
        {/* Icono de Comillas */}
        <Quote className="absolute top-6 right-8 text-white/5" size={60} />

        {/* Texto del Testimonio */}
        <div className="relative z-10 grow flex items-center">
          <p className="text-slate-200 font-light leading-relaxed text-xl md:text-3xl">
            &quot;{description}&quot;
          </p>
        </div>

        {/* Footer: Avatar + Info */}
        <div className="flex items-center gap-5 pt-8 border-t border-white/5">
          <div className="relative w-16 h-16 min-w-16 rounded-full overflow-hidden border-2 border-green-500/60">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg md:text-xl">{name}</h4>
            {role && (
              <p className="text-green-500 text-sm md:text-base font-medium uppercase tracking-wide">
                {role}
                {company && (
                  <span className="text-slate-500 normal-case">
                    {" "}
                    @ {company}
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
