import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { getSessionBySlug, sessions } from "@/content/site";

type SessionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sessions.map((session) => ({
    slug: session.slug,
  }));
}

export async function generateMetadata({ params }: SessionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const session = getSessionBySlug(slug);

  if (!session) {
    return {
      title: "Sesión",
    };
  }

  return {
    title: `${session.artist.name} - ${session.track.title}`,
    description: session.summary,
    alternates: {
      canonical: `/sessions/${session.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${session.artist.name} - ${session.track.title} | SPOTTED Sessions`,
      description: session.summary,
      url: `/sessions/${session.slug}`,
      images: [
        {
          url: session.image,
          width: 1536,
          height: 1024,
          alt: session.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${session.artist.name} - ${session.track.title}`,
      description: session.summary,
      images: [session.image],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
    timeZone: "America/Mexico_City",
  }).format(new Date(`${date}T12:00:00-06:00`));
}

export default async function SessionDetailPage({ params }: SessionDetailPageProps) {
  const { slug } = await params;
  const session = getSessionBySlug(slug);

  if (!session) {
    notFound();
  }

  const sessionIndex = sessions.findIndex((item) => item.slug === session.slug);
  const nextSession = sessions[(sessionIndex + 1) % sessions.length];
  const photos = session.photos.length > 0 ? session.photos : [{ src: session.image, alt: session.imageAlt }];
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
      { "@type": "ListItem", position: 2, name: "Sesiones", item: "/sessions" },
      { "@type": "ListItem", position: 3, name: session.artist.name, item: `/sessions/${session.slug}` },
    ],
  };
  const videoObject = session.video.embedUrl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `${session.artist.name} - ${session.track.title}`,
        description: session.summary,
        thumbnailUrl: session.image,
        uploadDate: session.date,
        embedUrl: session.video.embedUrl,
      }
    : null;

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {videoObject ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObject) }} />
      ) : null}

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-black">
        <Image
          src={session.image}
          alt={session.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 image-grain" />
        <div className="spotted-container relative flex min-h-[calc(100svh-4rem)] flex-col justify-end py-10">
          <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
            {session.id} / {session.status} / {session.format}
          </p>
          <h1 className="display-type mt-5 text-6xl leading-[0.9] text-cream sm:text-7xl md:text-8xl lg:text-9xl">
            {session.artist.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl leading-tight text-cream/88 md:text-4xl">
            “{session.track.title}”
          </p>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="VIDEO">Pieza principal</SectionLabel>
        <div className="relative aspect-video overflow-hidden bg-black image-grain">
          {session.video.embedUrl ? (
            <iframe
              src={session.video.embedUrl}
              title={`${session.artist.name} - ${session.track.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <>
              <Image
                src={session.video.poster}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-60"
                aria-hidden="true"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/46 p-5 text-center">
                <div>
                  <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
                    Video placeholder
                  </p>
                  <h2 className="display-type mt-4 max-w-3xl text-4xl leading-none text-cream md:text-6xl">
                    Material listo para embed o archivo autorizado.
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted">{session.video.caption}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-y border-border bg-green-deep py-14 md:py-20">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel code="FICHA">Datos de producción</SectionLabel>
            <dl className="grid border-t border-border text-sm">
              {[
                ["Fecha", formatDate(session.date)],
                ["Ciudad", session.city],
                ["Duración", session.track.duration ?? "Por confirmar"],
                ["Formato", session.format],
                ["Audio", session.audioNotes],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-cream">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionLabel code="CONTEXTO">Universo del artista</SectionLabel>
            <p className="text-2xl leading-9 text-cream">{session.description}</p>
            <p className="mt-5 text-base leading-7 text-muted">{session.artist.bio}</p>
            {session.artist.links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {session.artist.links.map((link) => (
                  <Link key={link.href} href={link.href} className="underline decoration-burnt-orange underline-offset-4">
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-6 credit-type text-xs uppercase tracking-[0.16em] text-muted">
                Links del artista pendientes
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="FOTO">Archivo visual</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={`${photo.src}-${index}`} className="relative aspect-[4/5] overflow-hidden bg-green-deep image-grain">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-black/30 py-14 md:py-20">
        <div className="spotted-container grid gap-10 lg:grid-cols-3">
          <div>
            <SectionLabel code="CREDITOS">Equipo</SectionLabel>
            {session.credits.length > 0 ? (
              <dl className="grid gap-3">
                {session.credits.map((credit) => (
                  <div key={`${credit.area}-${credit.name}`} className="border-b border-border pb-3">
                    <dt className="credit-type text-xs uppercase tracking-[0.18em] text-muted">{credit.area}</dt>
                    <dd className="mt-1 text-cream">{credit.name}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-muted">Créditos por confirmar.</p>
            )}
          </div>
          <div>
            <SectionLabel code="MUSICOS">Participantes</SectionLabel>
            {session.musicians.length > 0 ? (
              <ul className="grid gap-3">
                {session.musicians.map((musician) => (
                  <li key={musician} className="border-b border-border pb-3 text-cream">
                    {musician}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">Músicos por confirmar.</p>
            )}
          </div>
          <div>
            <SectionLabel code="CUIDADO">Hospitalidad y marcas</SectionLabel>
            <p className="text-muted">{session.hospitality}</p>
            {session.brandPartners.length > 0 ? (
              <ul className="mt-5 grid gap-3">
                {session.brandPartners.map((partner) => (
                  <li key={partner.name} className="text-sm text-cream">
                    {partner.name}: {partner.integration}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 credit-type text-xs uppercase tracking-[0.16em] text-muted">
                Sin marcas asociadas
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="SIGUIENTE">Siguiente sesión</SectionLabel>
        <div className="grid gap-6 border-y border-border py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="credit-type text-xs uppercase tracking-[0.16em] text-burnt-orange">{nextSession.id}</p>
            <h2 className="mt-2 text-4xl font-semibold leading-none text-cream">{nextSession.artist.name}</h2>
            <p className="mt-2 text-muted">“{nextSession.track.title}”</p>
          </div>
          <Button href={`/sessions/${nextSession.slug}`} variant="secondary">
            Abrir siguiente
          </Button>
        </div>
      </section>
    </main>
  );
}
