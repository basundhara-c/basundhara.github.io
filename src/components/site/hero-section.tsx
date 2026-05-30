import type { ReactNode } from "react";

import { BrandIcon, type BrandIconName } from "@/components/site/brand-icon";
import { ProfileLinkButtons } from "@/components/site/profile-link-buttons";
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/portfolio-data";

function InlineBrand({
  name,
  children,
}: {
  name: BrandIconName;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-baseline gap-1 whitespace-nowrap align-baseline">
      <BrandIcon name={name} className="size-[0.8em] translate-y-[0.05em]" />
      <span>{children}</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section>
      <div className="max-w-3xl">
        <h1 className="max-w-4xl text-xl font-normal leading-snug tracking-normal text-balance text-foreground sm:text-2xl">
          I am a software engineer focused on secure cloud-native networking
          infrastructure, open-source proxy systems, and distributed systems,
          currently working at <InlineBrand name="databricks">Databricks</InlineBrand>{" "}
          on datapath networking features for network proxies while remaining an
          active <InlineBrand name="envoy">Envoy</InlineBrand> contributor and
          code owner after leading reverse tunnel and API gateway work at{" "}
          <InlineBrand name="nutanix">Nutanix</InlineBrand> and building a
          foundation in network security at{" "}
          <InlineBrand name="cisco">Cisco</InlineBrand>.
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
