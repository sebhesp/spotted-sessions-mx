import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { brandCopy } from "@/lib/brand";

const footerLinks = [
  { href: "/sessions", label: "Archivo" },
  { href: "/about", label: "Manifiesto" },
  { href: "/join", label: "Aplicar" },
  { href: "/brands", label: "Alianzas" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-black py-10">
      <div className="spotted-container grid gap-8 text-sm text-muted md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3 text-cream">
            <LogoMark className="h-10 w-10" label={null} />
            <p className="credit-type text-xs uppercase tracking-[0.18em]">SPOTTED Sessions</p>
          </div>
          <p className="mt-4 max-w-xl text-base leading-7">{brandCopy.tagline}</p>
          <p className="mt-3 max-w-xl leading-6">
            Archivo cultural contemporáneo de sesiones musicales íntimas desde El Cuarto de Atrás.
          </p>
        </div>
        <nav aria-label="Navegación de pie" className="flex flex-wrap gap-3 md:justify-end">
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
