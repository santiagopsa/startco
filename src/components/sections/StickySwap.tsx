"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Free evaluation flow", desc: "Startups get assessments and candidate feedback without extra cost." },
  { title: "Faster candidate match", desc: "Shortlist profiles that already fit your early-stage needs." },
  { title: "Clear decision signals", desc: "Use objective test results and recommendations to pick faster." },
  { title: "WhatsApp coordination", desc: "We create the group and keep communication simple as you hire." },
];
const cardsEs = [
  { title: "Flujo de evaluaciones gratis", desc: "Las startups reciben pruebas y retroalimentación sin costo adicional." },
  { title: "Matching más rápido", desc: "Preselecciona perfiles que ya encajan con tus necesidades tempranas." },
  { title: "Señales claras para decidir", desc: "Usa resultados objetivos para elegir más rápido." },
  { title: "Coordinación por WhatsApp", desc: "Creamos el grupo y mantenemos la comunicación simple mientras contratas." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-white py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="tabular text-sm font-semibold text-black">{isEs ? "Resultados esperados" : "Expected outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que ofrece Startco para tu startup" : "What Startco delivers for your startup"}
            </h2>
            <p className="mt-4 max-w-lg text-[#6B7280]">
              {isEs
                ? "No es solo más candidatos. Es acceso a talento, pruebas gratis y acompañamiento para filtrar mejor." 
                : "It is not just more candidates. It is access to talent, free tests, and support to filter better."}
            </p>
          </div>

          <div className="grid gap-5">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-soft"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-[#6B7280]">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
