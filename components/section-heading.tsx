type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-[0.96] text-cream sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-cream-muted sm:text-lg">{body}</p> : null}
    </div>
  );
}
