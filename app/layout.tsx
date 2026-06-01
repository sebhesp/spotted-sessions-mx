import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NoiseOverlay } from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: {
    default: "SPOTTED.",
    template: "%s | SPOTTED.",
  },
  description: "Talento emergente, capturado antes del ruido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NoiseOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
