"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { X, Github, Globe, CheckCircle2, Lock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface TechStackItem {
  name: string;
  icon: ReactNode;
}

// Definimos la interfaz completa basada en tu data
export interface ProjectData {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
  category: string;
  description: string;
  techStack: TechStackItem[];
  imagesGallery?: string[];
  strategies?: { title: string; description: string }[];
}

interface ProjectModalProps {
  data: ProjectData;
  closeModal: () => void;
}

export default function ProjectModal({ data, closeModal }: ProjectModalProps) {
  // Evitar propagación del click al contenedor de fondo
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
      onClick={closeModal} // Cerrar al hacer click fuera
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh]"
        onClick={handleContentClick}
      >
        {/* Botón Cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* --- CONTENIDO SCROLLABLE --- */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* 1. HERO SECTION & GALLERY */}
          <div className="relative h-75 md:h-112.5 w-full bg-zinc-900">
            {data.imagesGallery ? (
              <Swiper
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="h-full w-full project-slider"
              >
                {data.imagesGallery.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`Slide ${index}`}
                        fill
                        className="object-cover"
                      />
                      {/* Gradiente inferior para legibilidad */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent opacity-90" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            )}

            {/* Título sobre la imagen (Estilo Hero) */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <span className="px-3 py-1 text-xs font-bold bg-emerald-500 text-black rounded-full mb-2 inline-block">
                {data.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {data.title}
              </h2>
            </div>
          </div>

          {/* 2. INFO & DETAILS GRID */}
          <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
            {/* COLUMNA IZQUIERDA: Descripción e Impacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                  Sobre el Proyecto
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {data.description}
                </p>
              </div>

              {/* Estrategias / Ventajas (Lo que pedías: Beneficios) */}
              {data.strategies && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Impacto y Soluciones
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.strategies.map((strat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-emerald-500 mt-1 min-w-5"
                            size={20}
                          />
                          <div>
                            <h4 className="text-white font-bold text-sm mb-1">
                              {strat.title}
                            </h4>
                            <p className="text-slate-400 text-sm">
                              {strat.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* COLUMNA DERECHA: Sidebar Técnico y Acciones */}
            <div className="flex flex-col gap-6">
              {/* Caja de Enlaces */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-slate-400 text-sm font-bold uppercase mb-4">
                  Enlaces del Proyecto
                </h4>
                <div className="flex flex-col gap-3">
                  {/* BOTÓN DEMO */}
                  {data.urlDemo !== "#!" && (
                    <Link
                      href={data.urlDemo}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all hover:scale-[1.02]"
                    >
                      <Globe size={18} /> Ver Demo Live
                    </Link>
                  )}

                  {/* BOTÓN REPO / PRIVADO */}
                  {data.urlGithub === "#private" ? (
                    <button
                      disabled
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800/50 text-gray-400 font-bold rounded-xl border border-white/5 cursor-not-allowed"
                    >
                      <Lock size={18} /> Código Privado (NDA)
                    </button>
                  ) : (
                    <Link
                      href={data.urlGithub}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all hover:scale-[1.02]"
                    >
                      <Github size={18} /> Ver Repositorio
                    </Link>
                  )}
                </div>
              </div>

              {/* Caja de Tecnologías */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-slate-400 text-sm font-bold uppercase mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-slate-300 border border-white/5 text-sm"
                    >
                      <span className="text-emerald-400">{tech.icon}</span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Estilos globales para el slider del modal (puedes poner esto en globals.css o dejarlos aquí inline si usas styled-jsx) */}
      <style jsx global>{`
        .project-slider .swiper-button-next,
        .project-slider .swiper-button-prev {
          color: #10b981 !important;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 25px;
        }
        .project-slider .swiper-button-next::after,
        .project-slider .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .project-slider .swiper-pagination-bullet-active {
          background: #10b981 !important;
        }
      `}</style>
    </div>
  );
}
