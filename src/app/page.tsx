import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Tinkko x PeakU | Hire Better, Move Faster",
  description:
    "Alianza Tinkko + PeakU para contratar talento especializado en LatAm con evaluaciones y reportes por candidato.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tinkko x PeakU | Specialized Hiring Alliance",
    description:
      "Publica vacantes con Tinkko y accede a talento especializado con respaldo de evaluación PeakU.",
    url: "/",
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

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <StickySwap />
      <Rewards />
      <Join />
    </main>
  );
}
