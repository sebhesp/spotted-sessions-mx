import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotted-sessions-mx.vercel.app"),
  title: {
    default: "SPOTTED Sessions MX",
    template: "%s | SPOTTED Sessions MX",
  },
  description:
    "A home for emerging artists. Sesiones musicales en vivo construidas con intención, comunidad y cuidado por los detalles.",
  openGraph: {
    title: "SPOTTED Sessions MX",
    description:
      "Creamos sesiones musicales en vivo para artistas emergentes con música, comunidad, hospitalidad y dirección creativa.",
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
    title: "SPOTTED Sessions MX",
    description: "A home for emerging artists.",
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
