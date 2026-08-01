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
  upcoming: "Próxima",
  draft: "Borrador",
};

export function SessionCard({ session, index = 0, priority = false }: SessionCardProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <article className="group border-t border-border pt-4">
        <Link href={`/sessions/${session.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-green-deep">
            <Image
              src={session.image}
              alt={session.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            <div className="absolute left-3 top-3 credit-type bg-black/72 px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-cream">
              {session.id}
            </div>
            <div className="absolute bottom-3 left-3 credit-type bg-cream px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-black">
              {statusLabel[session.status]}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <div>
              <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">
                {session.year} / {session.city}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-none text-cream">{session.artist.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">“{session.track.title}”</p>
            </div>
            <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 text-cream/70 transition group-hover:text-burnt-orange" />
          </div>
        </Link>
      </article>
    </FadeIn>
  );
}
