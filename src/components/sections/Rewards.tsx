import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="resultados" className="bg-white py-28 text-black">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="tabular text-sm font-semibold text-black">{isEs ? "Alianza Tinkko + PeakU" : "Tinkko + PeakU alliance"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Toda la información de candidatos en un solo sistema" : "All candidate intelligence in one system"}
            </h2>
            <p className="mt-4 text-[#6B7280]">
              {isEs
                ? "Tu equipo accede a perfiles completos, resultados de evaluación y recomendaciones para priorizar mejores entrevistas."
                : "Your team gets complete profiles, assessment outcomes, and recommendations to prioritize stronger interviews."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Alcance de candidatos" : "Candidate reach"} value={isEs ? "200+ por vacante" : "200+ per opening"} />
              <Loot title={isEs ? "Evaluación técnica" : "Technical assessment"} value={isEs ? "Guiada por PeakU" : "Guided by PeakU"} />
              <Loot title={isEs ? "Reporte final" : "Final report"} value={isEs ? "Por candidato" : "Per candidate"} accent />
            </div>
          </div>

          <div className="relative rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-soft">
            <Image
              src="/assets/hero/dashboard.png"
              alt="PeakU dashboard"
              width={1400}
              height={900}
              className="relative w-full rounded-md"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ title, value, accent = false }: { title: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-soft">
      <div className="tabular text-xs font-semibold text-[#6B7280]">{title}</div>
      <div className={`mt-2 text-xl font-semibold ${accent ? "text-[#FF6B00]" : ""}`}>{value}</div>
    </div>
  );
}
