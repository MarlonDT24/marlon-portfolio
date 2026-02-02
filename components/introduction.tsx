"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import ContactManager from "./contact-manager";
import { ArrowRight  } from "lucide-react";

const Introduction = () => {
  return (
    <div className="z-20 w-full ">
      <div className="z-20 grid items-center h-full p-6 py-30 md:py-0 md:grid-cols-2 max-w-7xl mx-auto gap-8 lg:gap-12">
        {/* Contenedor de imagen con efecto glow */}
        <div className="relative w-60 h-60 md:w-87.5 md:h-87.5 lg:w-130.5 lg:h-130.5 mx-auto md:mx-0 group">
          {/* Borde animado con degradado que rota */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#32CD37] via-darkBg to-[#32CD37] animate-spin-slow opacity-75 blur-sm" />

          {/* Borde interior con degradado */}
          <div className="absolute inset-1 rounded-full bg-linear-to-r from-[#32CD37] via-[#1a8f1e] to-[#32CD37] p-0.75">
            <div className="w-full h-full rounded-full bg-darkBg overflow-hidden">
              <Image
                src="/Marlon_img.png"
                priority
                width={500}
                height={500}
                alt="Marlon Torres - Fullstack Developer"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Efecto glow externo */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(50,205,55,0.3)] group-hover:shadow-[0_0_80px_rgba(50,205,55,0.5)] transition-shadow duration-500 pointer-events-none" />
        </div>
        <div className="flex flex-col justify-center max-w-2xl">
          <h1 className="mb-3 text-4xl font-bold text-center md:text-left md:text-6xl lg:text-7xl">
            Soy Marlon Torres
          </h1>
          <p className="mb-4 text-md text-center text-gray-300 md:text-left md:text-xl lg:text-2xl">
            Fullstack Developer | React & Next.js Specialist | Mobile Developer
          </p>
          <h2
            className="mb-5 text-xl leading-tight text-center md:text-left
                     md:text-2xl lg:text-3xl md:mb-8"
          >
            El mejor código no es el más complejo, sino el más{" "}
            <TypeAnimation
              sequence={[
                "inteligente.",
                1000,
                "eficiente.",
                1000,
                "legible.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-green-500"
            />
          </h2>

          <p className="mx-auto mb-2 text-sm text-center font-normal md:text-left md:mx-0 md:mb-2 md:text-lg lg:text-xl">
            Desarrollo plataformas escalables, desde plataformas de gestión de
            documentación técnica hasta backoffices con variedad de negocio.
          </p>
          <p className="mx-auto mb-2 text-sm text-center font-normal md:text-left md:mx-0 md:mb-2 md:text-lg lg:text-xl">
            Analizo cada problema desde múltiples perspectivas para encontrar la
            solución más eficiente.
          </p>
          <p className="mx-auto mb-4 text-sm text-center font-normal md:text-left md:mx-0 md:mb-8 md:text-lg lg:text-xl">
            Diseño la lógica y la experiencia de usuario (UX) considerando la
            arquitectura completa del sistema.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-center md:gap-10">
            <Link
              href="/portfolio"
              className="relative px-5 py-2.5 text-md font-medium text-white transition-all duration-300 
             border-2 border-white rounded-full hover:bg-white/30 overflow-hidden group w-fit"
            >
              {/* Fondo que se desliza al hacer hover */}
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

              <span className="relative flex items-center gap-2">
                Ver Proyectos
                <ArrowRight />
              </span>
            </Link>
            <ContactManager />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
