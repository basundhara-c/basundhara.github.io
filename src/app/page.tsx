import { BookOpenText, BriefcaseBusiness } from "lucide-react";

import { ContactSection } from "@/components/site/contact-section";
import { EntryListSection } from "@/components/site/entry-list-section";
import { HeroSection } from "@/components/site/hero-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TimelineSection } from "@/components/site/timeline-section";
import { Separator } from "@/components/ui/separator";
import { getWritingPosts } from "@/lib/content";
import { portfolio } from "@/lib/portfolio-data";

export default function Home() {
  const workEntries = portfolio.work.map((item) => ({
    ...item,
    meta: [item.year, item.role],
  }));

  const writingEntries = getWritingPosts().map((post) => ({
    title: post.title,
    description: post.summary,
    tags: post.tags,
    meta: [post.date, post.readTime],
    href: `/writing/${post.slug}/`,
  }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div id="top" className="mx-auto w-full max-w-5xl px-5 py-12 md:px-8">
        <HeroSection />

        <Separator className="my-12" />

        <EntryListSection
          id="work"
          eyebrow="Selected work"
          title="Operational product work with a clear point of view."
          icon={BriefcaseBusiness}
          entries={workEntries}
        />

        <Separator className="my-12" />

        <TimelineSection />

        <Separator className="my-12" />

        <EntryListSection
          id="writing"
          eyebrow="Writing"
          title="Rendered from Markdown notes and writing briefs."
          icon={BookOpenText}
          entries={writingEntries}
          tagStyle="outline"
        />

        <Separator className="my-12" />

        <ContactSection />
      </div>

      <SiteFooter />
    </main>
  );
}
