import type { Role } from "@/lib/types";

type RoleCardProps = {
  role: Role;
};

export function RoleCard({ role }: RoleCardProps) {
  const isOpen = role.status === "Abierto";

  return (
    <article className="group flex min-h-32 flex-col justify-between border border-line bg-paper/72 p-4 transition hover:-translate-y-0.5 hover:border-amber/70 hover:bg-paper hover:shadow-warm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-cream-muted">{role.group}</p>
        <span
          className={
            isOpen
              ? "rounded-full border border-amber/40 bg-amber/10 px-2 py-1 text-[11px] uppercase text-amber"
              : "rounded-full border border-cream/15 px-2 py-1 text-[11px] uppercase text-cream-muted"
          }
        >
          {role.status}
        </span>
      </div>
      <div>
        <h3 className="mt-6 font-serif text-2xl leading-none text-cream">{role.name}</h3>
        <p className="mt-3 text-sm leading-6 text-cream-muted">
          {isOpen ? "Para sesiones puntuales, con cuidado y retribución." : "Core Team / Ocupado"}
        </p>
      </div>
    </article>
  );
}
