"use client";

import { motion } from "framer-motion";

type MarqueeTextProps = {
  items: string[];
};

export function MarqueeText({ items }: MarqueeTextProps) {
  const sequence = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-card py-3">
      <motion.div
        className="display-type flex w-max gap-8 text-2xl font-black uppercase text-foreground/85 sm:text-4xl"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            {item}
            <span className="text-red">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
