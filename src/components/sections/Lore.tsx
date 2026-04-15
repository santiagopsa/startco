"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="beneficios" className="bg-white py-28 text-black">
      <Container>
        <div className="max-w-4xl">
          <div data-reveal className="tabular text-sm font-semibold text-black">
            {isEs ? "Beneficios para startups en Startco" : "Benefits for startups at Startco"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Encuentra talento y haz pruebas sin costo."
              : "Find talent and run tests for free."}
          </h2>
          <p data-reveal className="mt-4 text-[#6B7280]">
            {isEs
              ? "Startco Medellín conecta a las startups con talento seleccionado, evaluaciones gratuitas y acompañamiento para definir cargos y filtros."
              : "Startco Medellín connects startups with selected talent, free evaluations, and support to define roles and filters."}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card
              title={isEs ? "Talento preparado" : "Ready talent"}
              desc={isEs ? "Conecta con perfiles listos para roles de producto, tecnología y crecimiento." : "Connect with profiles ready for product, tech, and growth roles."}
            />
            <Card
              title={isEs ? "Pruebas sin costo" : "Free tests"}
              desc={isEs ? "Realiza pruebas técnicas sin costo para filtrar candidatos con más confianza." : "Run technical tests for free to screen candidates with more confidence."}
            />
            <Card
              title={isEs ? "Acompañamiento" : "Guided support"}
              desc={isEs ? "Te ayudamos a definir el cargo, seleccionar filtros y coordinar el grupo de WhatsApp." : "We help define the role, select filters, and coordinate the WhatsApp group."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-soft">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#6B7280]">{desc}</div>
    </div>
  );
}
