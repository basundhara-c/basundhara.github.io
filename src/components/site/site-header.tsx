import { portfolio } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="text-sm font-semibold tracking-normal">
          {portfolio.name}
        </a>
        <div className="flex items-center gap-3 text-sm text-muted-foreground sm:gap-5">
          {portfolio.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
