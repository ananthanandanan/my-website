import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { Tag } from "./Tag";
import type { PostMeta } from "@/lib/blog";

export function PostListItem({ post }: { post: PostMeta }) {
  return (
    <li className="grid grid-cols-[66px_1fr] gap-x-5 rounded-sm border-b border-border-soft py-5 pr-2 pl-2 -mx-2 first:border-t first:border-border-soft group/list hover:bg-white/[0.018]">
      <span className="type-meta pt-0.5 tracking-[0.04em] whitespace-nowrap tabular-nums">
        {formatDate(post.date)}
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <Link
          href={`/blog/${post.slug}`}
          className="text-inherit no-underline group/post"
        >
          <span className="type-title block transition-colors group-hover/list:text-accent">
            {post.title}
          </span>
          <span className="type-body mt-0.5 block measure-readable">
            {post.summary}
          </span>
        </Link>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {post.tags?.map((t, i) => (
            <Tag
              key={t}
              tag={t}
              normalized={post.normalizedTags[i] ?? t}
              asLink
            />
          ))}
        </div>
      </div>
    </li>
  );
}
