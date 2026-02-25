import Link from "next/link";
import { Tag } from "./Tag";
import { ReadProgress } from "./ReadProgress";
import { TOC } from "./TOC";
import type { PostMeta } from "@/lib/blog";
import type { TocItem } from "@/lib/toc";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";

export function PostLayout({
  meta,
  toc,
  formattedDate,
  readingTimeText,
  children,
}: {
  meta: PostMeta;
  toc: TocItem[];
  formattedDate: string;
  readingTimeText: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadProgress />
      <div className={`${WRAP} grid grid-cols-1 gap-16 py-0 md:grid-cols-[1fr_180px] md:items-start`}>
        <article>
          <header className="pb-10 pt-16">
            <div
              className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent"
              style={{ letterSpacing: "0.22em" }}
            >
              <span
                className="inline-block h-px w-5 bg-accent opacity-60"
                aria-hidden
              />
              {meta.tags?.slice(0, 3).map((t, i) => (
                <Link
                  key={t}
                  href={`/tags/${meta.normalizedTags[i] ?? t}`}
                  className="text-accent no-underline hover:underline"
                >
                  {t}
                </Link>
              ))}
            </div>
            <h1 className="font-(family-name:--font-libre-baskerville) mb-5 text-[clamp(2rem,4vw,2.45rem)] font-bold leading-[1.2] tracking-tight text-warm">
              {meta.title}
            </h1>
            <div className="mb-6 flex items-center gap-6 text-[11px] uppercase tracking-[0.14em] text-text-dim">
              <span>{formattedDate}</span>
              <span>{readingTimeText}</span>
            </div>
            <p className="mb-8 border-l-2 border-border pl-5 text-[14.5px] leading-[1.85] text-text-mid">
              {meta.summary}
            </p>
          </header>
          <div className="prose-post">{children}</div>
        </article>
        <aside className="hidden md:block">
          <TOC items={toc} />
        </aside>
      </div>
    </>
  );
}
