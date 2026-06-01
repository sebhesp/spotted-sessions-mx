"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArtistCodeTag } from "@/components/ArtistCodeTag";
import { FrameCorners } from "@/components/FrameCorners";
import type { Session } from "@/lib/data";

type SessionCardProps = {
  session: Session;
  index?: number;
};

export function SessionCard({ session, index = 0 }: SessionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link
        href={`/sessions/${session.slug}`}
        className="group relative block min-h-[28rem] overflow-hidden border border-border bg-card transition hover:border-red hover:shadow-redline"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${session.imageTone}`} />
        <div className="scanline absolute inset-0 opacity-30" />
        <FrameCorners className="opacity-0 transition group-hover:opacity-100" />
        <div className="relative flex min-h-[28rem] flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-3">
            <ArtistCodeTag code={session.id} status={session.status} />
            <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-red" />
          </div>
          <div>
            <p className="text-xs uppercase text-muted">{session.location} / {session.date}</p>
            <h3 className="display-type mt-3 text-5xl font-black leading-none">{session.artist}</h3>
            <p className="mt-2 text-lg text-foreground">"{session.track}"</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{session.logline}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase text-muted">
              <span className="border border-border px-2 py-1">{session.format}</span>
              <span className="border border-border px-2 py-1">Before the noise</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
