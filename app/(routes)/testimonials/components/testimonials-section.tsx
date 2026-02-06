"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { dataTestimonials } from "@/data";
import TestimonialCard, { Testimonial } from "./testimonial-card";

export default function TestimonialsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Vinculamos el scroll al contenedor
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const totalCards = dataTestimonials.length;

    return (
        <div ref={containerRef} className="relative mt-18" style={{ height: `${totalCards * 55}vh` }}>
            {/* Título de la sección que se queda fijo un momento */}
            <div className="sticky top-20 text-center mb-6 md:mb-10">
                <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Feedback de <span className="text-green-500">equipos y líderes</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Testimonios reales de colaboración y éxito.
                </p>
            </div>

            {/* Contenedor de las cartas */}
            <div className="w-full flex flex-col items-center justify-start gap-y-[5vh] px-4">
                {dataTestimonials.map((testimonial: Testimonial, i) => {
                    // Cálculos para la animación de cada carta
                    const targetScale = 1 - ((totalCards - 1 - i) * 0.05);
                    const rangeStart = i * (1 / totalCards);
                    const rangeEnd = 1; // (i + 1) * (1 / totalCards);

                    return (
                        <TestimonialCard 
                            key={testimonial.id} 
                            data={testimonial}
                            index={i}
                            total={totalCards}
                            progress={scrollYProgress}
                            range={[rangeStart, rangeEnd]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </div>
    );
}