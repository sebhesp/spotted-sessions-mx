import Image from "next/image";
import Link from "next/link";
import { brandAssets, brandCopy } from "@/lib/brand";

const navItems = [
  { href: "/sessions", label: "Sesiones" },
  { href: "/about", label: "Sobre" },
  { href: "/join", label: "Join" },
  { href: "/brands", label: "Marcas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-charcoal/88 backdrop-blur-xl">
      <div className="spotted-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-sm"
          aria-label={`${brandCopy.shortName} inicio`}
        >
          <Image
            src={brandAssets.isotype}
            alt=""
            width={34}
            height={34}
            priority
            aria-hidden="true"
          />
          <span className="display-type text-2xl leading-none text-cream">SPOTTED</span>
        </Link>
        <nav aria-label="Navegacion principal" className="flex flex-wrap items-center gap-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 rounded-sm px-3 py-3 text-cream/76 transition hover:text-cream focus-visible:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
