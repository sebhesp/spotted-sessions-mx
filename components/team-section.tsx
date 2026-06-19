import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { occupiedRoles } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="border-b border-line bg-bottle/34 py-16 md:py-24">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Core Team"
            title="Una mesa pequeña, roles claros y mucho cuidado."
            body="El equipo actual sostiene las primeras sesiones. Los nombres vendrán después; por ahora importa mostrar la estructura humana que hace posible el día."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {occupiedRoles.map((role, index) => (
            <FadeIn key={role.name} delay={index * 0.04}>
              <div className="min-h-48 border border-line bg-ink/45 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cream-muted">Ocupado</p>
                <h3 className="mt-16 font-serif text-3xl leading-none text-cream">{role.name}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
