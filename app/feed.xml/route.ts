import { getAllPosts } from "@/lib/blog";
import { siteMetadata } from "@/lib/siteMetadata";

const RSS_CONTENT_TYPE = "application/rss+xml; charset=utf-8";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getAbsoluteUrl(path: string): string {
  return `${siteMetadata.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getPostUrl(slug: string, canonicalUrl?: string): string {
  if (canonicalUrl && /^https?:\/\//.test(canonicalUrl)) {
    return canonicalUrl;
  }

  if (canonicalUrl && canonicalUrl.startsWith("/")) {
    return getAbsoluteUrl(canonicalUrl);
  }

  return getAbsoluteUrl(`/blog/${slug}`);
}

function toRfc822(dateString: string): string | null {
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toUTCString();
}

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const siteUrl = siteMetadata.siteUrl;
  const feedUrl = getAbsoluteUrl("/feed.xml");
  const channelPubDate = posts[0]?.date ? toRfc822(posts[0].date) : null;

  const itemsXml = posts
    .map((post) => {
      const url = getPostUrl(post.slug, post.canonicalUrl);
      const pubDate = toRfc822(post.date);

      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink=\"true\">${escapeXml(url)}</guid>`,
        pubDate ? `      <pubDate>${escapeXml(pubDate)}</pubDate>` : "",
        `      <description>${escapeXml(post.summary)}</description>`,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteMetadata.title)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(siteMetadata.description)}</description>
    <language>${escapeXml(siteMetadata.language)}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${channelPubDate ? `    <lastBuildDate>${escapeXml(channelPubDate)}</lastBuildDate>` : ""}
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": RSS_CONTENT_TYPE,
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
