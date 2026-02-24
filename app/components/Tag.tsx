import Link from "next/link";

export function Tag({
  tag,
  normalized,
  accent = false,
  asLink = false,
}: {
  tag: string;
  normalized: string;
  accent?: boolean;
  asLink?: boolean;
}) {
  const className = [
    "text-[9.5px] tracking-[0.08em] lowercase rounded-[3px] px-1.5 py-0.5 leading-[1.6]",
    accent
      ? "text-accent bg-accent-dim border border-[rgba(74,158,255,.2)]"
      : "text-text-dim bg-surface border border-border",
  ].join(" ");

  if (asLink) {
    return (
      <Link href={`/tags/${normalized}`} className={className}>
        {tag}
      </Link>
    );
  }
  return <span className={className}>{tag}</span>;
}
