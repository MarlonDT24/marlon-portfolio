"use client";

import { dataCompanies } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SliderCompanies() {
    return (
        <div className="w-full max-w-6xl mx-auto md:mb-20 px-4">
             <p className="text-center text-slate-500 text-xs md:text-base mb-10 uppercase tracking-widest font-medium">
                Empresas que confían en MarlonDev
            </p>
            
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 0, // Sin pausa
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // Se para si el usuario quiere ver el logo
                }}
                speed={3000} // Velocidad lenta y constante
                modules={[Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 40 },
                    1024: { slidesPerView: 5, spaceBetween: 50 },
                }}
                className="swiper-companies w-full cursor-grab"
            >
                {dataCompanies.map((company) => (
                    <SwiperSlide key={company.id} className="flex items-center justify-center">
                        <div className="flex items-center gap-3 group">
                            {/* Logo: Gris por defecto, Verde en hover */}
                            <div className="text-slate-500 group-hover:text-emerald-500 transition-colors duration-300">
                                {company.logo}
                            </div>
                            {/* Nombre de la empresa */}
                            <span className="text-lg font-bold text-slate-600 group-hover:text-white transition-colors duration-300">
                                {company.name}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Ajuste para que el slider sea continuo (linear) */}
            <style jsx global>{`
                .swiper-companies .swiper-wrapper {
                    transition-timing-function: linear;
                }
            `}</style>
        </div>
    );
}