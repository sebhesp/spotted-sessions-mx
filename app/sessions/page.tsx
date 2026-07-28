import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import { sessions } from "@/content/site";

export const metadata: Metadata = {
  title: "Sesiones",
  description: "Archivo editorial de SPOTTED Sessions: sesiones publicadas, proximas y borradores de contenido.",
  alternates: {
    canonical: "/sessions",
  },
};

export default function SessionsPage() {
  const visibleSessions = sessions;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SPOTTED Sessions",
    itemListElement: visibleSessions.map((session, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/sessions/${session.slug}`,
      name: `${session.artist.name} - ${session.track.title}`,
    })),
  };
  const upcomingEvents = visibleSessions
    .filter((session) => session.status === "upcoming")
    .map((session) => ({
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      name: `SPOTTED Session: ${session.artist.name}`,
      startDate: session.date,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "El Cuarto de Atras",
        address: session.location,
      },
      performer: {
        "@type": "MusicGroup",
        name: session.artist.name,
      },
    }));

  return (
    <main id="main-content" className="spotted-container py-12 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      {upcomingEvents.map((event) => (
        <script
          key={event.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
        />
      ))}

      <SectionLabel code="ARCHIVO">SPOTTED Sessions</SectionLabel>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Archivo editorial</Eyebrow>
          <h1 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl">
            Canciones adaptadas al cuarto.
          </h1>
        </div>
        <div className="max-w-2xl text-muted">
          <p className="text-lg leading-8">
            Cada ficha reune imagen, video, audio, creditos, hospitalidad y contexto. Los datos
            actuales son placeholder y muestran la arquitectura preparada para sesiones reales.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em]">
            <span className="rounded-sm border border-cream/28 px-3 py-2 text-cream">Published</span>
            <span className="rounded-sm border border-cream/18 px-3 py-2">Upcoming</span>
            <span className="rounded-sm border border-cream/18 px-3 py-2">Draft</span>
          </div>
        </div>
      </div>

      {visibleSessions.length > 0 ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleSessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} priority={index === 0} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-sm border border-border bg-card p-8">
          <h2 className="display-type text-4xl text-cream">El archivo esta por abrir.</h2>
          <p className="mt-4 max-w-xl text-muted">
            Cuando exista la primera sesion publicada, aparecera aqui con video, fotografia y creditos.
          </p>
          <div className="mt-7">
            <Button href="/join">Aplicar a una sesion</Button>
          </div>
        </div>
      )}
    </main>
  );
}
