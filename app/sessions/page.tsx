import type { Metadata } from "next";
import { ArtistCodeTag } from "@/components/ArtistCodeTag";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import { sessions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sessions",
};

const filters = ["All", "In Focus", "Live", "Archive"];

export default function SessionsPage() {
  return (
    <main className="spotted-container py-12 md:py-20">
      <SectionLabel code="SS-INDEX">SPOTTED Sessions</SectionLabel>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="display-type text-6xl font-black uppercase leading-none md:text-8xl">
            Sessions archive.
          </h1>
        </div>
        <div className="max-w-2xl text-muted">
          <p className="text-lg leading-relaxed">
            Documenta el momento exacto en que un artista emergente entra en foco.
            Cada sesión es ficha, toma, rastro y prueba de una señal viva.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <span
                key={filter}
                className={`border px-3 py-2 text-xs uppercase ${
                  index === 0 ? "border-red text-foreground" : "border-border text-muted"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session, index) => (
          <SessionCard key={session.id} session={session} index={index} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {sessions.map((session) => (
          <ArtistCodeTag key={session.id} code={session.id} status={session.artist} />
        ))}
      </div>
    </main>
  );
}
