import Link from "next/link";
import { Radio } from "lucide-react";

const navItems = [
  { href: "/sessions", label: "Sessions" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="spotted-container flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="display-type flex items-center gap-2 text-2xl font-black uppercase">
          <Radio className="h-5 w-5 text-red" />
          SPOTTED.
        </Link>
        <nav className="flex items-center gap-1 text-xs uppercase text-muted sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-transparent px-2 py-2 transition hover:border-red hover:text-foreground sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
