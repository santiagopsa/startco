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
            <div className="tabular text-sm font-semibold text-black">{isEs ? "Startco Medellín" : "Startco Medellín"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Talento, pruebas y apoyo en un solo lugar" : "Talent, tests, and support in one place"}
            </h2>
            <p className="mt-4 text-[#6B7280]">
              {isEs
                ? "Tu startup recibe talento recomendado, evaluaciones gratuitas y acompañamiento para afinar el cargo y los filtros."
                : "Your startup receives recommended talent, free assessments, and guidance to refine the role and filters."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Talento" : "Talent"} value={isEs ? "200+ perfiles" : "200+ profiles"} />
              <Loot title={isEs ? "Pruebas" : "Tests"} value={isEs ? "Sin costo" : "Free"} accent />
              <Loot title={isEs ? "Comunidad" : "Community"} value={isEs ? "Grupo en WhatsApp" : "WhatsApp group"} />
            </div>
          </div>

          <div className="relative rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-soft">
            <Image
              src="/assets/hero/dashboard.png"
              alt="Startco Medellín dashboard"
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
      <div className={`mt-2 text-xl font-semibold ${accent ? "text-[#14B37D]" : ""}`}>{value}</div>
    </div>
  );
}
