import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionLabel } from "@/components/SectionLabel";
import { teamMembers, values } from "@/content/site";
import { brandCopy } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sobre SPOTTED | Musica, intencion y conexion",
  description: "Manifiesto, valores y direccion de SPOTTED Sessions.",
  alternates: {
    canonical: "/about",
  },
};

const manifesto = [
  "El cuarto se abre solo cuando la cancion esta lista para ocuparlo.",
  "No buscamos decir que vimos algo primero.",
  "Escuchamos, adaptamos, cuidamos y documentamos.",
  "La calidad aparece cuando cada persona entiende por que esta ahi.",
  "La pieza final debe sentirse cercana incluso cuando viaje lejos.",
];

const notThis = [
  "No es VIP.",
  "No es lujo falso.",
  "No es un claim de descubrimiento.",
  "No es un festival comprimido en una sala.",
  "No es una marca ocupando el centro de la cancion.",
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="SOBRE">Que es SPOTTED</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>{brandCopy.tagline}</Eyebrow>
            <h1 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl">
              Una plataforma audiovisual para sesiones musicales intimas.
            </h1>
          </div>
          <div className="prose-room max-w-3xl text-lg leading-8 text-muted">
            <p>
              SPOTTED Sessions trabaja con artistas para construir una version cercana de una
              cancion. El espacio, la luz, la direccion y la hospitalidad se adaptan a la pieza.
            </p>
            <p>
              La plataforma acompana y amplifica, pero no se apropia del relato. El artista no es
              materia prima de una narrativa ajena; es la razon por la que el cuarto se enciende.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep/40 py-14 md:py-20">
        <div className="spotted-container grid gap-10 md:grid-cols-2">
          <div>
            <SectionLabel code="NO">Que no es</SectionLabel>
            <ul className="grid gap-3">
              {notThis.map((item) => (
                <li key={item} className="border-b border-border pb-3 text-lg text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel code="CUARTO">El Cuarto de Atras</SectionLabel>
            <p className="display-type text-4xl leading-tight text-cream md:text-5xl">
              El backstage deja de ser pasillo y se vuelve escenario por una noche.
            </p>
            <p className="mt-5 text-base leading-7 text-muted">
              Un espacio privado, calido y ligeramente clandestino. Nada esta ahi para gritar. Todo
              esta ahi para sostener la cancion.
            </p>
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="VALORES">Valores</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="border-t border-border pt-5">
              <h2 className="display-type text-3xl text-cream">{value.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-black/22 py-14 md:py-20">
        <div className="spotted-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel code="EQUIPO">Equipo</SectionLabel>
            <h2 className="display-type text-5xl leading-none text-cream">Roles base cubiertos, colaboraciones abiertas.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article key={member.role} className="border border-border bg-card p-5">
                <p className="credit-type text-xs uppercase tracking-[0.18em] text-burnt-orange">
                  {member.status}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-cream">{member.role}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{member.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spotted-container py-14 md:py-20">
        <SectionLabel code="MANIFIESTO">Manifiesto</SectionLabel>
        <div className="grid gap-4">
          {manifesto.map((line) => (
            <p key={line} className="display-type border-b border-border pb-5 text-3xl leading-tight text-cream md:text-5xl">
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
