"use client";

import { useMemo, useState } from "react";
import { PostListItem } from "@/app/components/PostListItem";
import { Tag } from "@/app/components/Tag";
import type { PostMeta } from "@/lib/blog";
import type { getAllTagsFromPosts } from "@/lib/tags";

type TagItem = ReturnType<typeof getAllTagsFromPosts>[number];

export function PostsListClient({
  initialPosts,
  initialTags,
  postsPerPage,
  totalPages,
  defaultTag = null,
}: {
  initialPosts: PostMeta[];
  initialTags: TagItem[];
  postsPerPage: number;
  totalPages: number;
  defaultTag?: string | null;
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(defaultTag);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = initialPosts;
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeTag) {
      list = list.filter((p) =>
        p.normalizedTags.includes(activeTag)
      );
    }
    return list;
  }, [initialPosts, search, activeTag]);

  const paginated = useMemo(() => {
    const start = (page - 1) * postsPerPage;
    return filtered.slice(start, start + postsPerPage);
  }, [filtered, page, postsPerPage]);

  const totalFilteredPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <>
      <div className="relative mb-10">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim pointer-events-none"
          aria-hidden
        >
          <svg width={16} height={16} fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full bg-surface border border-border rounded-md py-3 pl-11 pr-4 text-text font-mono text-sm outline-none transition-[border-color] focus:border-[rgba(74,158,255,.4)]"
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveTag(null);
            setPage(1);
          }}
          className={`text-[10px] tracking-[0.08em] lowercase py-0.5 px-3 rounded-full border font-mono cursor-pointer transition-all ${
            activeTag === null
              ? "border-[rgba(74,158,255,.4)] text-accent bg-accent-dim"
              : "border-border text-text-dim bg-transparent hover:border-[rgba(74,158,255,.4)] hover:text-accent hover:bg-accent-dim"
          }`}
        >
          all
        </button>
        {initialTags.map(({ tag, normalized }) => (
          <button
            key={normalized}
            type="button"
            onClick={() => {
              setActiveTag(normalized);
              setPage(1);
            }}
            className={`text-[10px] tracking-[0.08em] lowercase py-0.5 px-3 rounded-full border font-mono cursor-pointer transition-all ${
              activeTag === normalized
                ? "border-[rgba(74,158,255,.4)] text-accent bg-accent-dim"
                : "border-border text-text-dim bg-transparent hover:border-[rgba(74,158,255,.4)] hover:text-accent hover:bg-accent-dim"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul className="list-none">
        {paginated.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ul>

      {totalFilteredPages > 1 && (
        <nav
          className="mt-10 flex items-center justify-between border-t border-border pt-6"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="text-[10px] uppercase tracking-widest text-text-dim disabled:opacity-40 cursor-pointer hover:text-accent"
          >
            ← Newer
          </button>
          <span className="text-[11px] text-text-mid">
            Page {page} of {totalFilteredPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalFilteredPages, p + 1))}
            disabled={page >= totalFilteredPages}
            className="text-[10px] uppercase tracking-widest text-text-dim disabled:opacity-40 cursor-pointer hover:text-accent"
          >
            Older →
          </button>
        </nav>
      )}
    </>
  );
}
