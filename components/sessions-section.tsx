import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { sessionDetails, sessionPreviews } from "@/lib/constants";

export function SessionsSection() {
  return (
    <section id="sesiones" className="border-b border-line py-16 md:py-24">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Sesiones"
            title="Un archivo en construcción."
            body="Cada sesión será una memoria completa del día: quién tocó, quién cuidó la luz, quién sirvió la mesa, qué marcas acompañaron y qué quedó vibrando después de la última toma."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sessionPreviews.map((session, index) => (
            <FadeIn key={session.title} delay={index * 0.06}>
              <article className="flex min-h-80 flex-col justify-between border border-line bg-paper/70 p-5 transition hover:border-amber/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-amber">{session.status}</p>
                  <h3 className="mt-5 font-serif text-5xl leading-none text-cream">{session.title}</h3>
                </div>
                <p className="max-w-sm text-base leading-7 text-cream-muted">{session.note}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-8 border border-line bg-paper/48 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">
              Cada sesión podrá documentar
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sessionDetails.map((detail) => (
                <span key={detail} className="border border-line px-3 py-2 text-sm text-cream-muted">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
