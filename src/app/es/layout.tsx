import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startco Medellín | Encuentra talento",
  description:
    "Evento Startco en Medellín para startups que buscan talento y pruebas gratis con sólo nombre y WhatsApp.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    locale: "es_ES",
    url: "/es",
    title: "Startco Medellín | Encuentra talento",
    description:
      "Evento Startco en Medellín para startups que conectan con talento y evaluaciones sin costo.",
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
