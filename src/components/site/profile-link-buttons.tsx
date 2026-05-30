import { BrandIcon } from "@/components/site/brand-icon";
import { buttonVariants } from "@/components/ui/button";
import type { PortfolioLink } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ProfileLinkButtons({
  links,
}: {
  links: readonly PortfolioLink[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => {
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
            <BrandIcon name={link.kind} />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
