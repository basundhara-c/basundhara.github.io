import { MapPin } from "lucide-react";

import { ProfileLinkButtons } from "@/components/site/profile-link-buttons";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section>
      <div className="max-w-3xl">
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
    </section>
  );
}
