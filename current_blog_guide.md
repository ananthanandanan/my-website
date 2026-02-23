# My Blog Repository — LLM Digestible Guide

A structured reference for the `my-blog` Next.js blog. Use this when rebuilding or migrating.

---

## 1. Project Overview

- **Name**: tailwind-nextjs-starter-blog (v1.5.4)
- **Framework**: Next.js 14.2.4, React 18.2.0
- **Production**: Preact replaces React in client build (smaller bundle)
- **Export**: Static generation (SSG); Vercel-ready

---

## 2. Directory Structure

```
my-blog/
├── .github/              # GitHub workflows
├── .husky/               # Git hooks (pre-commit lint/format)
├── components/           # React UI components (32 files)
│   ├── analytics/        # GA, Plausible, Umami, SimpleAnalytics
│   ├── framer-motion/    # AnimatedDiv
│   └── social-icons/     # Social media icons
├── css/
│   ├── tailwind.css      # Tailwind base
│   └── prism.css         # Code syntax highlighting
├── data/                 # Content & config (NOT fetched at runtime)
│   ├── authors/*.mdx     # Author profiles
│   ├── blog/**/*.mdx    # Blog posts (can nest: hacks/, language/, tutorial/)
│   ├── headerNavLinks.js
│   ├── projectsData.js
│   └── siteMetadata.js   # Site config (theme, analytics, newsletter, comments)
├── layouts/
│   ├── AuthorLayout.js
│   ├── ListLayout.js     # Post listing + search
│   ├── PostLayout.js     # Full post layout
│   └── PostSimple.js     # Minimal post
├── lib/
│   ├── utils/            # Helpers (formatDate, files, etc.)
│   ├── mdx.js            # MDX bundling, getFileBySlug, getAllFilesFrontMatter
│   ├── generate-rss.js
│   ├── tags.js           # Tag extraction/normalization
│   └── remark-*.js       # Custom remark plugins
├── pages/                # Next.js file-based routing
│   ├── api/              # Newsletter: mailchimp, buttondown, convertkit, klaviyo, revue
│   ├── blog/[...slug].js
│   ├── blog/page/[page].js
│   ├── tags/[tag].js
│   ├── _app.js, _document.js
│   ├── index.js, about.js, posts.js, projects.js, tags.js, tools.js, 404.js
├── public/
│   ├── static/           # Images, favicons
│   ├── feed.xml
│   ├── sitemap.xml
│   └── tags/[tag]/feed.xml
├── scripts/
│   ├── generate-sitemap.js
│   └── next-remote-watch.js  # Hot reload for data/
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 3. Tech Stack

### Core

- Next.js 14.2.4, React 18.2.0, Preact (prod client)

### Styling

- Tailwind CSS 3.0.23
- @tailwindcss/typography, @tailwindcss/forms
- tailwind-scrollbar-hide

### Content

- MDX via mdx-bundler
- gray-matter (frontmatter)
- reading-time

### Markdown Pipeline

- remark-gfm, remark-footnotes, remark-math
- rehype-slug, rehype-autolink-headings, rehype-katex, rehype-prism-plus
- rehype-preset-minify, rehype-citation
- Custom: remark-extract-frontmatter, remark-code-title, remark-toc-headings, remark-img-to-jsx

### UI

- @headlessui/react, @heroicons/react
- framer-motion, react-icons

### Theming

- next-themes (dark mode, class-based)

---

## 4. Data Schemas

### Blog Post Frontmatter (`data/blog/**/*.mdx`)

```yaml
title: string # required
date: string # ISO, e.g. '2025-12-29'
tags: string[] # e.g. ['SaaS', 'UX']
draft: boolean # default false; excludes from build
summary: string # required
images: string[] # optional
layout: string # PostLayout | PostSimple (default PostLayout)
canonicalUrl: string # optional
authors: string[] # default ['default']
```

### Author Frontmatter (`data/authors/*.mdx`)

```yaml
name: string
avatar: string # image path
email: string
linkedin: string
github: string
twitter: string
```

### Projects (`data/projectsData.js`)

```js
{
  title: string,
  description: string,
  imgSrc: string,
  href: string,
  tools: string[],
  deployed?: boolean
}
```

---

## 5. Routing & Pages

| Route               | File                | Purpose                                              |
| ------------------- | ------------------- | ---------------------------------------------------- |
| `/`                 | index.js            | Home: Hero, Skills, RecentProjects, Recent Posts (6) |
| `/about`            | about.js            | About page                                           |
| `/posts`            | posts.js            | All posts, paginated (10/page)                       |
| `/projects`         | projects.js         | Projects grid                                        |
| `/tags`             | tags.js             | All tags                                             |
| `/tags/[tag]`       | tags/[tag].js       | Posts by tag                                         |
| `/tools`            | tools.js            | Tools page                                           |
| `/blog/[...slug]`   | blog/[...slug].js   | Single post (supports nested slugs)                  |
| `/blog/page/[page]` | blog/page/[page].js | Paginated blog listing                               |
| `/404`              | 404.js              | Custom 404                                           |

### API Routes

- `/api/mailchimp`, `/api/buttondown`, `/api/convertkit`, `/api/klaviyo`, `/api/revue` — newsletter signup

---

## 6. Navigation (headerNavLinks.js)

```js
[
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/posts", title: "Posts" },
  { href: "/projects", title: "Projects" },
  {
    type: "dropdown",
    title: "Other",
    links: [
      { href: "/tags", title: "Tags" },
      { href: "/tools", title: "Tools" },
    ],
  },
];
```

---

## 7. Components Inventory

### Layout & Structure

- `LayoutWrapper` — main layout with header/footer
- `SectionContainer` — content wrapper
- `Container` — container
- `MobileNav` — mobile menu

### UI Primitives

- `Link` — custom link
- `Image` — Next/Image wrapper
- `Tag` — tag badge
- `Card` — card
- `ProjectCard` — project card
- `ToolsCard`, `ToolsGrid`

### Page-Specific

- `Hero` — homepage hero
- `Footer` — site footer
- `Skills` — homepage skills
- `RecentProjects` — homepage projects

### Blog

- `MDXComponents` — MDX mapping (pre, a, etc.)
- `Pre` — code block
- `TOCInline` — inline TOC

### UX

- `ThemeSwitch` — dark mode
- `ScrollTop` — scroll to top
- `Pagination` — pagination
- `Notification` — toast/notification

### SEO

- `PageSEO`, `BlogSEO`, `TagSEO` — meta, OG, structured data

### Analytics (optional, via siteMetadata)

- GoogleAnalytics, Plausible, Umami, SimpleAnalytics

---

## 8. Design System (Tailwind)

### Colors

- `primary`: Sky
- `gray`: Neutral
- `cardBg`: #0F141A
- `logoColor`: #46CDCF
- `darkSecondary`: #25282A

### Typography

- Font: Inter Variable
- Prose: @tailwindcss/typography (light/dark variants)
- Custom: links, code, blockquote, lists

### Dark Mode

- `darkMode: 'class'`
- Default theme: dark (siteMetadata.theme)

### Animations

- `wiggle`, `photo-spin` keyframes

---

## 9. Features

| Feature      | Implementation                                                 |
| ------------ | -------------------------------------------------------------- |
| RSS          | `lib/generate-rss.js` → `/feed.xml`, `/tags/[tag]/feed.xml`    |
| Sitemap      | `scripts/generate-sitemap.js` post-build                       |
| Search       | Client-side in ListLayout (title, summary, tags)               |
| Comments     | Giscus (default), Utterances, Disqus                           |
| Newsletter   | Buttondown (configured), Mailchimp, ConvertKit, Klaviyo, Revue |
| Analytics    | Plausible, SimpleAnalytics, Umami, Google Analytics            |
| TOC          | Auto from headings, sticky sidebar, active highlight           |
| Reading time | `reading-time`                                                 |
| Math         | KaTeX (remark-math, rehype-katex)                              |
| Code         | rehype-prism-plus, prism.css                                   |
| Citations    | rehype-citation                                                |

---

## 10. Site Metadata (siteMetadata.js)

```js
{
  title, author, headerTitle, description, language,
  theme: 'dark' | 'light' | 'system',
  siteUrl, siteRepo, siteLogo, image, socialBanner,
  email, github, twitter, linkedin,
  locale: 'en-US',
  analytics: { plausibleDataDomain, simpleAnalytics, umamiWebsiteId, googleAnalyticsId },
  newsletter: { provider: 'buttondown' | 'mailchimp' | ... },
  comment: { provider: 'giscus' | 'utterances' | 'disqus', giscusConfig, ... }
}
```

---

## 11. Build & Scripts

```bash
npm run dev      # next dev
npm run build    # next build && node ./scripts/generate-sitemap
npm run start    # next start
npm run analyze  # Bundle analyzer
npm run lint     # ESLint + fix
```

### Build Output

- Static HTML for all pages
- `public/feed.xml`, `public/sitemap.xml`
- `public/tags/[tag]/feed.xml` per tag

---

## 12. Environment Variables

- `NEXT_PUBLIC_GOOGLE_ANALYTIC_ID`
- `MAILCHIMP_API_KEY`, `MAILCHIMP_API_SERVER`, `MAILCHIMP_AUDIENCE_ID`
- `BUTTONDOWN_API_KEY`, `BUTTONDOWN_API_URL`
- `NEXT_PUBLIC_GISCUS_REPO`, `NEXT_PUBLIC_GISCUS_REPOSITORY_ID`, `NEXT_PUBLIC_GISCUS_CATEGORY`, `NEXT_PUBLIC_GISCUS_CATEGORY_ID`
- (Similarly for Utterances, Disqus, ConvertKit, Klaviyo, Revue)

---

## 13. Content Organization

- **Blog**: `data/blog/` — flat or nested (e.g. `hacks/`, `language/`, `tutorial/`)
- ** slugs **: Derived from file path (e.g. `blog/tutorial/my-post.mdx` → `/blog/tutorial/my-post`)
- **Draft posts**: `draft: true` in frontmatter → excluded from build
- **Tags**: Extracted, kebab-cased; used for filtering and tag pages

---

## 14. MDX Pipeline Summary

1. Read `.mdx`/`.md` from `data/blog` or `data/authors`
2. gray-matter → frontmatter
3. remark plugins: extract frontmatter, TOC headings, GFM, code titles, footnotes, math, img→JSX
4. rehype plugins: slug, autolink headings, KaTeX, Prism, citation, minify
5. mdx-bundler compiles to React
6. Components resolved from `components/` via cwd

---

## 15. Security Headers (next.config.js)

- Content-Security-Policy
- Referrer-Policy, X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Permissions-Policy

---
