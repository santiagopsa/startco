import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Startco Medellín | Encuentra talento sin costo",
  description:
    "Startco es un evento de startups en Medellín para encontrar talento y hacer pruebas sin costo con solo tu nombre y WhatsApp.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "Startco Medellín | Conecta startups con talento",
    description:
      "Participa en Startco Medellín: recibe talento, pruebas gratuitas y apoyo para definir cargos y filtros.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Startco Medellín landing",
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
