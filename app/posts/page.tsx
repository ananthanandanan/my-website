import { getAllPosts } from "@/lib/blog";
import { getAllTagsFromPosts } from "@/lib/tags";
import { PostsListClient } from "./PostsListClient";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";
const POSTS_PER_PAGE = 10;

export default function PostsPage() {
  const allPosts = getAllPosts();
  const tags = getAllTagsFromPosts(allPosts);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return (
    <div className={WRAP}>
      <header className="mb-10 pt-8">
        <h1 className="font-(family-name:--font-libre-baskerville) text-2xl font-bold text-warm">
          All Posts
        </h1>
        <p className="mt-2 text-[13px] text-text-mid">
          Writing about things I learn and systems I build.
        </p>
      </header>

      <PostsListClient
        initialPosts={allPosts}
        initialTags={tags}
        postsPerPage={POSTS_PER_PAGE}
        totalPages={totalPages}
      />
    </div>
  );
}
