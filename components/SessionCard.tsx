import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Session } from "@/lib/types";

type SessionCardProps = {
  session: Session;
  index?: number;
  priority?: boolean;
};

const statusLabel: Record<Session["status"], string> = {
  published: "Publicado",
  upcoming: "Proxima",
  draft: "Borrador",
};

export function SessionCard({ session, index = 0, priority = false }: SessionCardProps) {
  return (
    <FadeIn delay={index * 0.05}>
      <article className="group h-full overflow-hidden rounded-sm border border-border bg-card transition hover:border-cream/42">
        <Link href={`/sessions/${session.slug}`} className="grid h-full min-h-[31rem] grid-rows-[minmax(16rem,1fr)_auto]">
          <div className="relative overflow-hidden">
            <Image
              src={session.image}
              alt={session.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 rounded-sm border border-cream/24 bg-black/46 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cream">
              {session.id}
            </div>
            <div className="absolute right-4 top-4 rounded-sm bg-cream px-3 py-2 text-xs uppercase tracking-[0.16em] text-black">
              {statusLabel[session.status]}
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="credit-type text-xs uppercase tracking-[0.18em] text-muted">
                  {session.location} / {new Date(session.date).getFullYear()}
                </p>
                <h3 className="display-type mt-3 text-4xl leading-none text-cream">
                  {session.artist.name}
                </h3>
                <p className="mt-2 text-lg text-cream/90">"{session.track.title}"</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-burnt-orange" />
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">{session.summary}</p>
            {session.placeholder ? (
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-cream/52">Contenido placeholder</p>
            ) : null}
          </div>
        </Link>
      </article>
    </FadeIn>
  );
}
