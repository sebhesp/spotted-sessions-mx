import { ApplicationForm } from "@/components/application-form";
import { FadeIn } from "@/components/fade-in";
import { RoleCard } from "@/components/role-card";
import { SectionHeading } from "@/components/section-heading";
import { formConfigs, occupiedRoles, openRoles } from "@/lib/constants";

export function CollaboratorsSection() {
  const groupedRoles = openRoles.reduce<Record<string, typeof openRoles>>((groups, role) => {
    groups[role.group] = [...(groups[role.group] ?? []), role];
    return groups;
  }, {});

  return (
    <section id="colaboradores" className="border-b border-line py-16 md:py-24">
      <div className="container-shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Join SPOTTED"
            title="Las grandes experiencias se construyen en equipo."
            body="SPOTTED funciona por sesiones. No buscamos gente disponible todos los días ni en todas las fechas. Buscamos personas talentosas, responsables y sensibles al detalle que quieran colaborar en fechas específicas y formar parte de una comunidad creativa retribuida."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-cream">
            El trato VIP no es solo para el artista. También es para quien cocina, graba,
            ilumina, mezcla, viste, acomoda, recibe y cuida los detalles.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-8">
            <div className="rounded-sm border border-line bg-bottle/24 p-4 sm:p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cream-muted">
                Roles ocupados actualmente
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {occupiedRoles.map((role, index) => (
                  <FadeIn key={role.name} delay={index * 0.03}>
                    <RoleCard role={role} />
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-amber">
                Invitaciones abiertas por sesión
              </p>
              <div className="grid gap-6">
                {Object.entries(groupedRoles).map(([group, roles]) => (
                  <div key={group}>
                    <p className="mb-3 font-serif text-2xl text-cream">{group}</p>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {roles.map((role, index) => (
                        <FadeIn key={`${role.group}-${role.name}`} delay={index * 0.02}>
                          <RoleCard role={role} />
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FadeIn delay={0.12}>
            <ApplicationForm config={formConfigs.collaborator} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
