import { ApplicationForm } from "@/components/application-form";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { formConfigs } from "@/lib/constants";

export function ArtistsSection() {
  return (
    <section id="artistas" className="border-b border-line bg-bottle/42 py-16 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="max-w-2xl">
          <SectionHeading
            eyebrow="Para artistas"
            title="Tu música merece un hogar."
            body="Queremos invitarte a nuestro entorno creativo y trabajar contigo para construir una sesión que se sienta auténtica, cómoda y cuidada."
          />
          <p className="mt-6 text-lg leading-8 text-cream-muted">
            No buscamos cambiar quién eres. Buscamos crear un espacio donde tu proyecto pueda
            expresarse con libertad, rodeado de personas que aman lo que hacen.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ApplicationForm config={formConfigs.artist} />
        </FadeIn>
      </div>
    </section>
  );
}
