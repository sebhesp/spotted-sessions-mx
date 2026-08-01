import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brandAssets } from "@/lib/brand";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPOTTED Sessions | Archivo musical íntimo",
    template: "%s | SPOTTED Sessions",
  },
  description:
    "SPOTTED Sessions documenta canciones con intención, atención, calidez y calidad desde El Cuarto de Atrás.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "SPOTTED Sessions",
    title: "SPOTTED Sessions",
    description: "When no one's watching... Spotted.",
    images: [
      {
        url: brandAssets.socialImage,
        width: 1200,
        height: 630,
        alt: "SPOTTED Sessions sobre fondo verde botella.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPOTTED Sessions",
    description: "When no one's watching... Spotted.",
    images: [brandAssets.socialImage],
  },
  icons: {
    icon: brandAssets.icon,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0F0C",
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
