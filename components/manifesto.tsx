import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";

const paragraphs = [
  "SPOTTED nace de una idea sencilla: la música es importante, pero las personas lo son aún más.",
  "Vivimos en una época obsesionada con la velocidad, las tendencias y la viralidad vacía. Nosotros creemos en otra forma de hacer las cosas.",
  "Creemos en los procesos, en las conversaciones antes de grabar, en compartir una comida con el equipo, en el sonido correcto, en la luz adecuada, en el café de la mañana y en los detalles que convierten un día de trabajo en un recuerdo.",
  "SPOTTED no es solamente una serie de sesiones. Es un hogar creativo para artistas emergentes y para todas las personas que encuentran significado en crear con intención.",
];

export function Manifesto() {
  return (
    <section id="manifiesto" className="paper-edge border-b border-line bg-paper py-16 md:py-24">
      <div className="container-shell grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
        <FadeIn>
          <SectionHeading eyebrow="Manifiesto" title="No perseguimos la viralidad vacía. Perseguimos la conexión." />
        </FadeIn>
        <div className="grid gap-6">
          {paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={index * 0.05}>
              <p className="max-w-3xl border-b border-line pb-6 text-xl leading-9 text-cream last:border-0 md:text-2xl md:leading-10">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
