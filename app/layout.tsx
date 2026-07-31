import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { withBasePath } from "@/lib/paths";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const socialImage = withBasePath("/images/back-room-hero.webp");
const icon = withBasePath("/icon.svg");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPOTTED Sessions | Sesiones musicales intimas en Mexico",
    template: "%s | SPOTTED Sessions",
  },
  description:
    "SPOTTED Sessions acompana, escucha y documenta sesiones musicales intimas desde El Cuarto de Atras.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "SPOTTED Sessions",
    title: "SPOTTED Sessions",
    description:
      "Sesiones musicales intimas en Mexico. When no one's watching... Spotted.",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: "Cuarto privado preparado como escenario intimo para SPOTTED Sessions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPOTTED Sessions",
    description: "When no one's watching... Spotted.",
    images: [socialImage],
  },
  icons: {
    icon,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F0E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
