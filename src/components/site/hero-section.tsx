import { ProfileLinkButtons } from "@/components/site/profile-link-buttons";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section>
      <div className="max-w-3xl">
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-balance text-foreground">
          {portfolio.intro}
        </h1>

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
