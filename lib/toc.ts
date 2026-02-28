export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3; // h2 or h3
}

/**
 * Extract heading lines from markdown/MDX source to build TOC.
 * Assumes rehype-slug will produce ids from heading text (slug).
 */
export function extractTocFromSource(source: string): TocItem[] {
  const items: TocItem[] = [];
  const slugCounts = new Map<string, number>();
  const lines = source.split("\n");
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) {
      const text = h2[1].replace(/^#+\s*/, "").trim();
      items.push({
        id: getUniqueSlug(text, slugCounts),
        text,
        level: 2,
      });
    } else if (h3) {
      const text = h3[1].replace(/^#+\s*/, "").trim();
      items.push({
        id: getUniqueSlug(text, slugCounts),
        text,
        level: 3,
      });
    }
  }
  return items;
}

function getUniqueSlug(text: string, slugCounts: Map<string, number>): string {
  const baseSlug = slugify(text);
  const count = slugCounts.get(baseSlug) ?? 0;
  slugCounts.set(baseSlug, count + 1);
  return count === 0 ? baseSlug : `${baseSlug}-${count}`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
