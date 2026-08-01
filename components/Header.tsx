import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { brandCopy } from "@/lib/brand";

const navItems = [
  { href: "/sessions", label: "Archivo" },
  { href: "/about", label: "Sobre" },
  { href: "/join", label: "Join" },
  { href: "/brands", label: "Marcas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-charcoal/92 backdrop-blur-xl">
      <div className="spotted-container flex min-h-16 items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3"
          aria-label={`${brandCopy.name} inicio`}
        >
          <LogoMark className="h-8 w-8 text-cream" label={null} />
          <span className="credit-type hidden text-xs uppercase tracking-[0.18em] text-cream sm:inline">
            SPOTTED Sessions
          </span>
        </Link>
        <nav aria-label="Navegación principal" className="flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 px-2.5 py-3 text-cream/70 transition hover:text-cream focus-visible:text-cream sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
