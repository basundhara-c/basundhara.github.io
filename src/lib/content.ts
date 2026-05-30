import fs from "node:fs";
import path from "node:path";

const writingDirectory = path.join(process.cwd(), "src/content/writing");

export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  tags: string[];
  body: string;
};

type FrontMatter = Omit<WritingPost, "slug" | "body" | "tags"> & {
  tags: string[];
};

function parseFrontMatter(markdown: string): {
  frontMatter: FrontMatter;
  body: string;
} {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Markdown file is missing front matter.");
  }

  const data = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...rest] = line.split(":");
      const value = rest.join(":").trim();
      return [key.trim(), value.replace(/^"|"$/g, "")];
    }),
  );

  return {
    frontMatter: {
      title: data.title,
      date: data.date,
      publishedAt: data.publishedAt ?? data.date,
      readTime: data.readTime,
      summary: data.summary,
      tags: data.tags
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((tag) => tag.trim().replace(/^"|"$/g, "")),
    },
    body: match[2].trim(),
  };
}

export function getWritingPosts(): WritingPost[] {
  return fs
    .readdirSync(writingDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const markdown = fs.readFileSync(path.join(writingDirectory, file), "utf8");
      const { frontMatter, body } = parseFrontMatter(markdown);

      return {
        slug,
        ...frontMatter,
        body,
      };
    })
    .sort((a, b) => {
      const aTime = Date.parse(a.publishedAt);
      const bTime = Date.parse(b.publishedAt);

      if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
        return b.date.localeCompare(a.date);
      }

      return bTime - aTime;
    });
}

export function getWritingPost(slug: string): WritingPost | undefined {
  return getWritingPosts().find((post) => post.slug === slug);
}
