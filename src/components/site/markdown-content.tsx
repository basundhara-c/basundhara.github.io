import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

function inlineMarkdown(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded-sm bg-secondary px-1 py-0.5 font-mono text-[0.85em]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (linkMatch) {
      return (
        <a
          key={`${part}-${index}`}
          href={linkMatch[2]}
          target="_blank"
          rel="noreferrer"
          className="break-words font-medium text-foreground underline underline-offset-4 hover:text-[#476a60] [overflow-wrap:anywhere]"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}

export function MarkdownContent({ body }: { body: string }) {
  const lines = body.split("\n");
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    nodes.push(
      <ul key={`list-${nodes.length}`} className="my-5 list-disc space-y-2 pl-5">
        {listItems.map((item) => (
          <li key={item}>{inlineMarkdown(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  }

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (!line.trim()) {
      return;
    }

    if (line.startsWith("## ")) {
      nodes.push(
        <h2
          key={`h2-${nodes.length}`}
          className="mt-10 text-2xl font-semibold tracking-normal"
        >
          {line.slice(3)}
        </h2>,
      );
      return;
    }

    if (line.startsWith("### ")) {
      nodes.push(
        <h3
          key={`h3-${nodes.length}`}
          className="mt-8 text-lg font-semibold tracking-normal"
        >
          {line.slice(4)}
        </h3>,
      );
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      nodes.push(
        <p
          key={`step-${nodes.length}`}
          className="my-3 rounded-md border border-border bg-card px-3 py-2 text-sm"
        >
          {inlineMarkdown(line)}
        </p>,
      );
      return;
    }

    nodes.push(
      <p key={`p-${nodes.length}`} className="my-4 leading-7 text-muted-foreground">
        {inlineMarkdown(line)}
      </p>,
    );
  });

  flushList();

  return <div className="text-base break-words">{nodes}</div>;
}

export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="rounded-md border-[#d7dedb]">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
