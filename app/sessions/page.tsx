import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import { sessions } from "@/content/site";

export const metadata: Metadata = {
  title: "Archivo de sesiones",
  description: "Archivo editorial de SPOTTED Sessions: artistas, canciones, códigos y fichas de producción.",
  alternates: {
    canonical: "/sessions",
  },
};

export default function SessionsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SPOTTED Sessions",
    itemListElement: sessions.map((session, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/sessions/${session.slug}`,
      name: `${session.artist.name} - ${session.track.title}`,
    })),
  };

  return (
    <main id="main-content" className="spotted-container py-12 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <SectionLabel code="ARCHIVO">Sesiones</SectionLabel>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <h1 className="display-type text-6xl leading-none text-cream md:text-8xl">
          Canciones convertidas en archivo.
        </h1>
        <div className="max-w-2xl text-muted">
          <p className="text-lg leading-8">
            Cada ficha reúne video, fotografía, contexto, músicos, créditos y detalles de
            producción. El grid mantiene la lectura limpia: artista, canción, código y fecha.
          </p>
          <div className="mt-6 grid grid-cols-3 border-y border-border py-4 text-center credit-type text-xs uppercase tracking-[0.14em]">
            <span>Publicado</span>
            <span>Próximo</span>
            <span>Borrador</span>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session, index) => (
          <SessionCard key={session.id} session={session} index={index} priority={index === 0} />
        ))}
      </div>
    </main>
  );
}
