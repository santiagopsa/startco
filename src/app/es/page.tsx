import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Tinkko x PeakU | Contrata mejor y más rápido",
  description:
    "Alianza Tinkko + PeakU para contratar talento especializado en LatAm con evaluaciones y reportes por candidato.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "Tinkko x PeakU | Alianza para contratación especializada",
    description:
      "Publica vacantes con Tinkko y accede a talento especializado con respaldo de evaluación PeakU.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Tinkko x PeakU hiring dashboard",
      },
    ],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <StickySwap locale="es" />
      <Rewards locale="es" />
      <Join locale="es" />
    </main>
  );
}
