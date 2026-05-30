import { BrandIcon } from "@/components/site/brand-icon";
import { ExternalLink } from "@/components/site/external-link";
import { portfolio } from "@/lib/portfolio-data";

function isIconOnly(kind: string) {
  return kind === "github" || kind === "linkedin";
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>{portfolio.name}</p>
        <p>{portfolio.footerNote}</p>
        <div className="flex flex-wrap items-center gap-4">
          {portfolio.profileLinks.map((link) =>
            isIconOnly(link.kind) ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="inline-flex size-7 items-center justify-center rounded-md text-foreground transition-colors hover:bg-[#f5faf7]"
              >
                <BrandIcon name={link.kind} className="size-4" />
              </a>
            ) : (
              <ExternalLink key={link.label} href={link.href}>
                <BrandIcon name={link.kind} />
                {link.label}
              </ExternalLink>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
