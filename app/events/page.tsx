import Link from "next/link";

export default function EventsPage() {
  return (
    <main id="main-content" className="spotted-container py-20">
      <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">Ruta actualizada</p>
      <h1 className="display-type mt-4 text-5xl text-cream md:text-7xl">Las sesiones ahora viven en el archivo.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Esta ruta se conserva por compatibilidad. Continúa al archivo para consultar sesiones publicadas y próximas.
      </p>
      <Link
        href="/sessions"
        className="mt-8 inline-flex min-h-12 items-center rounded-sm border border-burnt-orange bg-burnt-orange px-5 py-3 text-sm font-semibold text-black transition hover:border-cream hover:bg-cream"
      >
        Abrir sesiones
      </Link>
    </main>
  );
}
