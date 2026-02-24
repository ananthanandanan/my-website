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
  const lines = source.split("\n");
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) {
      items.push({
        id: slugify(h2[1]),
        text: h2[1].replace(/^#+\s*/, "").trim(),
        level: 2,
      });
    } else if (h3) {
      items.push({
        id: slugify(h3[1]),
        text: h3[1].replace(/^#+\s*/, "").trim(),
        level: 3,
      });
    }
  }
  return items;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
