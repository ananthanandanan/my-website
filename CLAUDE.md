# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website/blog for K N Anantha Nandanan — built with Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, and MDX for content. See `AGENTS.md` for the full conventions reference.

## Commands

```bash
npm run dev          # local dev server
npm run build        # production build (also a strong integration check)
npm run lint         # ESLint
npm run lint -- <file>   # lint a single file
npx tsc --noEmit     # TypeScript typecheck
```

No test runner is configured. Validation = lint + typecheck + build.

## Architecture

- `app/` — Next.js App Router routes and UI components (`app/components/`)
- `lib/` — content helpers (`blog.ts`, `mdx.ts`, `tags.ts`, `toc.ts`) and site config (`siteMetadata.ts`)
- `content/blog/` — MDX posts with YAML frontmatter (`title`, `date`, `summary` required; `tags`, `draft`, `images` optional)
- `public/` — static assets

**Data flow:** `lib/blog.ts` reads `.mdx` files from disk → parses frontmatter with `gray-matter` → `lib/mdx.ts` compiles MDX with `next-mdx-remote` + `rehype-pretty-code` → rendered in `app/blog/[...slug]/page.tsx` via `generateStaticParams`.

**Rendering model:** Server Components by default. `"use client"` only when browser APIs or interactivity is needed. Missing content resolves to `notFound()` at page boundaries, never thrown errors.

**Styling:** Design tokens in `app/globals.css` (`:root` + `@theme inline`). Use tokenized classes (`bg-surface`, `text-text`, `type-hero`, `type-title`, etc.) and preserve the dark editorial aesthetic.

**Path alias:** `@/*` → repository root.

## Key Conventions

- Imports: `@/` aliases, external before internal, `import type` for type-only
- Naming: PascalCase components, camelCase utils, UPPER_SNAKE_CASE constants
- Blog posts with `draft: true` are excluded from all listings
- Tag slugs use `normalizeTag()` → kebab-case

Full conventions, do/don't list, and MDX authoring guide: see `AGENTS.md` and `content/blog/WRITING_GUIDE.md`.
