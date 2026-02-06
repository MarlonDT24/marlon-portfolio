"use client";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CounterServices from "@/app/(routes)/services/components/counter-services";
import TimeLine from "@/app/(routes)/about-me/components/time-line";
import BentoSkills from "./components/bento-skills";

export default function AboutMePage() {
  return (
    <>
      <TransitionPage />

      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="font-bold text-green-500">
            trayectoria profesional
          </span>
        </h1>

        <CounterServices />
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-10 mt-8 md:mt-22">
          
          {/* TRAYECTORIA: Ocupa 7 de 12 columnas en pantallas grandes */}
          <div className="xl:col-span-7 order-2 xl:order-1">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-center">
                Experiencia <span className="text-secondary">Laboral</span>
            </h2>
            <TimeLine />
          </div>

          {/* COMPETENCIAS: Ocupa 5 de 12 columnas. En pantallas grandes es vertical (Sticky) */}
          <div className="xl:col-span-5 order-1 xl:order-2">
            <div className=" xl:top-24">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-center">
                    Competencias <span className="text-secondary">Técnicas</span>
                </h2>
               <BentoSkills />
            </div>
          </div>

        </div>
      </ContainerPage>
    </>
  );
};
