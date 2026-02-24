import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import { getPostMeta, getPostFilePath } from "@/lib/blog";
import { compilePostMdx } from "@/lib/mdx";
import { extractTocFromSource } from "@/lib/toc";
import { formatDate } from "@/lib/formatDate";
import { PostLayout } from "../../components/PostLayout";
import { siteMetadata } from "@/lib/siteMetadata";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugSegments } = await params;
  const slug = slugSegments.join("/");
  const meta = getPostMeta(slug);
  if (!meta) return { title: "Post not found" };
  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
      publishedTime: meta.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug: slugSegments } = await params;
  const slug = slugSegments.join("/");
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  const filePath = getPostFilePath(slug);
  const raw = fs.readFileSync(filePath, "utf-8");
  const toc = extractTocFromSource(raw);
  const { content } = await compilePostMdx(raw);

  return (
    <PostLayout
      meta={meta}
      toc={toc}
      formattedDate={formatDate(meta.date, "long")}
      readingTimeText={meta.readingTime.text}
    >
      {content}
    </PostLayout>
  );
}

export async function generateStaticParams() {
  const { getBlogSlugs } = await import("@/lib/blog");
  const slugs = getBlogSlugs();
  return slugs.map((s) => ({ slug: s.split("/") }));
}
