# Basundara Portfolio

A compact portfolio for `basundara.dev`, built with Next.js App Router,
Tailwind CSS, and shadcn/ui.

Writing posts live in `src/content/writing/*.md` and are rendered at
`/writing/[slug]/`.

## Development

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
bun run build
```

The project is configured for static export so it can be deployed from the
generated `out/` directory.
