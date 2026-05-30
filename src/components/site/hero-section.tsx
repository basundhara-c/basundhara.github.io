import Image from "next/image";
import { MapPin } from "lucide-react";

import { ProfileLinkButtons } from "@/components/site/profile-link-buttons";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1fr)_260px] md:items-start">
      <div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-[#476a60]" />
          {portfolio.tagline}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-normal text-balance text-foreground sm:text-6xl">
          {portfolio.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {portfolio.intro}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {portfolio.current}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {portfolio.focusAreas.map((area) => (
            <Badge
              key={area}
              variant="outline"
              className="h-7 rounded-md border-[#cad8d2] bg-[#f5faf7] px-2.5 text-[#344f46]"
            >
              {area}
            </Badge>
          ))}
        </div>

        <div className="mt-8">
          <ProfileLinkButtons links={portfolio.profileLinks} />
        </div>
      </div>

      <aside className="md:pt-8">
        <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
          <Image
            src={portfolio.image.src}
            alt={portfolio.image.alt}
            width={520}
            height={640}
            priority
            sizes="(min-width: 768px) 260px, 100vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {portfolio.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-border bg-card px-3 py-2"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-medium">{stat.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
