import { ArrowUpRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid scroll-mt-20 gap-6 rounded-md border border-border bg-card p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
    >
      <div>
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#476a60]">
          <Sparkles className="size-3.5" />
          {portfolio.contact.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-normal">
          {portfolio.contact.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          {portfolio.contact.description}
        </p>
      </div>
      <a
        href={`mailto:${portfolio.email}`}
        className={cn(
          buttonVariants({ size: "lg" }),
          "w-fit rounded-md bg-[#2f554a] text-white hover:bg-[#25453c]",
        )}
      >
        {portfolio.contact.cta}
        <ArrowUpRight className="size-4" />
      </a>
    </section>
  );
}
