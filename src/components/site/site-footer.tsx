import { BrandIcon } from "@/components/site/brand-icon";
import { ExternalLink } from "@/components/site/external-link";
import { portfolio } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>{portfolio.name}</p>
        <p>{portfolio.footerNote}</p>
        <div className="flex gap-4">
          {portfolio.profileLinks.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              <BrandIcon name={link.kind} />
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
