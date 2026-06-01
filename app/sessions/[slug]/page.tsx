import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtistCodeTag } from "@/components/ArtistCodeTag";
import { BrandStamp } from "@/components/BrandStamp";
import { FrameCorners } from "@/components/FrameCorners";
import { SectionLabel } from "@/components/SectionLabel";
import { sessions } from "@/lib/data";

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
  const session = sessions.find((item) => item.slug === slug);

  return {
    title: session ? `${session.id} ${session.artist}` : "Session",
  };
}

export default async function SessionDetailPage({ params }: SessionDetailPageProps) {
  const { slug } = await params;
  const session = sessions.find((item) => item.slug === slug);

  if (!session) {
    notFound();
  }

  const details = [
    ["SESSION ID", session.id],
    ["ARTIST", session.artist],
    ["TRACK", session.track],
    ["LOCATION", session.location],
    ["DATE", session.date],
    ["FORMAT", session.format],
    ["STATUS", session.status],
  ];

  return (
    <main>
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code={session.id}>Session detail</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <ArtistCodeTag code={session.id} status={session.status} />
            <h1 className="display-type mt-5 text-6xl font-black uppercase leading-none md:text-9xl">
              {session.artist}
            </h1>
            <p className="mt-4 text-2xl text-foreground">"{session.track}"</p>
          </div>
          <p className="max-w-xl self-end text-lg leading-relaxed text-muted">{session.logline}</p>
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden border border-border bg-card">
          <div className={`absolute inset-0 bg-gradient-to-br ${session.imageTone}`} />
          <div className="scanline absolute inset-0 opacity-40" />
          <FrameCorners />
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between text-xs uppercase text-muted">
              <span>CAM A / 24FPS</span>
              <span className="text-red">VIDEO PLACEHOLDER</span>
            </div>
            <div>
              <BrandStamp label="Cinematic hold" />
              <p className="display-type mt-4 max-w-2xl text-5xl font-black uppercase leading-none md:text-7xl">
                Before the noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-14">
        <div className="spotted-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel code="TECH" className="mb-4">Ficha técnica</SectionLabel>
            <dl className="grid gap-0 border-t border-border">
              {details.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7.5rem_1fr] border-b border-border py-3 text-sm">
                  <dt className="uppercase text-muted">{label}</dt>
                  <dd className="uppercase text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionLabel code="NOTE" className="mb-4">Before the noise</SectionLabel>
            <p className="max-w-3xl text-3xl leading-tight text-foreground md:text-5xl">
              {session.beforeNoise}
            </p>
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="GALLERY">Visual placeholders</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <div className={`absolute inset-0 bg-gradient-to-br ${session.imageTone}`} />
              <div className="scanline absolute inset-0 opacity-30" />
              <FrameCorners />
              <span className="absolute bottom-4 left-4 text-xs uppercase text-muted">
                {session.id} / FRAME 0{item}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
