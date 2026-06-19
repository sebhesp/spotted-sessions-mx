import { navigation } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-serif text-2xl text-cream">SPOTTED Sessions MX</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-cream-muted">
            A home for emerging artists. Música, comunidad y hospitalidad en sesiones hechas con intención.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-cream-muted">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-amber">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
