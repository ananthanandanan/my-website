import Link from "next/link";

export function SectionHeader({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="mb-8 flex items-baseline justify-between">
      <h2 className="font-(family-name:--font-libre-baskerville) italic text-[1.45rem] leading-[1.3] font-normal text-warm">
        {title}
      </h2>
      <Link
        href={href}
        className="type-meta uppercase tracking-[0.12em] text-text-dim no-underline transition-colors hover:text-accent"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
