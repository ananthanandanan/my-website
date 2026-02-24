"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/lib/headerNavLinks";

const navMaxWidth = "max-w-[680px]";
const navPadding = "px-6 sm:px-8";

export function Nav({ wide: wideProp }: { wide?: boolean }) {
  const pathname = usePathname();
  const wide = wideProp ?? pathname?.startsWith("/blog/") ?? false;
  return (
    <nav
      className="sticky top-0 z-100 w-full bg-linear-to-b from-bg/95 to-transparent backdrop-blur-sm"
    >
      <div className={`mx-auto w-full ${wide ? "max-w-[920px]" : navMaxWidth} ${navPadding} py-[1.1rem]`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-(family-name:--font-libre-baskerville) italic text-[1.05rem] text-warm no-underline tracking-[0.01em]"
          >
            A<span className="text-accent not-italic">.</span>N
            <span className="text-accent not-italic">.</span>K
          </Link>
          <ul className="flex list-none items-center gap-8">
            {headerNavLinks.map(({ href, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[10px] uppercase tracking-[0.14em] text-text-dim no-underline transition-colors hover:text-text-mid"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/feed.xml"
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-amber no-underline opacity-70 transition-opacity hover:opacity-100"
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
