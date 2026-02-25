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
    "type-chip lowercase rounded-[3px] px-2 py-0.5",
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
