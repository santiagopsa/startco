import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://startco.com"),
  title: {
    default: "Startco Medellín",
    template: "%s | Startco",
  },
  description:
    "Evento Startco en Medellín para startups que buscan talento, pruebas sin costo y acompañamiento en la selección.",
  keywords: [
    "Startco Medellín",
    "talento startup",
    "pruebas gratuitas",
    "contratación Medellín",
    "eventos startups",
    "startups Colombia",
  ],
  authors: [{ name: "Startco", url: "https://startco.com" }],
  creator: "Startco",
  publisher: "Startco",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Startco",
    title: "Startco Medellín",
    description:
      "Evento Startco en Medellín para startups que conectan con talento y pruebas sin costo.",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Startco Medellín landing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startco Medellín",
    description:
      "Evento Startco en Medellín para startups que buscan talento y pruebas gratuitas.",
    images: ["/assets/hero/dashboard.png"],
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
