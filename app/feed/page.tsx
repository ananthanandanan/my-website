import type { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetadata";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";

const feedUrl = `${siteMetadata.siteUrl}/feed.xml`;
const feedlyUrl = `https://feedly.com/i/subscription/feed/${encodeURIComponent(feedUrl)}`;
const inoreaderUrl = `https://www.inoreader.com/?add_feed=${encodeURIComponent(feedUrl)}`;

export const metadata: Metadata = {
  title: "RSS Feed",
  description: "Subscribe to the RSS feed for new posts.",
};

export default function FeedPage() {
  return (
    <div className={WRAP}>
      <header className="mb-8 pt-16">
        <div
          className="type-eyebrow mb-3 flex items-center gap-3 text-accent"
          style={{ letterSpacing: "0.2em" }}
        >
          <span className="inline-block h-px w-5 bg-accent opacity-60" aria-hidden />
          Subscribe
        </div>
        <h1 className="font-(family-name:--font-libre-baskerville) text-[clamp(1.95rem,3.4vw,2.25rem)] leading-[1.2] font-bold text-warm">
          Follow via RSS
        </h1>
        <p className="type-lead measure-readable mt-2">
          Use your favorite feed reader to get new posts without social media.
        </p>
      </header>

      <div className="space-y-5 pb-14">
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            Quick subscribe
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={feedlyUrl}
              target="_blank"
              rel="noreferrer"
              className="type-meta inline-flex items-center rounded-full border border-accent/25 bg-accent-dim px-4 py-2 uppercase tracking-[0.12em] text-accent no-underline transition-colors hover:border-accent hover:text-text"
            >
              Open in Feedly
            </a>
            <a
              href={inoreaderUrl}
              target="_blank"
              rel="noreferrer"
              className="type-meta inline-flex items-center rounded-full border border-border bg-surface-2 px-4 py-2 uppercase tracking-[0.12em] text-text-mid no-underline transition-colors hover:border-accent hover:text-accent"
            >
              Open in Inoreader
            </a>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            Feed URL
          </h2>
          <p className="type-body mt-3 leading-[1.8] text-text-mid">
            Copy this URL and paste it into any RSS app:
          </p>
          <a
            href="/feed.xml"
            className="type-body mt-4 block break-all rounded-lg border border-border bg-surface-2 px-4 py-3 text-text no-underline transition-colors hover:border-accent"
          >
            {feedUrl}
          </a>
        </section>
      </div>
    </div>
  );
}
