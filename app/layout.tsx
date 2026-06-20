import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotted-sessions-mx.vercel.app"),
  title: {
    default: "SPOTTED Sessions MX | A home for emerging artists",
    template: "%s | SPOTTED Sessions MX",
  },
  description:
    "Sesiones musicales en vivo para artistas emergentes, construidas con intención, comunidad, hospitalidad y cuidado por los detalles.",
  keywords: [
    "SPOTTED Sessions MX",
    "artistas emergentes",
    "sesiones musicales",
    "música en vivo",
    "hospitalidad creativa",
    "CDMX",
  ],
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SPOTTED Sessions MX | A home for emerging artists",
    description:
      "Sesiones musicales en vivo para artistas emergentes, construidas con intención, comunidad, hospitalidad y cuidado por los detalles.",
    url: "https://spotted-sessions-mx.vercel.app",
    siteName: "SPOTTED Sessions MX",
    images: [
      {
        url: "/spotted-session-hero.png",
        width: 1792,
        height: 1024,
        alt: "Una sesión musical íntima de SPOTTED Sessions MX.",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPOTTED Sessions MX | A home for emerging artists",
    description:
      "Sesiones musicales en vivo para artistas emergentes, construidas con intención, comunidad, hospitalidad y cuidado por los detalles.",
    images: ["/spotted-session-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="texture" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
