import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Colaboraciones de marca | SPOTTED Sessions",
  description: "Integraciones de marca no invasivas para SPOTTED Sessions.",
  alternates: {
    canonical: "/brands",
  },
};

const criteria = [
  "La marca debe sumar al cuidado del artista, del equipo o de la experiencia.",
  "La presencia no interrumpe la cancion ni ocupa el centro visual sin razon.",
  "La integracion debe poder explicarse desde hospitalidad, utilidad o produccion.",
  "No aceptamos colaboraciones que conviertan la sesion en anuncio disfrazado.",
];

const examples = [
  "Cafe, agua, cocina o mesa para artistas y equipo.",
  "Materiales de styling o set que pertenezcan naturalmente al cuarto.",
  "Apoyo directo a una sesion especifica con credito editorial discreto.",
  "Contenido posterior que explique el proceso sin invadir la pieza principal.",
];

export default function BrandsPage() {
  return (
    <main id="main-content">
      <section className="spotted-container py-12 md:py-20">
        <SectionLabel code="MARCAS">Colaboraciones</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Patrocinio no invasivo</Eyebrow>
            <h1 className="display-type mt-4 text-5xl leading-none text-cream md:text-7xl">
              Una marca puede estar presente sin tapar la cancion.
            </h1>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            SPOTTED busca colaboraciones que eleven la produccion y la experiencia humana. La marca
            entra cuando ayuda a cuidar, producir o contextualizar; no cuando exige protagonismo.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-green-deep/36 py-14 md:py-20">
        <div className="spotted-container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel code="CRITERIOS">Criterios de integracion</SectionLabel>
            <ul className="grid gap-3">
              {criteria.map((item) => (
                <li key={item} className="border-b border-border pb-3 text-base leading-7 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel code="EJEMPLOS">Ejemplos conceptuales</SectionLabel>
            <ul className="grid gap-3">
              {examples.map((item) => (
                <li key={item} className="border-b border-border pb-3 text-base leading-7 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="spotted-container grid gap-8 py-14 md:grid-cols-[0.75fr_1.25fr] md:py-20">
        <div>
          <SectionLabel code="CTA">Hablemos</SectionLabel>
          <h2 className="display-type text-5xl leading-none text-cream">Si la integracion se siente natural, la exploramos.</h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Puedes escribir con una idea clara o con una necesidad abierta. Responderemos con una
            ruta honesta: posible, por ajustar o fuera de lugar.
          </p>
          <div className="mt-7">
            <Button href="#brand-form" variant="secondary">
              Ir al formulario
            </Button>
          </div>
        </div>
        <div id="brand-form">
          <ApplicationForm kind="brand" />
        </div>
      </section>
    </main>
  );
}
