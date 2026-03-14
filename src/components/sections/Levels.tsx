"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Launch your opening",
    earns: "Publish through Tinkko in minutes",
    does: "Activate the PeakU hiring lane for your team",
  },
  {
    level: "Step 2",
    title: "Attract top applicants",
    earns: "Receive stronger candidate flow",
    does: "Source specialized LatAm profiles for key roles",
  },
  {
    level: "Step 3",
    title: "Filter with real signal",
    earns: "Run technical and behavioral assessments",
    does: "Prioritize candidates with objective evidence",
  },
  {
    level: "Step 4",
    title: "Decide with confidence",
    earns: "Get a report for every finalist",
    does: "Compare fit, skills, and recommendation in one place",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Publica tu vacante",
    earns: "Activa tu publicación desde Tinkko",
    does: "Abre la ruta de contratación con PeakU para tu empresa",
  },
  {
    level: "Paso 2",
    title: "Recibe candidatos top",
    earns: "Obtén más flujo de postulaciones",
    does: "Accede a talento especializado en LatAm para roles clave",
  },
  {
    level: "Paso 3",
    title: "Filtra con señal real",
    earns: "Aplica pruebas técnicas y de personalidad",
    does: "Prioriza perfiles con evidencia objetiva",
  },
  {
    level: "Paso 4",
    title: "Decide con confianza",
    earns: "Recibe reporte por cada finalista",
    does: "Compara ajuste, habilidades y recomendación en un solo lugar",
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
            <div className="tabular text-sm font-semibold text-black">{isEs ? "Proceso" : "Process"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Cómo contratan mejor las empresas con Tinkko + PeakU" : "How teams hire better with Tinkko + PeakU"}
            </h2>
            <p className="mt-4 text-[#6B7280]">
              {isEs
                ? "Combinamos alcance, evaluación y reportes para que cada vacante se convierta en una decisión más rápida y mejor respaldada."
                : "We combine reach, assessments, and reporting so each opening becomes a faster, better-backed decision."}
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
                  <div className="h-2 w-2 rounded-full bg-[#FF6B00] opacity-70 group-hover:opacity-100" />
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
