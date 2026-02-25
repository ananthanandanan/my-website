"use client";

import Link from "next/link";
import { headerNavLinks } from "@/lib/headerNavLinks";

const navMaxWidth = "max-w-[1150px]";
const navPadding = "px-6 sm:px-8";

export function Nav({ wide: _wideProp }: { wide?: boolean }) {
  return (
    <nav
      className="sticky top-0 z-100 w-full bg-linear-to-b from-bg/95 to-transparent backdrop-blur-sm"
    >
      <div className={`mx-auto w-full ${navMaxWidth} ${navPadding} py-[1.1rem]`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-(family-name:--font-libre-baskerville) italic text-[1.05rem] text-warm no-underline tracking-[0.01em]"
          >
            A<span className="text-accent not-italic">.</span>N
            <span className="text-accent not-italic">.</span>K
          </Link>
          <ul className="flex list-none items-center gap-2 sm:gap-3">
            {headerNavLinks.map(({ href, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center px-4 py-2 text-[1rem] sm:text-[1.12rem] uppercase tracking-[0.08em] text-text-dim no-underline transition-colors hover:text-text-mid"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/feed.xml"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[1rem] sm:text-[1.12rem] uppercase tracking-[0.08em] text-amber no-underline opacity-70 transition-opacity hover:opacity-100"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse"
                  aria-hidden
                />
                RSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
