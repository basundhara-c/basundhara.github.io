import { notFound } from "next/navigation";
import Link from "next/link";

import { MarkdownContent, TagList } from "@/components/site/markdown-content";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Separator } from "@/components/ui/separator";
import { getWritingPost, getWritingPosts } from "@/lib/content";
import { portfolio } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return getWritingPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | ${portfolio.name}`,
    description: post.summary,
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article className="mx-auto w-full max-w-3xl px-5 py-12 md:px-8">
        <Link
          href="/#writing"
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Back to writing
        </Link>
        <p className="mt-8 text-sm text-muted-foreground">
          {post.date} · {post.readTime}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {post.summary}
        </p>
        <div className="mt-6">
          <TagList tags={post.tags} />
        </div>
        <Separator className="my-10" />
        <MarkdownContent body={post.body} />
      </article>
      <SiteFooter />
    </main>
  );
}
