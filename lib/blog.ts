import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { normalizeTag } from "./tags";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  tags?: string[];
  draft?: boolean;
  summary: string;
  images?: string[];
  layout?: string;
  canonicalUrl?: string;
  authors?: string[];
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: { text: string; minutes: number };
  normalizedTags: string[];
}

function getMdxPaths(dir: string, base = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const paths: string[] = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      paths.push(...getMdxPaths(path.join(dir, e.name), rel));
    } else if (e.isFile() && e.name.endsWith(".mdx")) {
      paths.push(rel.replace(/\.mdx$/, ""));
    }
  }
  return paths;
}

/**
 * All MDX slugs (relative paths without extension) under content/blog.
 */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return getMdxPaths(CONTENT_DIR);
}

/**
 * Get frontmatter + reading time for a post by slug. Returns null if not found or draft.
 */
export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  if (data.draft === true) return null;
  const stats = readingTime(raw);
  const tags = Array.isArray(data.tags) ? data.tags : [];
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    tags,
    draft: data.draft ?? false,
    summary: data.summary ?? "",
    images: data.images,
    layout: data.layout,
    canonicalUrl: data.canonicalUrl,
    authors: data.authors ?? ["default"],
    readingTime: { text: stats.text, minutes: stats.minutes },
    normalizedTags: tags.map(normalizeTag),
  };
}

/**
 * All published posts, sorted by date descending.
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getBlogSlugs();
  const posts: PostMeta[] = [];
  for (const slug of slugs) {
    const meta = getPostMeta(slug);
    if (meta) posts.push(meta);
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

/**
 * Get full file path for a slug (for reading raw content).
 */
export function getPostFilePath(slug: string): string {
  return path.join(CONTENT_DIR, `${slug}.mdx`);
}
