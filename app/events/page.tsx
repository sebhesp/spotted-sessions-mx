import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { SectionLabel } from "@/components/SectionLabel";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <main className="spotted-container py-12 md:py-20">
      <SectionLabel code="EV-INDEX">Upcoming events</SectionLabel>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <h1 className="display-type text-6xl font-black uppercase leading-none md:text-8xl">
          Noches en baja frecuencia.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Eventos íntimos, posters vivos y lineups en curaduría. No se trata de llenar ruido:
          se trata de poner la escena en el cuarto correcto.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </main>
  );
}
