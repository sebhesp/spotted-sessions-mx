import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
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
      title: "Sesion",
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
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sesiones",
        item: "/sessions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: session.artist.name,
        item: `/sessions/${session.slug}`,
      },
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

      <section className="spotted-container py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow>{session.id} / {session.status}</Eyebrow>
            <h1 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl lg:text-8xl">
              {session.artist.name}
            </h1>
            <p className="mt-4 text-2xl text-cream/88">"{session.track.title}"</p>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">{session.description}</p>
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-sm border border-border bg-black">
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
                className="object-cover opacity-72"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/52" />
              <div className="relative flex h-full flex-col justify-between p-5">
                <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
                  Video placeholder
                </p>
                <div>
                  <h2 className="display-type max-w-3xl text-4xl leading-none text-cream md:text-6xl">
                    Video listo para embed o archivo autorizado.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{session.video.caption}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-y border-border bg-green-deep/36 py-14">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel code="FICHA">Datos</SectionLabel>
            <dl className="grid border-t border-border text-sm">
              {[
                ["Fecha", formatDate(session.date)],
                ["Ciudad", session.location],
                ["Estado", session.status],
                ["Duracion", session.track.duration ?? "Por confirmar"],
                ["Audio", session.audioNotes],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-border py-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-cream">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionLabel code="ARTISTA">Contexto</SectionLabel>
            <p className="text-2xl leading-9 text-cream">{session.artist.bio}</p>
            <p className="mt-5 text-base leading-7 text-muted">{session.track.description}</p>
            {session.artist.links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {session.artist.links.map((link) => (
                  <Link key={link.href} href={link.href} className="underline decoration-burnt-orange underline-offset-4">
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-muted">Links del artista pendientes</p>
            )}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="FOTOS">Fotografias</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {(session.photos.length > 0 ? session.photos : [{ src: session.image, alt: session.imageAlt }]).map(
            (photo, index) => (
              <div key={`${photo.src}-${index}`} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ),
          )}
        </div>
      </section>

      <section className="border-y border-border bg-black/22 py-14 md:py-20">
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
              <p className="text-muted">Creditos por confirmar.</p>
            )}
          </div>
          <div>
            <SectionLabel code="MUSICOS">Musicos</SectionLabel>
            {session.musicians.length > 0 ? (
              <ul className="grid gap-3">
                {session.musicians.map((musician) => (
                  <li key={musician} className="border-b border-border pb-3 text-cream">
                    {musician}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">Musicos por confirmar.</p>
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
              <p className="mt-5 text-sm uppercase tracking-[0.16em] text-muted">Sin marcas asociadas</p>
            )}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="SIGUIENTE">Siguiente sesion</SectionLabel>
        <div className="grid gap-6 rounded-sm border border-border bg-card p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="display-type text-4xl leading-none text-cream">{nextSession.artist.name}</h2>
            <p className="mt-2 text-muted">"{nextSession.track.title}"</p>
          </div>
          <Button href={`/sessions/${nextSession.slug}`} variant="secondary">
            Abrir siguiente
          </Button>
        </div>
      </section>
    </main>
  );
}
