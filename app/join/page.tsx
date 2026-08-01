import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { SectionLabel } from "@/components/SectionLabel";
import { collaborationRoles } from "@/content/site";

export const metadata: Metadata = {
  title: "Join SPOTTED | Artistas y colaboradores",
  description: "Aplicaciones para artistas y colaboradores de SPOTTED Sessions.",
  alternates: {
    canonical: "/join",
  },
};

const roleStatus = {
  open: "Abierto",
  occupied: "Ocupado ahora",
  flexible: "Flexible",
} as const;

export default function JoinPage() {
  return (
    <main id="main-content">
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="JOIN">Artistas y colaboradores</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
              Trabajo por sesión / equipo cuidado
            </p>
            <h1 className="display-type mt-4 text-6xl leading-none text-cream md:text-8xl">
              Entrar al cuarto también requiere intención.
            </h1>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-muted">
            <p>
              Las participaciones dependen de cada producción. No todos los roles se activan en
              cada sesión y no pedimos disponibilidad permanente.
            </p>
            <p className="mt-4">
              El equipo recibe hospitalidad, tiempos claros y una mesa preparada. El buen trato es
              parte del estándar de producción.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep py-14 md:py-20">
        <div className="spotted-container">
          <SectionLabel code="ROLES">Libreta de producción</SectionLabel>
          <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {collaborationRoles.map((role) => (
              <article key={role.id} className="border-t border-border pt-4">
                <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">
                  {role.category} / {roleStatus[role.status]}
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
