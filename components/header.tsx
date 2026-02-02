import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";
import CvSelector from "./cv-selector";

export default function Header() {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10 px-20"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Marlon
              <span className="text-green-500">dev</span>
            </h1>
          </Link>
          <div className="hidden md:block">
             <CvSelector />
          </div>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-green-500"
              >
                {logo}
              </Link>
            ))}
            {/* 2. CV EN MOBILE (Icono integrado) - Visible solo en móvil (md:hidden) */}
            <div className="md:hidden flex items-center">
                <CvSelector isMobile={true} />
            </div>
          </div>
        </div>
      </header>
    </MotionTransition>
  );

}
