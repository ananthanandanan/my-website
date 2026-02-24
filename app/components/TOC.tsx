"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

export function TOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0% -70% 0%", threshold: 0 }
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-20" aria-label="On this page">
      <div className="mb-4 text-[9px] uppercase tracking-[0.18em] text-text-dim">
        On this page
      </div>
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item.id}
            className={`mb-1.5 ${item.level === 3 ? "pl-4" : ""}`}
          >
            <a
              href={`#${item.id}`}
              className={`block py-0.5 pl-3 text-[11px] no-underline border-l border-border transition-colors hover:text-accent hover:border-accent leading-snug ${
                item.level === 3 ? "text-[10.5px] opacity-80" : ""
              } ${activeId === item.id ? "text-accent border-accent" : "text-text-dim"}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
