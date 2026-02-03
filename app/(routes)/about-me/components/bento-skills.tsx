"use client";

import { dataSkills } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactNode } from "react";
interface Skill {
  name: string;
  icon: ReactNode;
}

// Representa cada bloque del Bento (ej: Frontend Mastery)
interface SkillCategory {
  id: number;
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export default function BentoSkills() {
  const renderCard = (item: SkillCategory, fixedHeight: boolean = false) => (
    <div className={`
      relative group overflow-hidden rounded-2xl border border-white/10
      bg-gray-900 p-5 transition-all duration-300
      hover:border-secondary/40 hover:bg-gray-900/70 shadow-xl
      flex flex-col ${fixedHeight ? 'h-full' : 'h-auto'}
    `}>
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-secondary/5 blur-xl transition-all group-hover:bg-secondary/10" />

      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div className="p-2 bg-white/5 rounded-lg border border-white/5">
          {item.icon}
        </div>
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10 mb-4 grow content-start">
        {item.skills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 transition-colors group-hover:border-white/20 group-hover:bg-white/10"
          >
            <span className="group-hover:text-secondary transition-colors">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative group">
      {/* VISTA 1: SLIDER (Visible en Mobile y Tablet, oculto en XL) */}
      <div className="block xl:hidden px-5">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 15 },
            768: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination]}
          grabCursor={true}
          className="skills-swiper pb-14!"
        >
          {dataSkills.map((item) => (
            <SwiperSlide key={item.id} className="h-auto!">
              {renderCard(item, true)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* VISTA 2: LISTA VERTICAL (Oculto en Mobile/Tablet, visible en XL) */}
      <div className="hidden xl:flex flex-col gap-4">
        {dataSkills.map((item) => (
          <div key={item.id} className="w-full">
            {renderCard(item)}
          </div>
        ))}
      </div>

      {/* Estilos para paginación y alturas iguales en slides */}
      <style jsx global>{`
        .skills-swiper .swiper-pagination-bullet-active {
          background: var(--color-secondary) !important;
        }
        .skills-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
        }
        .skills-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .skills-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
}