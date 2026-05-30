import { GraduationCap, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import {
  SiCisco,
  SiDatabricks,
  SiEnvoyproxy,
  SiGithub,
  SiGoogle,
  SiGooglescholar,
  SiNutanix,
} from "react-icons/si";

import { cn } from "@/lib/utils";

const brandIcons = {
  cisco: SiCisco,
  databricks: SiDatabricks,
  email: Mail,
  envoy: SiEnvoyproxy,
  github: SiGithub,
  google: SiGoogle,
  googleScholar: SiGooglescholar,
  linkedin: FaLinkedin,
  nutanix: SiNutanix,
  research: GraduationCap,
} satisfies Record<string, IconType | typeof Mail>;

export type BrandIconName = keyof typeof brandIcons;

const brandColors: Partial<Record<BrandIconName, string>> = {
  cisco: "text-[#1BA0D7]",
  databricks: "text-[#FF3621]",
  envoy: "text-[#A855F7]",
  github: "text-[#181717]",
  google: "text-[#4285F4]",
  googleScholar: "text-[#4285F4]",
  linkedin: "text-[#0A66C2]",
  nutanix: "text-[#024DA1]",
};

export function BrandIcon({
  name,
  className,
}: {
  name: BrandIconName;
  className?: string;
}) {
  const Icon = brandIcons[name];

  return (
    <Icon
      aria-hidden="true"
      className={cn("size-3.5 shrink-0", brandColors[name], className)}
    />
  );
}
