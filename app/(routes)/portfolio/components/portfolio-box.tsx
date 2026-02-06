"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"; 
import { Github, Globe, ArrowUpRight, Lock } from "lucide-react";
import { ReactNode } from "react";

interface TechItem {
    name: string;
    icon: ReactNode;
}

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
        category: string;
        description: string;
        techStack: TechItem[];
    }
}

export default function PortfolioBox(props: PortfolioBoxProps) {
    const { data } = props
    const { title, image, urlDemo, urlGithub, techStack, description, category } = data

    return (
        <motion.div
            layout // Importante para la animación del filtro después
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-white/10 bg-gray-900 hover:border-secondary/40 transition-all duration-300 h-full shadow-lg"
        >
            {/* --- IMAGEN Y ACCIONES --- */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Etiqueta de Categoría (Visible siempre) */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 z-20">
                    {category}
                </div>

                {/* Overlay de botones (Visible en Hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    {urlGithub === "#private" ? (
                        <div 
                            className="p-3 bg-gray-800/80 rounded-full text-gray-400 border border-white/10"
                            title="Código Privado (Enterprise NDA)"
                        >
                            <Lock size={22} />
                        </div>
                    ) : (
                        <Link
                            href={urlGithub}
                            target="_blank"
                            className="p-3 bg-slate-800 rounded-full text-white hover:bg-white hover:text-black transition-colors transform hover:scale-105 shadow-md"
                            title="Ver Repositorio"
                            // Evita que el click abra el modal (stopPropagation)
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <Github size={22} />
                        </Link>
                    )}

                    {/* LÓGICA DEL BOTÓN DEMO */}
                    {/* Si urlDemo es "#!" asumimos que no hay live link directo, ocultamos o mostramos algo distinto */}
                    {urlDemo !== "#!" && (
                        <Link
                            href={urlDemo}
                            target="_blank"
                            className="p-3 bg-emerald-600 rounded-full text-white hover:bg-emerald-400 transition-colors transform hover:scale-105 shadow-md"
                            title="Ver Demo Live"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Globe size={22} />
                        </Link>
                    )}
                </div>
            </div>

            {/* --- CONTENIDO --- */}
            <div className="p-5 flex flex-col justify-between grow">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {title}
                        </h3>
                        <ArrowUpRight className="text-slate-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100" size={20}/>
                    </div>
                    
                    <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                        {description}
                    </p>
                </div>

                {/* --- FOOTER: TECH STACK --- */}
                <div className="pt-3 border-t border-white/10 mt-auto">
                   <div className="flex items-center gap-3">
                       <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Stack:</span>
                       <div className="flex gap-2">
                            {techStack && techStack.map((tech, index) => (
                                <div 
                                    key={index} 
                                    className="text-slate-400 hover:text-emerald-400 transition-colors text-lg"
                                    title={tech.name} 
                                >
                                    {tech.icon}
                                </div>
                            ))}
                       </div>
                   </div>
                </div>
            </div>
        </motion.div>
    );
}