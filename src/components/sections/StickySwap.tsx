"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Complete candidate intelligence", desc: "Every finalist includes technical results, behavioral signal, and hiring recommendation." },
  { title: "Faster shortlisting", desc: "Assessment-backed filtering helps your team focus only on high-fit profiles." },
  { title: "Higher decision confidence", desc: "Hiring managers compare candidates with objective evidence, not only CVs." },
  { title: "Alliance advantage", desc: "Tinkko companies publish through PeakU with a differentiated, high-signal channel." },
];
const cardsEs = [
  { title: "Inteligencia completa por candidato", desc: "Cada finalista incluye resultados técnicos, señal de personalidad y recomendación de contratación." },
  { title: "Shortlist más rápido", desc: "El filtrado con evaluaciones permite enfocar al equipo en perfiles de mayor ajuste." },
  { title: "Más confianza al decidir", desc: "Los líderes comparan candidatos con evidencia objetiva, no solo con hoja de vida." },
  { title: "Ventaja de la alianza", desc: "Las empresas de Tinkko publican en PeakU por un canal diferenciado y de mayor señal." },
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
            <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Resultados esperados" : "Expected outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que desbloquea tu equipo con Tinkko + PeakU" : "What your team unlocks with Tinkko + PeakU"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "No es solo más volumen de postulaciones. Es mejor filtro y claridad para tomar decisiones de contratación."
                : "This is not just more applicants. It is better filtering and clearer hiring decisions."}
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
                <div className="mt-2 text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
