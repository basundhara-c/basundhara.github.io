import { Milestone } from "lucide-react";

import { SectionHeading } from "@/components/site/section-heading";
import { portfolio } from "@/lib/portfolio-data";

export function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Timeline"
        title="Work and writing as one public narrative."
        icon={Milestone}
      />
      <div className="mt-8 border-l border-border pl-6">
        {portfolio.timeline.map((item) => (
          <article key={item.title} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[31px] top-1 size-2.5 rounded-full border border-[#476a60] bg-background" />
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-normal">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
