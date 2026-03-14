import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-white py-28">
      <Container>
        <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Publica tu vacante" : "Start your hiring search"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Activa tu contratación con Tinkko + PeakU"
                  : "Activate hiring with Tinkko + PeakU"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Completa el formulario y creamos un grupo de WhatsApp para publicar tu vacante y acompañarte en el proceso."
                  : "Fill out the form and we create a WhatsApp group to publish your opening and guide your process."}
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Tinkko + PeakU - crear grupo de WhatsApp para vacante" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-black" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="tabular w-full rounded-md border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-black outline-none focus:border-black"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-black" htmlFor="whatsapp">
                    {isEs ? "WhatsApp" : "WhatsApp"}
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    className="tabular w-full rounded-md border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-black outline-none focus:border-black"
                    placeholder={isEs ? "Ej: +57 300 123 4567" : "Ex: +57 300 123 4567"}
                  />
                </div>

                <button
                  type="submit"
                  className="tabular w-full rounded-md bg-black px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  {isEs ? "Crear grupo de WhatsApp" : "Create WhatsApp group"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Con estos datos te escribimos y abrimos el grupo de WhatsApp para publicar tu vacante."
              : "With this info, we message you and open the WhatsApp group to publish your opening."}
          </div>
        </div>
      </Container>
    </section>
  );
}
