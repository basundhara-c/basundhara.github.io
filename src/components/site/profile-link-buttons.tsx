import { BrandIcon } from "@/components/site/brand-icon";
import { buttonVariants } from "@/components/ui/button";
import type { PortfolioLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function isIconOnly(link: PortfolioLink) {
  return link.kind === "github" || link.kind === "linkedin";
}

export function ProfileLinkButtons({
  links,
}: {
  links: readonly PortfolioLink[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => {
        const iconOnly = isIconOnly(link);

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={iconOnly ? link.label : undefined}
            title={iconOnly ? link.label : undefined}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: iconOnly ? "icon-sm" : "sm",
              }),
              "rounded-md border-[#d7dedb] bg-background text-foreground hover:bg-[#f5faf7]",
            )}
          >
            <BrandIcon name={link.kind} />
            {iconOnly ? null : link.label}
          </a>
        );
      })}
    </div>
  );
}
