# A.N.K — Personal Website

This is my personal website and blog. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Features a home page, about, blog (MDX), projects, and tag-based post listing.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com) v4
- **Content:** MDX via `next-mdx-remote`, `gray-matter`, `reading-time`, `rehype-slug`, `rehype-autolink-headings`, `remark-gfm`
- **Language:** TypeScript

## Project Structure

```
app/
  page.tsx              # Home (hero, writing preview, projects preview)
  layout.tsx            # Root layout, fonts (Libre Baskerville, DM Mono)
  about/page.tsx        # About page
  posts/page.tsx       # Blog index
  blog/[...slug]/      # Individual blog posts (MDX)
  projects/page.tsx    # Projects list
  tags/[tag]/page.tsx  # Posts by tag
  components/          # Nav, Hero, Layout, PostLayout, TOC, etc.
content/blog/          # MDX blog posts
lib/                   # blog, mdx, tags, siteMetadata, projectsData, etc.
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Adding Blog Posts

Add `.mdx` files under `content/blog/`. Use frontmatter with `title`, `date`, and optional `tags` (and other fields your layout expects). The blog index and home page pull from these files automatically.

## Deploy

The app is suitable for [Vercel](https://vercel.com) or any Node.js host. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
