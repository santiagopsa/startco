import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-firo-bg py-28">
      <Container>
        <div className="rounded-xl border border-[#CDD4D4] bg-[#F6F4E8] p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Publica tu vacante" : "Start your hiring search"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Activa tu contratación con Vittiva + PeakU"
                  : "Activate hiring with Vittiva + PeakU"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Completa este formulario y nuestro equipo activará tu ruta de publicación para atraer talento especializado."
                  : "Fill out the form and our team will activate your publishing flow to reach specialized talent."}
              </p>
            </div>

            <div className="rounded-lg border border-[#CDD4D4] bg-[#F0EEDF] p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Vittiva + PeakU - solicitud para publicar vacante" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="company">
                    {isEs ? "Empresa" : "Company"}
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Nombre de tu empresa o proyecto" : "Your company or project name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="email">
                    {isEs ? "Correo electronico" : "Email"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "tu@email.com" : "you@email.com"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="vacancy">
                    {isEs ? "Cargo a publicar" : "Opening to publish"}
                  </label>
                  <input
                    id="vacancy"
                    name="vacancy"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Ej: Desarrollador Full Stack" : "Ex: Full Stack Developer"}
                  />
                </div>

                <button
                  type="submit"
                  className="tabular w-full rounded-md bg-[#435C3D] px-5 py-3 text-sm font-semibold text-[#F0EEDF] transition hover:brightness-95"
                >
                  {isEs ? "Publicar oferta en PeakU" : "Launch your opening on PeakU"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Te contactamos para validar tu perfil y activar la ruta exclusiva de publicación en PeakU."
              : "We will contact you to validate your profile and activate your exclusive publishing lane in PeakU."}
          </div>
        </div>
      </Container>
    </section>
  );
}
