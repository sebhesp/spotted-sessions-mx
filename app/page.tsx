import { BrandStamp } from "@/components/BrandStamp";
import { Button } from "@/components/Button";
import { EventCard } from "@/components/EventCard";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import { MarqueeText } from "@/components/MarqueeText";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import { brandWords, events, sessions } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <HeroSpotlight />
      <MarqueeText items={brandWords} />

      <section className="spotted-container py-16 md:py-24">
        <SectionLabel code="SP-000">What is SPOTTED?</SectionLabel>
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <BrandStamp label="Cultural radar" />
          </div>
          <div className="max-w-3xl">
            <h2 className="display-type text-5xl font-black uppercase leading-none md:text-7xl">
              Detectamos señales antes de que se vuelvan obvias.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              SPOTTED funciona como archivo, radar y spotlight para talento emergente. Sesiones,
              eventos íntimos y curaduría editorial con una mirada documental: cruda, precisa,
              nocturna.
            </p>
          </div>
        </div>
      </section>

      <section className="spotted-container py-16">
        <SectionLabel code="SS-FEED">Featured Sessions</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/sessions" variant="secondary">Abrir archivo completo</Button>
        </div>
      </section>

      <section className="spotted-container py-16">
        <SectionLabel code="EV-SCAN">Próximos Eventos</SectionLabel>
        <div className="grid gap-4 lg:grid-cols-2">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="spotted-container grid gap-8 md:grid-cols-[1fr_1fr]">
          <p className="display-type text-6xl font-black uppercase leading-none md:text-8xl">
            Lo vimos antes.
          </p>
          <div className="max-w-xl text-lg leading-relaxed text-muted">
            <p>
              No todos lo ven. SPOTTED documenta el momento en que una escena empieza a emitir
              señales: una canción, un cuarto, una toma, una noche que todavía no tiene mito.
            </p>
            <p className="mt-5 text-foreground">A signal worth following.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
