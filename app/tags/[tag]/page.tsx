import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";
import { getAllTagsFromPosts } from "@/lib/tags";
import { PostsListClient } from "@/app/posts/PostsListClient";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";
const POSTS_PER_PAGE = 10;

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: PageProps) {
  const { tag: tagSlug } = await params;
  const allPosts = getAllPosts();
  const tags = getAllTagsFromPosts(allPosts);
  const tagInfo = tags.find((t) => t.normalized === tagSlug);
  if (!tagInfo) notFound();

  const filtered = allPosts.filter((p) =>
    p.normalizedTags.includes(tagSlug)
  );
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  return (
    <div className={WRAP}>
      <header className="mb-10 pt-8">
        <h1 className="font-(family-name:--font-libre-baskerville) text-[clamp(2rem,3.3vw,2.5rem)] leading-[1.2] font-bold text-warm">
          Posts tagged “{tagInfo.tag}”
        </h1>
        <p className="type-lead mt-2">
          {filtered.length} post{filtered.length !== 1 ? "s" : ""}.
        </p>
      </header>

      <PostsListClient
        initialPosts={filtered}
        initialTags={tags}
        postsPerPage={POSTS_PER_PAGE}
        totalPages={totalPages}
        defaultTag={tagSlug}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllPosts } = await import("@/lib/blog");
  const { getAllTagsFromPosts } = await import("@/lib/tags");
  const posts = getAllPosts();
  const tags = getAllTagsFromPosts(posts);
  return tags.map((t) => ({ tag: t.normalized }));
}
