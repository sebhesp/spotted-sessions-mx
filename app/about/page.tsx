import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { teamMembers, values, whatWeDo } from "@/content/site";
import { brandCopy } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sobre SPOTTED",
  description: "Manifiesto, valores y dirección de SPOTTED Sessions.",
  alternates: {
    canonical: "/about",
  },
};

const manifesto = [
  "SPOTTED escucha antes de grabar.",
  "La producción se adapta al artista.",
  "No prometemos fama.",
  "No nos apropiamos de la narrativa.",
  "Documentamos canciones con intención, atención, calidez y calidad.",
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="SOBRE">Qué es SPOTTED</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
              {brandCopy.tagline}
            </p>
            <h1 className="display-type mt-4 text-6xl leading-none text-cream md:text-8xl">
              Una sesión privada convertida en archivo cultural.
            </h1>
          </div>
          <div className="prose-room max-w-3xl text-lg leading-8 text-muted">
            <p>
              SPOTTED Sessions trabaja con artistas para construir una versión cercana de una
              canción. El espacio, la luz, la dirección, el audio y la hospitalidad se adaptan a la
              pieza.
            </p>
            <p>
              Su identidad vive entre El Cuarto de Atrás, la fotografía documental, la libreta de
              producción y una revista cultural que decide mirar con calma.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep py-14 md:py-20">
        <div className="spotted-container">
          <SectionLabel code="MANIFIESTO">Principios</SectionLabel>
          <div className="grid gap-4">
            {manifesto.map((line) => (
              <p key={line} className="display-type border-b border-border pb-5 text-4xl leading-tight text-cream md:text-6xl">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="CUARTO">El Cuarto de Atrás</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="display-type text-5xl leading-none text-cream md:text-7xl">
            Backstage, cocina, set, escucha y escenario.
          </h2>
          <div className="grid gap-5 text-lg leading-8 text-muted">
            <p>
              El cuarto no pretende ser grande. Su potencia está en la proximidad: pocas personas,
              luz cálida, mesa lista, cámara precisa y silencio suficiente para que la canción
              aparezca.
            </p>
            <ul className="grid gap-3 text-base">
              {whatWeDo.map((item) => (
                <li key={item} className="border-b border-border pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-black/32 py-14 md:py-20">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel code="VALORES">Sistema</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream">Cómo se decide.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="border-t border-border pt-5">
                <h3 className="text-xl font-semibold text-cream">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="EQUIPO">Equipo base</SectionLabel>
        <div className="grid gap-5 md:grid-cols-5">
          {teamMembers.map((member) => (
            <article key={member.role} className="border-t border-border pt-5">
              <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">
                {member.status}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-cream">{member.role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{member.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
