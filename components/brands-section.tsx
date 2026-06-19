import { ApplicationForm } from "@/components/application-form";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { brandCategories, formConfigs } from "@/lib/constants";

export function BrandsSection() {
  return (
    <section id="marcas" className="paper-edge border-b border-line bg-paper py-16 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <FadeIn>
            <SectionHeading
              eyebrow="Para marcas y patrocinadores"
              title="Las marcas también pueden formar parte de la mesa."
              body="Buscamos aliados que crean en la cultura, la música, la hospitalidad y las comunidades emergentes."
            />
          </FadeIn>

          <div className="mt-8 flex flex-wrap gap-2">
            {brandCategories.map((category, index) => (
              <FadeIn key={category} delay={index * 0.03}>
                <span className="inline-flex border border-line bg-ink/35 px-3 py-2 text-sm text-cream">
                  {category}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.1}>
          <ApplicationForm config={formConfigs.brand} />
        </FadeIn>
      </div>
    </section>
  );
}
