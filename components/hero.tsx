"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const actions = [
  { label: "Aplicar como artista", href: "#artistas", primary: true },
  { label: "Join SPOTTED", href: "#colaboradores" },
  { label: "Colaborar como marca", href: "#marcas" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[88svh] overflow-hidden border-b border-line">
      <Image
        src="/spotted-session-hero.png"
        alt="Sesión musical íntima de SPOTTED Sessions MX."
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/76 to-ink/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />

      <div className="container-shell relative flex min-h-[88svh] items-end pb-10 pt-28 md:pb-14">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amber">
            Music · Community · Hospitality
          </p>
          <h1 className="font-serif text-6xl leading-[0.88] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
            SPOTTED Sessions MX
          </h1>
          <p className="mt-5 max-w-xl text-2xl text-cream sm:text-3xl">A home for emerging artists.</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream-muted sm:text-lg">
            Creamos sesiones musicales en vivo para artistas emergentes, construidas con intención,
            comunidad y cuidado por los detalles.
          </p>
          <div className="mt-6 grid max-w-2xl gap-3 border-y border-line py-4 text-sm leading-6 text-cream-muted sm:grid-cols-3">
            <span>Una canción.</span>
            <span>Una mesa compartida.</span>
            <span>Un equipo que escucha.</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex min-h-12 items-center justify-center gap-2 bg-amber px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-cream"
                    : "inline-flex min-h-12 items-center justify-center gap-2 border border-line bg-ink/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cream transition hover:border-amber hover:text-amber"
                }
              >
                {action.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
