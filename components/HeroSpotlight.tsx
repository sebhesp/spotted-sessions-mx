"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { BrandStamp } from "@/components/BrandStamp";
import { FrameCorners } from "@/components/FrameCorners";

export function HeroSpotlight() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 poster-grid opacity-50" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-red/20 blur-3xl md:h-[34rem] md:w-[34rem]"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="spotted-container relative grid min-h-[calc(100vh-4rem)] items-end gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <BrandStamp />
          <h1 className="display-type mt-7 text-[4.6rem] font-black leading-[0.82] text-foreground sm:text-[7rem] md:text-[9rem] lg:text-[11rem]">
            SPOTTED.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-tight text-foreground sm:text-2xl">
            Talento emergente, capturado antes del ruido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/sessions">Explorar Sessions</Button>
            <Button href="/events" variant="secondary">Ver próximos eventos</Button>
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[24rem] overflow-hidden border border-border bg-card shadow-redline"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red/30 via-foreground/5 to-transparent" />
          <div className="scanline absolute inset-0 opacity-35" />
          <FrameCorners />
          <div className="relative flex h-full min-h-[24rem] flex-col justify-between p-5">
            <div className="flex items-center justify-between text-xs uppercase text-muted">
              <span>REC 00:23:05</span>
              <span className="text-red">IN FOCUS</span>
            </div>
            <div>
              <p className="text-sm uppercase text-muted">SPOTTED Sessions / Field capture</p>
              <p className="display-type mt-3 max-w-md text-4xl font-black uppercase leading-none">
                The artist enters the frame.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
