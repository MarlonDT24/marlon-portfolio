"use client";

import Link from "next/link";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import SliderCompanies from "./components/slider-companies";
import TestimonialsSection from "./components/testimonials-section"; // <-- Importamos la nueva sección

export default function TestimonialsPage() {
    return (
        <ContainerPage>
            <TransitionPage />
            
            {/* Fondo decorativo */}
            <div className="flex flex-col justify-center min-h-screen">
                
                {/* --- HEADER PRINCIPAL --- */}
                <div className="text-center mb-5 md:mb-3">
                    <h1 className="text-4xl leading-tight text-center md:text-6xl md:mb-4 font-bold">
                        Confianza que {" "}
                        <span className="text-green-500">construye futuro</span>
                    </h1>
                </div>

                <SliderCompanies />

                <TestimonialsSection />

                {/* --- SECCIÓN 3: CTA FINAL (Call to Action) --- */}
                {/* (Este bloque debe ir FUERA del contenedor de scroll de los testimonios) */}
                <div className="relative my-30">
                    <div className="absolute inset-0 bg-green-500/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />
                    
                    <div className="relative p-10 md:p-16 rounded-[3rem] bg-[#121212] border border-green-500/20 text-center overflow-hidden group">
                        
                        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-1000" />
                        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-1000" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                ¿Tu proyecto es el siguiente?
                            </h3>
                            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
                                Convirtamos tu visión en una realidad digital de alto impacto.
                            </p>
                            
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-green-600 text-white font-bold text-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-105"
                            >
                                Contacta Conmigo
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </ContainerPage>
    );
}