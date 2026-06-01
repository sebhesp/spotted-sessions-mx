import type { Metadata } from "next";
import { BrandStamp } from "@/components/BrandStamp";
import { SectionLabel } from "@/components/SectionLabel";
import { brandWords } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
};

const manifesto = [
  "Lo vimos antes.",
  "No todos lo ven.",
  "Una escena no aparece de golpe: primero emite señales.",
  "SPOTTED existe para seguir esas señales con cámara, criterio y archivo.",
];

export default function AboutPage() {
  return (
    <main>
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="DNA">Qué es SPOTTED</SectionLabel>
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <BrandStamp label="Archive / radar / spotlight" />
          </div>
          <div>
            <h1 className="display-type text-6xl font-black uppercase leading-none md:text-8xl">
              Plataforma de descubrimiento musical y cultural.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              SPOTTED detecta talento emergente antes de que se vuelva obvio. Es curaduría,
              archivo y presencia editorial para artistas, sesiones audiovisuales y eventos
              íntimos con lectura de escena.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-14 md:py-20">
        <div className="spotted-container grid gap-10 md:grid-cols-2">
          <div>
            <SectionLabel code="SS">Qué es SPOTTED Sessions</SectionLabel>
            <p className="text-3xl leading-tight text-foreground md:text-5xl">
              Documenta el momento exacto en que un artista emergente entra en foco.
            </p>
          </div>
          <div>
            <SectionLabel code="MANIFEST">Manifiesto</SectionLabel>
            <div className="grid gap-4">
              {manifesto.map((line) => (
                <p key={line} className="border-b border-border pb-4 text-xl text-muted last:border-0">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="KEYWORDS">Palabras clave</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {brandWords.map((word) => (
            <span key={word} className="border border-border bg-card px-4 py-3 text-sm uppercase text-foreground">
              {word}
            </span>
          ))}
        </div>

        <div className="mt-16 max-w-4xl">
          <SectionLabel code="NEXT">Visión a futuro</SectionLabel>
          <p className="text-3xl leading-tight text-foreground md:text-5xl">
            Un archivo cultural vivo: sesiones, fichas de artistas, venta de boletos,
            screenings, drops editoriales y herramientas para seguir talento antes del ruido.
          </p>
        </div>
      </section>
    </main>
  );
}
