import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { BrandIcon, type BrandIconName } from "@/components/site/brand-icon";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";

type Entry = {
  title: string;
  description: string;
  tags: readonly string[];
  meta: readonly string[];
  href?: string;
  logo?: BrandIconName;
};

export function EntryListSection({
  id,
  eyebrow,
  title,
  icon,
  entries,
  tagStyle = "secondary",
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  entries: readonly Entry[];
  tagStyle?: "secondary" | "outline";
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <SectionHeading eyebrow={eyebrow} title={title} icon={icon} />
      <div className="mt-8 divide-y divide-border">
        {entries.map((entry) => {
          const [date, ...secondaryMeta] = entry.meta;

          return (
            <article key={entry.title} className="py-6">
              <div className="mb-3 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>{date}</p>
                {secondaryMeta.length > 0 ? (
                  <p className="shrink-0 text-right">
                    {secondaryMeta.join(" · ")}
                  </p>
                ) : null}
              </div>
              <div>
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="group inline-flex items-center gap-2 text-xl font-semibold tracking-normal underline-offset-4 hover:text-[#476a60] hover:underline"
                  >
                    {entry.logo ? (
                      <BrandIcon name={entry.logo} className="size-5" />
                    ) : null}
                    {entry.title}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <h3 className="flex items-center gap-2 text-xl font-semibold tracking-normal">
                    {entry.logo ? (
                      <BrandIcon name={entry.logo} className="size-5" />
                    ) : null}
                    {entry.title}
                  </h3>
                )}
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {entry.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={tagStyle}
                      className={
                        tagStyle === "outline"
                          ? "rounded-md border-[#d7dedb]"
                          : "rounded-md bg-secondary/80"
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
