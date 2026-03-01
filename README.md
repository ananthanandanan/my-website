# A.N.K - Personal Website

Personal website and blog built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **UI:** React 19, [Tailwind CSS](https://tailwindcss.com) v4
- **Content pipeline:** MDX via `next-mdx-remote`, `gray-matter`, `reading-time`, `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code`
- **Language:** TypeScript (strict mode)

## Features

- Home, About, Projects, Posts, Tags, and License routes
- MDX blog with static route generation (`app/blog/[...slug]`)
- Post list search + tag filtering + pagination (`app/posts/PostsListClient.tsx`)
- Custom MDX renderers for code blocks, definition lists, numbered steps, and task lists
- Editorial dark theme with tokenized styles in `app/globals.css`

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  about/page.tsx
  blog/[...slug]/page.tsx
  license/page.tsx
  posts/page.tsx
  posts/PostsListClient.tsx
  projects/page.tsx
  tags/[tag]/page.tsx
  components/
    CodeBlock.tsx
    DefinitionList.tsx
    Footer.tsx
    Hero.tsx
    Horizon.tsx
    Layout.tsx
    Nav.tsx
    NumberedSteps.tsx
    PostLayout.tsx
    PostListItem.tsx
    ProjectCard.tsx
    ReadProgress.tsx
    SectionHeader.tsx
    TOC.tsx
    Tag.tsx
    mdx-components.tsx

components/
  ProfilePhoto.tsx
  ProseList.tsx
  TaskList.tsx

content/blog/
  WRITING_GUIDE.md
  hacks/
  language/
  tutorial/
  *.mdx

lib/
  blog.ts
  formatDate.ts
  headerNavLinks.ts
  mdx.ts
  projectsData.ts
  siteMetadata.ts
  tags.ts
  toc.ts

public/
  gifs/
  images/
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Run typecheck

## Writing Blog Posts

Add `.mdx` files under `content/blog/`.

Frontmatter used by the app:

- Required in practice: `title`, `date`, `summary`
- Optional: `tags`, `draft`, `images`, `layout`, `canonicalUrl`, `authors`

`draft: true` excludes a post from published listings.

## Deployment

This site is set up to deploy on [Vercel](https://vercel.com), and you can also deploy your own copy there easily.

If you are remixing/forking this project, Vercel is the quickest path: import the repository, keep the default Next.js build settings, and deploy.

## License

This project uses a split licensing approach (also documented on the `/license` page):

- **Written content and original images:** CC BY 4.0 (reuse/remix allowed with attribution)
- **Code snippets in posts:** MIT License
- **Not included for remixing:** personal branding/name/likeness and third-party assets that carry their own licenses
