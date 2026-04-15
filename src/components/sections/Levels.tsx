"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Share your details",
    earns: "Send your name and WhatsApp",
    does: "We create the Startco group for your startup",
  },
  {
    level: "Step 2",
    title: "Meet talent fast",
    earns: "Access profiles ready to interview",
    does: "Review candidates sourced for your role",
  },
  {
    level: "Step 3",
    title: "Run free tests",
    earns: "Get assessments without cost",
    does: "Use objective results to shortlist better",
  },
  {
    level: "Step 4",
    title: "Decide with clarity",
    earns: "Compare candidates by fit and skill",
    does: "Choose the best match for your startup",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Comparte tus datos",
    earns: "Danos tu nombre y WhatsApp",
    does: "Creamos el grupo de Startco para tu startup",
  },
  {
    level: "Paso 2",
    title: "Conoce talento rápido",
    earns: "Accede a perfiles listos para entrevistar",
    does: "Revisa candidatos alineados al rol",
  },
  {
    level: "Paso 3",
    title: "Haz pruebas gratis",
    earns: "Obtén evaluaciones sin costo",
    does: "Usa resultados objetivos para filtrar mejor",
  },
  {
    level: "Paso 4",
    title: "Decide con claridad",
    earns: "Compara candidatos por ajuste y habilidades",
    does: "Elige el mejor match para tu startup",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="proceso" className="bg-white py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <div className="tabular text-sm font-semibold text-black">{isEs ? "Cómo funciona" : "How it works"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Cómo participan las startups en Startco" : "How startups join Startco"}
            </h2>
            <p className="mt-4 text-[#6B7280]">
              {isEs
                ? "Danos tu nombre y WhatsApp, abrimos el grupo de Startco y te apoyamos en el cargo y los filtros para atraer talento."
                : "Send your name and WhatsApp, we open the Startco group and support you with role and filter setup to attract talent."}
            </p>
          </div>

          <div className="grid gap-5">
            {levelItems.map((l) => (
              <div
                key={l.title}
                data-level
                className="group rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="tabular text-xs font-semibold text-[#6B7280]">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-[#14B37D] opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.title}</div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Que incluye" : "Included"} value={l.earns} />
                  <Stat label={isEs ? "Resultado" : "Outcome"} value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
      <div className="tabular text-xs font-semibold text-[#6B7280]">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
