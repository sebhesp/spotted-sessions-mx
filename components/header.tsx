"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/72 backdrop-blur-xl">
      <div className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="font-serif text-xl tracking-tight text-cream">
          SPOTTED Sessions MX
        </a>

        <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-muted md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-amber">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-cream md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-ink px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-line px-4 py-3 text-sm uppercase tracking-[0.18em] text-cream-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
