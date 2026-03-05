import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Vittiva x PeakU | Hire Better, Move Faster",
  description:
    "Alianza Vittiva + PeakU para contratar talento especializado en LatAm con evaluaciones y reportes por candidato.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vittiva x PeakU | Specialized Hiring Alliance",
    description:
      "Publica vacantes con Vittiva y accede a talento especializado con respaldo de evaluación PeakU.",
    url: "/",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Vittiva x PeakU hiring dashboard",
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
