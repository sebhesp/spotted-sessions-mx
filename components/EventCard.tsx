"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import type { Event } from "@/lib/data";

type EventCardProps = {
  event: Event;
  index?: number;
};

export function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden border border-border bg-card p-5 transition hover:border-red"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="absolute right-0 top-0 h-full w-10 border-l border-dashed border-border bg-background/35 transition group-hover:border-red" />
      <div className="display-type absolute right-2 top-5 text-[10px] font-black uppercase text-muted [writing-mode:vertical-rl]">
        {event.id}
      </div>
      <div className="pr-10">
        <div className="mb-12 flex items-center justify-between gap-4 text-xs uppercase text-muted">
          <span className="flex items-center gap-2"><Ticket className="h-4 w-4 text-red" /> {event.status}</span>
          <span>{event.capacity} cap</span>
        </div>
        <h3 className="display-type text-5xl font-black uppercase leading-none sm:text-6xl">{event.title}</h3>
        <div className="mt-6 grid gap-3 text-sm uppercase text-muted sm:grid-cols-2">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-red" /> {event.venue}, {event.city}</p>
          <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-red" /> {event.date}</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {event.lineup.map((artist) => (
            <span key={artist} className="border border-border px-2.5 py-1 text-xs uppercase text-foreground">
              {artist}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
