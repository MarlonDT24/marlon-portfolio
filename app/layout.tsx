import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import CoverParticles from "@/components/cover-particles";

//Tipografía Urbanist en el portfolio
const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marlon Portfolio | Fullstack Developer",
  description: "Desarrollador Fullstack especializado en Next.js, React y soluciones web escalables. Transformando ideas en código eficiente.",
  metadataBase: new URL("https://marlondev.com"),
  authors: [{ name: "Marlon Torres", url: "https://github.com/MarlonDT24" }],
  openGraph: {
    title: "Marlon Torres | Fullstack Developer",
    description: "Transformando ideas en código eficiente. Mira mis proyectos, trayectoria y testimonios.",
    url: "https://marlondev.com", // Tu dominio real
    siteName: "MarlonDev",
    images: [
      {
        url: "/opengraph-image.png", // Crea una imagen de 1200x630px y ponla en public
        width: 1200,
        height: 630,
        alt: "Marlon Torres Portfolio Preview",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-gradient-cover`}>
        <CoverParticles />
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
