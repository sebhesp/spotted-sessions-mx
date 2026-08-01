import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { LogoMark } from "@/components/LogoMark";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import {
  collaborationRoles,
  getFeaturedSession,
  getPublishedSessions,
  sessions,
  values,
  whatWeDo,
} from "@/content/site";
import { brandCopy } from "@/lib/brand";

export const metadata: Metadata = {
  title: "SPOTTED Sessions | Archivo musical íntimo",
  description:
    "Sesiones musicales íntimas desde El Cuarto de Atrás. Archivo editorial de artistas, canciones, video, fotografía y créditos.",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Mexico_City",
  }).format(new Date(`${date}T12:00:00-06:00`));
}

export default function Home() {
  const featuredSession = getFeaturedSession();
  const archiveSessions = getPublishedSessions().length > 0 ? getPublishedSessions() : sessions;
  const openRoles = collaborationRoles.filter((role) => role.status !== "occupied").slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPOTTED Sessions",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spottedsessions.com",
    slogan: brandCopy.tagline,
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border bg-black">
        <Image
          src={featuredSession.image}
          alt={featuredSession.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/54 to-black/8" />
        <div className="absolute inset-0 image-grain" />
        <div className="spotted-container relative flex min-h-[calc(100svh-4rem)] flex-col justify-between py-7 md:py-10">
          <div className="flex items-center justify-between gap-5">
            <p className="credit-type text-xs uppercase tracking-[0.18em] text-cream/70">
              {featuredSession.id} / {featuredSession.year}
            </p>
            <LogoMark className="h-11 w-11 text-cream/82" label={null} />
          </div>
          <div className="max-w-5xl pb-2">
            <p className="credit-type text-sm uppercase tracking-[0.18em] text-burnt-orange">
              Última sesión / {featuredSession.format}
            </p>
            <h1 className="display-type mt-5 text-6xl leading-[0.9] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
              {featuredSession.artist.name}
            </h1>
            <p className="mt-5 max-w-2xl text-2xl leading-tight text-cream/88 md:text-4xl">
              “{featuredSession.track.title}”
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/sessions/${featuredSession.slug}`}>Ver sesión</Button>
              <Button href="/sessions" variant="secondary">
                Abrir archivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-24">
        <SectionLabel code="ÚLTIMA">Sesión destacada</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative aspect-[16/10] overflow-hidden bg-green-deep image-grain">
            <Image
              src={featuredSession.video.poster}
              alt={featuredSession.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 credit-type bg-black/74 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cream">
              Video / placeholder
            </div>
          </div>
          <div>
            <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">
              {formatDate(featuredSession.date)} / {featuredSession.city} / {featuredSession.track.duration}
            </p>
            <h2 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl">
              Una toma que respira.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">{featuredSession.description}</p>
            <dl className="mt-7 grid border-t border-border text-sm">
              {[
                ["Artista", featuredSession.artist.name],
                ["Canción", featuredSession.track.title],
                ["Formato", featuredSession.format],
                ["Ciudad", featuredSession.city],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-cream">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep py-14 md:py-24">
        <div className="spotted-container">
          <SectionLabel code="ARCHIVO">Sesiones</SectionLabel>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <h2 className="display-type text-5xl leading-none text-cream md:text-7xl">
              Cada sesión debe sentirse como una pieza editorial individual.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              El archivo está diseñado para descubrir artistas, entrar a su universo y leer los
              detalles de producción sin convertir la experiencia en una interfaz pesada.
            </p>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {archiveSessions.map((session, index) => (
              <SessionCard key={session.id} session={session} index={index} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-24">
        <SectionLabel code="MANIFIESTO">Escuchar antes de grabar</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <p className="display-type text-5xl leading-tight text-cream md:text-7xl">
            No prometemos fama. No descubrimos a nadie. Cuidamos una canción hasta que pueda
            sostenerse sola.
          </p>
          <div className="grid content-end gap-4">
            {values.map((value) => (
              <article key={value.title} className="border-t border-border pt-4">
                <h3 className="text-xl font-semibold text-cream">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-black/36 py-14 md:py-24">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel code="CUARTO">El Cuarto de Atrás</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream md:text-7xl">
              Backstage convertido en escenario.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-muted">
            <p>
              Un espacio cálido, privado y ligeramente clandestino. Pocas personas, luz cercana,
              mesa preparada y producción alrededor de la canción.
            </p>
            <p>
              SPOTTED se mueve entre sesión musical privada, fotografía documental, revista
              cultural y archivo de producción.
            </p>
            <ul className="grid gap-3 text-base">
              {whatWeDo.map((item) => (
                <li key={item} className="border-b border-border pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-24">
        <SectionLabel code="COLAB">Colaboradores</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="display-type text-5xl leading-none text-cream md:text-7xl">
              Roles abiertos sin parecer bolsa de trabajo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              La convocatoria vive como libreta de producción: oficios, disponibilidad y cuidado
              por sesión.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {openRoles.map((role) => (
              <article key={role.id} className="border-t border-border pt-4">
                <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">
                  {role.category} / {role.status}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-cream">{role.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-bottle/58 py-14 md:py-24">
        <div className="spotted-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel code="MARCAS">Alianzas discretas</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream md:text-7xl">
              La marca nunca ocupa el centro de la canción.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Hospitalidad, producto en set, patrocinio de sesión, contenido editorial y
              colaboraciones culturales cuando ayudan a sostener la pieza.
            </p>
          </div>
          <Button href="/brands" variant="secondary">
            Ver criterios
          </Button>
        </div>
      </section>
    </main>
  );
}
