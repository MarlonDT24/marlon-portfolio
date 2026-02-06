"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/app/(routes)/portfolio/components/portfolio-box";
import ProjectModal, { ProjectData } from "@/app/(routes)/portfolio/components/project-modal";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Pestañas de filtro.
  const filters = [
    { tag: "All", label: "Todos" },
    { tag: "Frontend", label: "Frontend" },
    { tag: "Fullstack", label: "Fullstack" },
    { tag: "Mobile", label: "Mobile" }, 
  ];

  const filteredProjects =
    activeFilter === "All"
      ? dataPortfolio
      : dataPortfolio.filter((item) => item.category === activeFilter);

  return (
    <ContainerPage>
      <TransitionPage />

      <div className="flex flex-col justify-center h-full md:pb-10">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Mis últimos{" "}
          <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-3 md:gap-6 mt-6 mb-5 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter.tag}
              onClick={() => setActiveFilter(filter.tag)}
              className={`
                        relative px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
                        ${
                          activeFilter === filter.tag
                            ? "text-green-500 bg-emerald-500/10 border border-green-500/70 shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                            : "text-slate-400 border border-white/20 hover:border-white/30 hover:text-white"
                        }
                    `}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* --- GRID DE PROYECTOS --- */}
        <motion.div
          layout
          className="relative z-10 grid max-w-6xl w-full gap-6 mx-auto mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((data) => (
              <motion.div
                 key={data.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 // AÑADIR EVENTO DE CLICK
                 onClick={() => setSelectedProject(data)}
                 className="cursor-pointer"
               >
                  <PortfolioBox data={data} />
               </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje Empty State (por si una categoría no tiene proyectos aun) */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 mt-20"
          >
            <p>No hay proyectos en esta categoría todavía.</p>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {selectedProject && (
            <ProjectModal 
                data={selectedProject} 
                closeModal={() => setSelectedProject(null)} 
            />
        )}
      </AnimatePresence>
    </ContainerPage>
  );
}
