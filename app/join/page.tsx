import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionLabel } from "@/components/SectionLabel";
import { collaborationRoles } from "@/content/site";

export const metadata: Metadata = {
  title: "Join SPOTTED | Artistas y colaboradores",
  description: "Aplicaciones para artistas y colaboradores de SPOTTED Sessions.",
  alternates: {
    canonical: "/join",
  },
};

export default function JoinPage() {
  return (
    <main id="main-content">
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="JOIN">Artistas y colaboradores</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Trabajo pagado por sesion</Eyebrow>
            <h1 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl">
              Entrar al cuarto tambien requiere cuidado.
            </h1>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-muted">
            <p>
              Las participaciones dependen de cada produccion. No exigimos disponibilidad
              permanente y no todos los roles se activan en cada sesion.
            </p>
            <p className="mt-4">
              El equipo recibe hospitalidad, tiempos claros y una mesa preparada. El buen trato es
              parte del estandar de produccion.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep/36 py-14 md:py-20">
        <div className="spotted-container">
          <SectionLabel code="ROLES">Roles de colaboracion</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {collaborationRoles.map((role) => (
              <article key={role.id} className="border border-border bg-black/18 p-5">
                <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
                  {role.category} / {role.status}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-cream">{role.label}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spotted-container grid gap-8 py-14 md:py-20">
        <ApplicationForm kind="artist" />
        <ApplicationForm kind="collaborator" />
      </section>
    </main>
  );
}
