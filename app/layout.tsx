import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RT Software Factory — Desarrollo Web & Automatización con IA",
  description:
    "Agencia de desarrollo web y automatización con IA en Santa Rosa, La Pampa. Sistemas de gestión para comercios, páginas web profesionales, bots de WhatsApp y automatización con n8n.",
  keywords: [
    "desarrollo web Santa Rosa La Pampa",
    "automatización IA Argentina",
    "sistemas de gestión kiosco almacén restaurante",
    "bots WhatsApp negocios",
    "n8n automatización",
    "RT Software Factory",
  ],
  openGraph: {
    title: "RT Software Factory — Desarrollo Web & Automatización con IA",
    description:
      "Construimos el motor tecnológico de tu negocio. Páginas web, sistemas de gestión y automatización con IA.",
    url: "https://rt-softwarefactory.com.ar",
    siteName: "RT Software Factory",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RT Software Factory",
    description: "Construimos el motor tecnológico de tu negocio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-dark-950 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
