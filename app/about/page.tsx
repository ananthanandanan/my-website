import { siteMetadata } from "@/lib/siteMetadata";

const WRAP = "mx-auto max-w-[680px] px-6 sm:px-8";

const skills = [
  "Backend",
  "Python",
  "Django",
  "PostgreSQL",
  "DevOps",
  "Docker",
  "LLMs",
  "System design",
];

export default function AboutPage() {
  return (
    <div className={WRAP}>
      <header className="mb-10 pt-8">
        <h1 className="font-(family-name:--font-libre-baskerville) text-2xl font-bold text-warm">
          About
        </h1>
        <p className="mt-2 text-[13px] text-text-mid">
          K N Anantha Nandanan — backend engineer from Kerala, India.
        </p>
      </header>

      <div className="rounded-lg border border-border bg-surface p-7">
        <p className="mb-4 text-[12.5px] leading-[1.9] text-text-mid">
          I build scalable backend systems and tooling. I care about clean
          architecture, observability, and shipping things that work in
          production.
        </p>
        <p className="mb-4 text-[12.5px] leading-[1.9] text-text-mid">
          Currently focused on applied AI and developer experience. When I&apos;m
          not coding, I read and tinker with side projects.
        </p>
        <p className="mb-6 text-[12.5px] leading-[1.9] text-text-mid">
          You can find me on GitHub, LinkedIn, or via email — links are in the
          footer.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-[10px] tracking-[0.07em] text-text-mid transition-colors hover:border-accent hover:text-accent"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
