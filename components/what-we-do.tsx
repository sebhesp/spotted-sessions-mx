import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { pillars, sessionMoments } from "@/lib/constants";

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
              <div className="flex min-h-32 items-end border border-line bg-paper/58 p-4 transition hover:-translate-y-0.5 hover:border-amber/70 hover:bg-paper hover:shadow-warm">
                <span className="font-serif text-2xl text-cream">{pillar}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {sessionMoments.map((moment, index) => (
            <FadeIn key={moment.title} delay={index * 0.05}>
              <article className="border border-line bg-bottle/24 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-serif text-3xl leading-none text-cream">{moment.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cream-muted">{moment.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
