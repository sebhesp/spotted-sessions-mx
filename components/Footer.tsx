import Link from "next/link";
import { brandCopy } from "@/lib/brand";

const footerLinks = [
  { href: "/sessions", label: "Sesiones" },
  { href: "/about", label: "Sobre SPOTTED" },
  { href: "/join", label: "Aplicar" },
  { href: "/brands", label: "Marcas" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-black/30 py-10">
      <div className="spotted-container grid gap-8 text-sm text-muted md:grid-cols-[1fr_auto]">
        <div>
          <p className="display-type text-3xl text-cream">SPOTTED</p>
          <p className="mt-2 max-w-xl">{brandCopy.tagline}</p>
          <p className="mt-4 max-w-xl">
            Una plataforma audiovisual para sesiones musicales intimas en Mexico. Acompanamos,
            escuchamos y documentamos.
          </p>
        </div>
        <nav aria-label="Navegacion de pie" className="flex flex-wrap gap-3 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="min-h-11 px-1 py-3 hover:text-cream">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
