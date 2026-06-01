import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="spotted-container grid gap-8 text-sm text-muted md:grid-cols-[1fr_auto]">
        <div>
          <p className="display-type text-2xl font-black text-foreground">SPOTTED.</p>
          <p className="mt-2 max-w-xl">Talento emergente, capturado antes del ruido.</p>
        </div>
        <div className="flex flex-wrap gap-4 uppercase">
          <Link href="/sessions" className="hover:text-red">Sessions</Link>
          <Link href="/events" className="hover:text-red">Events</Link>
          <Link href="/about" className="hover:text-red">About</Link>
        </div>
      </div>
    </footer>
  );
}
