# AGENTS.md

Guidance for coding agents working in this repository.

## Project Snapshot

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- Content pipeline: MDX via `next-mdx-remote` + `gray-matter` + `reading-time`.
- Path alias: `@/*` maps to repository root (see `tsconfig.json`).
- Primary app code lives in `app/` and `lib/`.
- Blog content lives in `content/blog/**/*.mdx`.

## Environment and Package Manager

- Use `npm` (lockfile is `package-lock.json`).
- Install dependencies with `npm install`.
- Node version is not pinned in repo; use a modern LTS compatible with Next.js 16.

## Build, Lint, Typecheck, and Test Commands

### Core commands

- `npm run dev` - start local dev server.
- `npm run build` - create production build.
- `npm run start` - run production server after build.
- `npm run lint` - run ESLint over the project.

### Focused / single-file linting

- `npm run lint -- app/page.tsx` - lint one file.
- `npm run lint -- app/components/Tag.tsx` - lint one component.
- `npm run lint -- lib/blog.ts` - lint one library module.

### Type checking

- `npx tsc --noEmit` - full TypeScript typecheck.
- No dedicated `npm run typecheck` script exists yet; use `npx tsc --noEmit`.

### Tests (current state)

- There is currently no test runner configured (`jest`, `vitest`, `playwright`, etc. not found).
- There are currently no `*.test.*` or `*.spec.*` test files in the repo.
- "Run a single test" is therefore not currently applicable.
- For targeted validation, run:
  - `npm run lint -- <file>`
  - `npx tsc --noEmit`
  - `npm run build` (strong integration check for Next.js routes/components)

### If tests are added later

- Add explicit scripts in `package.json` (for example `test`, `test:watch`, `test:single`).
- Ensure AGENTS.md is updated with exact single-test command syntax.

## Repository Conventions

## File and module layout

- Route files follow Next App Router defaults: `app/**/page.tsx`, `app/layout.tsx`.
- Reusable UI components live in `app/components/`.
- Content/domain helpers live in `lib/`.
- Keep route-level logic in route files; move reusable logic to `lib/` or components.

## Imports

- Prefer absolute alias imports using `@/` for app and lib modules.
- Keep external imports first, then internal imports.
- Use `import type { ... }` for type-only imports.
- Prefer named exports for reusable modules/components.
- Use default exports for Next route entrypoints (`page.tsx`, `layout.tsx`) when required.

## TypeScript and types

- `strict` mode is enabled; write code that passes strict typing.
- Avoid `any`; if unavoidable, isolate and document why (as seen in MDX compile options).
- Use explicit interfaces/types for structured data:
  - Example: `PostFrontmatter`, `PostMeta`, route prop interfaces.
- Prefer narrow unions for finite options (for example date style unions).
- Use `Readonly<{ ... }>` for immutable React prop wrappers when appropriate.

## React and Next.js patterns

- Server Components by default; add `"use client"` only when needed.
- Keep client component state minimal and derived values memoized where helpful.
- For missing route data, use Next APIs like `notFound()` rather than custom error pages.
- Route metadata should be handled through `generateMetadata` when page-specific.
- Use `generateStaticParams` for static content routes where possible.

## Naming conventions

- Components: PascalCase (`PostListItem`, `SectionHeader`).
- Utility functions: camelCase (`formatDate`, `normalizeTag`).
- Constants: UPPER_SNAKE_CASE for module-level fixed values (`POSTS_PER_PAGE`, `WRAP`).
- Types/interfaces: PascalCase (`PageProps`, `PostMeta`).
- Keep names descriptive and domain-specific (use `slugSegments`, `normalizedTags`, etc.).

## Formatting and style

- Follow existing style:
  - 2-space indentation.
  - Semicolons.
  - Double quotes in TS/TSX.
  - Trailing commas where formatter/linter expects them.
- Keep JSX readable; break long prop lists across lines.
- Prefer early returns for guard conditions.
- Keep functions focused and small where possible.

## Error handling and data safety

- Favor graceful fallbacks over throwing for content reads:
  - Return `[]` when directories/content are missing.
  - Return `null` for not-found post metadata.
- Convert missing route data into `notFound()` at page boundaries.
- Validate optional frontmatter fields and provide defaults.
- Avoid leaking raw filesystem or parsing errors to UI.

## MDX/content rules

- Blog files are `.mdx` under `content/blog/`.
- Frontmatter fields used by code include:
  - required in practice: `title`, `date`, `summary`
  - optional: `tags`, `draft`, `images`, `layout`, `canonicalUrl`, `authors`
- `draft: true` means post should not be published/listed.
- Tag URLs should use normalized kebab-case (see `normalizeTag`).

## Styling rules

- Global design tokens are defined in `app/globals.css` under `:root` and `@theme inline`.
- Prefer existing tokenized classes/variables (`text-text`, `bg-surface`, etc.).
- Keep visual changes consistent with the established dark editorial aesthetic.
- Reuse typography utility classes (`type-hero`, `type-title`, `type-meta`, etc.).

## Agent workflow expectations

- Before editing, inspect nearby files for local conventions.
- Make minimal, targeted changes; avoid broad refactors unless requested.
- Do not add new dependencies unless necessary and justified.
- Run relevant checks after changes:
  - At minimum: `npm run lint`
  - For risky/refactor changes: `npx tsc --noEmit` and `npm run build`
- If a command is too expensive, run the most targeted version available and report it.

## Cursor and Copilot Rule Files

- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- `.cursor/plans/blog_implementation_plan_74beaaf8.plan.md` exists, but this is a plan artifact, not an enforced rule file.

## Do/Don't Quick List

- Do use `@/` imports and strict typing.
- Do keep route files thin and push reusable logic into `lib/`.
- Do preserve existing naming/style/token patterns.
- Don't introduce `any` or disable lint rules without strong reason.
- Don't convert server components to client components unless required.
- Don't change blog frontmatter contract without updating all dependent code.
