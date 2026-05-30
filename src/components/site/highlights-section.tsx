import { GraduationCap, Network, ShieldCheck, Star } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { portfolio } from "@/lib/portfolio-data";

const icons = [Network, Star, GraduationCap, ShieldCheck] as const;

export function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Highlights"
        title="Documented engineering impact."
        icon={ShieldCheck}
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {portfolio.highlights.map((highlight, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article
              key={highlight.value}
              className="rounded-md border border-border bg-card p-4"
            >
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#476a60]">
                <Icon className="size-3.5" />
                {highlight.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-normal">
                {highlight.value}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {highlight.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
