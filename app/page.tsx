import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionLabel } from "@/components/SectionLabel";
import { SessionCard } from "@/components/SessionCard";
import { brandAssets, brandCopy } from "@/lib/brand";
import { getFeaturedSession, getPublishedSessions, sessions, teamMembers, values, whatWeDo } from "@/content/site";

export const metadata: Metadata = {
  title: "SPOTTED Sessions | Sesiones musicales intimas en Mexico",
  description:
    "Sesiones musicales intimas en Mexico. El Cuarto de Atras se vuelve escenario para escuchar, adaptar y documentar.",
};

export default function Home() {
  const featuredSession = getFeaturedSession();
  const recentSessions = getPublishedSessions().length > 0 ? getPublishedSessions() : sessions.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPOTTED Sessions",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    slogan: brandCopy.tagline,
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b border-border">
        <Image
          src="/images/back-room-hero.webp"
          alt="Cuarto privado transformado en escenario intimo para SPOTTED Sessions."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-0 room-texture opacity-25" />
        <div className="spotted-container relative flex min-h-[calc(100svh-4rem)] items-end py-12 md:py-16">
          <div className="max-w-4xl">
            <Image
              src={brandAssets.wordmark}
              alt="SPOTTED"
              width={360}
              height={72}
              priority
              className="h-auto w-56 md:w-80"
            />
            <Eyebrow className="mt-8">{brandCopy.concept}</Eyebrow>
            <h1 className="display-type mt-5 max-w-4xl text-4xl leading-[1.02] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
              Sesiones musicales intimas, hechas desde un cuarto que normalmente permanece cerrado.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-cream/82">{brandCopy.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              SPOTTED acompana, escucha, amplifica y documenta. No venimos a decir que descubrimos
              a nadie; venimos a crear junto al artista una pieza cuidada.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/sessions">Ver sesiones</Button>
              <Button href="/join" variant="secondary">
                Aplicar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="spotted-container py-16 md:py-24">
        <SectionLabel code="ULTIMA">Sesion destacada</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>{featuredSession.id}</Eyebrow>
            <h2 className="display-type mt-4 text-5xl leading-none text-cream md:text-6xl">
              {featuredSession.artist.name}
            </h2>
            <p className="mt-3 text-2xl text-cream/88">"{featuredSession.track.title}"</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">{featuredSession.description}</p>
            <div className="mt-7">
              <Button href={`/sessions/${featuredSession.slug}`} variant="secondary">
                Abrir ficha
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border shadow-room">
            <Image
              src={featuredSession.image}
              alt={featuredSession.imageAlt}
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-sm bg-black/58 px-3 py-2 text-xs uppercase tracking-[0.16em] text-cream">
              Placeholder editorial
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep/42 py-16 md:py-24">
        <div className="spotted-container grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel code="CUARTO">El Cuarto de Atras</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream md:text-6xl">
              El backstage se vuelve escenario.
            </h2>
          </div>
          <div className="prose-room max-w-3xl text-lg leading-8 text-muted">
            <p>
              La sesion ocurre en un espacio privado, calido y ligeramente secreto. Durante unas
              horas el cuarto deja de ser fondo: recibe a la cancion, al equipo y a una forma de
              mirar mas cercana.
            </p>
            <p>
              La proximidad es la forma de exclusividad. No hay distancia aspiracional; hay cuidado,
              tiempo, mesa, escucha y una ejecucion precisa.
            </p>
          </div>
        </div>
      </section>

      <section className="spotted-container py-16 md:py-24">
        <SectionLabel code="VALORES">Intencion / Atencion / Calidez / Calidad</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="border-t border-border pt-5">
              <h3 className="display-type text-3xl text-cream">{value.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="spotted-container py-16">
        <SectionLabel code="ARCHIVO">Sesiones recientes</SectionLabel>
        {recentSessions.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recentSessions.map((session, index) => (
              <SessionCard key={session.id} session={session} index={index} />
            ))}
          </div>
        ) : (
          <p className="max-w-xl text-muted">El archivo abrira cuando exista la primera sesion publicada.</p>
        )}
      </section>

      <section className="border-y border-border bg-black/22 py-16 md:py-24">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel code="HACEMOS">Que hacemos</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream md:text-6xl">
              Unimos cancion, imagen, audio y hospitalidad.
            </h2>
          </div>
          <ul className="grid gap-4">
            {whatWeDo.map((item) => (
              <li key={item} className="border-b border-border pb-4 text-lg leading-8 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="spotted-container grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div>
          <SectionLabel code="ARTISTAS">Para artistas</SectionLabel>
          <h2 className="display-type text-5xl leading-none text-cream">Trae una cancion que pida cercania.</h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Adaptamos la sesion alrededor de tu pieza: arreglo, espacio, luz, direccion y ritmo de
            produccion. La meta es elevar lo que ya esta ahi.
          </p>
          <div className="mt-7">
            <Button href="/join">Aplicar como artista</Button>
          </div>
        </div>
        <div>
          <SectionLabel code="JOIN">Join SPOTTED</SectionLabel>
          <h2 className="display-type text-5xl leading-none text-cream">Colaborar tambien debe sentirse cuidado.</h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Trabajamos por sesion, con roles pagados y necesidades variables. El equipo tambien
            recibe hospitalidad, tiempos claros y un cuarto preparado para hacer buen trabajo.
          </p>
          <div className="mt-7">
            <Button href="/join" variant="secondary">
              Ver roles
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-bottle/36 py-16 md:py-24">
        <div className="spotted-container grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel code="HOSPITALIDAD">Cuidado en set</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream md:text-6xl">
              La mesa tambien es parte de la produccion.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Agua, cafe, comida caliente, espacios de espera y comunicacion clara. La hospitalidad no
            es decoracion: es una condicion para que el artista y el equipo puedan estar presentes.
          </p>
        </div>
      </section>

      <section className="spotted-container py-16 md:py-24">
        <SectionLabel code="EQUIPO">Equipo actual</SectionLabel>
        <div className="grid gap-4 md:grid-cols-5">
          {teamMembers.map((member) => (
            <article key={member.role} className="border-t border-border pt-5">
              <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
                {member.status === "occupied" ? "Ocupado ahora" : "Rotativo"}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-cream">{member.role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{member.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="spotted-container grid gap-8 pb-16 md:grid-cols-[0.9fr_1.1fr] md:pb-24">
        <div>
          <SectionLabel code="MARCAS">Colaboraciones</SectionLabel>
          <h2 className="display-type text-5xl leading-none text-cream md:text-6xl">
            Marcas presentes sin interrumpir la sesion.
          </h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-muted">
            La integracion debe sumar al cuidado: hospitalidad, materiales utiles, producto con
            sentido o apoyo directo a la produccion. Si se siente forzado, no entra.
          </p>
          <div className="mt-7">
            <Button href="/brands" variant="secondary">
              Hablar de una colaboracion
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-black py-16 md:py-24">
        <div className="spotted-container max-w-4xl">
          <Eyebrow>Filosofia</Eyebrow>
          <p className="display-type mt-5 text-5xl leading-tight text-cream md:text-7xl">
            No perseguimos la viralidad vacia. Preferimos una pieza que pueda sostenerse cuando el
            ruido baje.
          </p>
        </div>
      </section>
    </main>
  );
}
