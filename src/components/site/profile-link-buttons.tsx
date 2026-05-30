import { Code2, IdCard, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { PortfolioLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const linkIcons = {
  email: Mail,
  github: Code2,
  linkedin: IdCard,
} as const;

export function ProfileLinkButtons({
  links,
}: {
  links: readonly PortfolioLink[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => {
        const Icon = linkIcons[link.kind];

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-md border-[#d7dedb] bg-background text-foreground hover:bg-[#f5faf7]",
            )}
          >
            <Icon className="size-3.5" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
