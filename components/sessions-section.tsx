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
              <article className="flex min-h-[28rem] flex-col justify-between border border-line bg-paper/70 p-5 transition hover:-translate-y-0.5 hover:border-amber/70 hover:shadow-warm">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-amber">{session.status}</p>
                  <h3 className="mt-5 font-serif text-4xl leading-none text-cream sm:text-5xl">{session.title}</h3>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream-muted">Enfoque</p>
                  <p className="mt-3 max-w-sm text-base leading-7 text-cream">{session.focus}</p>
                  <div className="mt-6 border-t border-line pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream-muted">
                      Futuro archivo
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sessionDetails.map((detail) => (
                        <span
                          key={`${session.title}-${detail}`}
                          className="border border-line px-2 py-1 text-xs text-cream-muted"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
