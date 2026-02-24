/**
 * Normalize tag to kebab-case for URLs and comparison.
 */
export function normalizeTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Get unique tags from multiple posts, normalized and sorted.
 */
export function getAllTagsFromPosts(
  posts: { tags?: string[] }[]
): { tag: string; normalized: string }[] {
  const seen = new Set<string>();
  const result: { tag: string; normalized: string }[] = [];
  for (const post of posts) {
    for (const t of post.tags ?? []) {
      const n = normalizeTag(t);
      if (!seen.has(n)) {
        seen.add(n);
        result.push({ tag: t, normalized: n });
      }
    }
  }
  result.sort((a, b) => a.normalized.localeCompare(b.normalized));
  return result;
}
