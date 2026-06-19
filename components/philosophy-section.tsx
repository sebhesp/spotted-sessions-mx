import { FadeIn } from "@/components/fade-in";

export function PhilosophySection() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="container-shell">
        <FadeIn>
          <div className="max-w-5xl">
            <p className="font-serif text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl">
              La música reúne personas.
              <br />
              Los detalles crean recuerdos.
              <br />
              La comunidad hace que todo tenga sentido.
            </p>
            <div className="mt-10 border-t border-line pt-8">
              <p className="font-serif text-3xl text-cream">SPOTTED Sessions MX</p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-amber">
                Music · Community · Hospitality
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
