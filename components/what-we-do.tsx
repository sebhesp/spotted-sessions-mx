import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { pillars } from "@/lib/constants";

export function WhatWeDo() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Qué hacemos"
            title="Sesiones musicales con una experiencia alrededor."
            body="Cada sesión es una jornada completa: música en vivo, mesa compartida, luz, audio, cámara, styling y una forma de cuidar el ambiente para que el artista pueda estar presente."
          />
        </FadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar} delay={index * 0.03}>
              <div className="flex min-h-28 items-end border border-line bg-paper/58 p-4 transition hover:border-amber/70 hover:bg-paper">
                <span className="font-serif text-2xl text-cream">{pillar}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
