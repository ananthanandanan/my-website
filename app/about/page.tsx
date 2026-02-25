import { siteMetadata } from "@/lib/siteMetadata";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";

const nowItems = [
  ["Building", "QuestCraft — LLM-powered assessment platform for teachers"],
  ["Learning", "Distributed systems design, Rust for systems programming"],
  ["Reading", "Designing Data-Intensive Applications — Kleppmann"],
  ["Location", "Kollam, Kerala — IST (UTC+5:30)"],
];

const stackGroups = [
  {
    label: "Backend · AI",
    tags: ["Python", "Django", "FastAPI", "LangChain", "Celery"],
    accent: true,
  },
  {
    label: "Infra · Tooling",
    tags: ["PostgreSQL", "Docker", "Linux", "Nginx", "RabbitMQ", "MinIO"],
    accent: false,
  },
  {
    label: "Frontend",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    accent: false,
  },
];

const beliefs = [
  "Boring technology is usually the right technology. Reach for the well-understood tool before the exciting one.",
  "Observability is not optional. If you can't see what your system is doing, you're flying blind.",
  "Ship early, learn constantly. Real users will always teach you things your test suite never will.",
  "Writing clarifies thinking. If you can't explain it in plain prose, you don't fully understand it yet.",
];

const usesGroups = [
  {
    label: "Editor · Terminal",
    items: [
      { name: "Neovim", desc: "Primary editor. Fast, composable, mine." },
      { name: "VS Code", desc: "On the side for larger project navigation." },
    ],
  },
  {
    label: "OS · Hardware",
    items: [
      {
        name: "Arch Linux",
        desc: "Daily driver. I like knowing what's running.",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        name: "Plausible",
        desc: "Analytics. Privacy-first, no cookie banners.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={WRAP}>
      <header className="pt-16">
        <div
          className="type-eyebrow mb-3 flex items-center gap-3 text-accent"
          style={{ letterSpacing: "0.2em" }}
        >
          <span
            className="inline-block h-px w-5 bg-accent opacity-60"
            aria-hidden
          />
          About
        </div>
        <h1 className="font-(family-name:--font-libre-baskerville) text-[clamp(2rem,3.6vw,2.35rem)] leading-[1.2] font-bold text-warm">
          K N Anantha Nandanan
        </h1>
        <p className="type-meta mt-2 uppercase tracking-[0.14em] text-text-dim">
          Backend Engineer · Kerala, India
        </p>
        <div className="type-meta mt-4 inline-flex items-center gap-2 rounded-full border border-[#2ecc7140] bg-[#2ecc7112] px-3.5 py-1.5 uppercase tracking-[0.12em] text-[#7bdc9f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2ecc71]" aria-hidden />
          Open to opportunities
        </div>
      </header>

      <section className="mt-6 space-y-4 pb-12">
        {/* Now Card */}
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="px-6 pt-6 pb-1">
            <div className="type-meta mb-1.5 flex items-center gap-2 uppercase tracking-[0.18em] text-accent">
              <span className="inline-block h-px w-4 bg-border" aria-hidden />
              Now
            </div>
          </div>
          <div className="divide-y divide-border px-6">
            {nowItems.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[80px_1fr] gap-4 py-2 px-2 first:pt-2"
              >
                <div className="type-meta uppercase tracking-[0.14em] text-text-dim">
                  {label}
                </div>
                <div className="type-body leading-[1.75] text-text-mid">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Card */}
        <div className="rounded-xl border border-border bg-surface p-7">
          <p className="type-lead mb-4 measure-readable">
            I&apos;m K N Anantha Nandanan — a software engineer focused on
            scalable backend systems and applying AI to real problems. I&apos;ve
            spent the last few years working across Django, FastAPI, and
            LangChain — most recently on QuestCraft, an LLM-powered assessment
            platform for teachers.
          </p>
          <p className="type-lead mb-4 measure-readable">
            Before that, I worked on infrastructure, DevOps, and self-hosted
            tooling — the kind of work that keeps everything else running. I
            care about systems that are legible, observable, and honest about
            their failure modes.
          </p>
          <p className="type-lead mb-6 measure-readable">
            When I&apos;m not building, I write about what I&apos;m learning
            here. I believe in small, sharp tools, slow reading, and shipping
            things that actually work.
          </p>

          <div className="type-meta mb-3 uppercase tracking-[0.18em] text-text-dim">
            Stack
          </div>
          <div className="flex flex-col gap-3.5">
            {stackGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-2">
                <div className="type-meta uppercase tracking-[0.18em] text-text-dim">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        group.accent
                          ? "rounded-full border border-[#4a9eff33] bg-accent-dim px-3 py-1 text-[11px] tracking-[0.05em] text-accent"
                          : "rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] tracking-[0.05em] text-text-mid transition-colors hover:border-accent hover:text-accent"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beliefs Card */}
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="px-6 pt-6 pb-1">
            <div className="type-meta mb-1.5 flex items-center gap-2 uppercase tracking-[0.18em] text-accent">
              <span className="inline-block h-px w-4 bg-border" aria-hidden />
              Things I believe
            </div>
          </div>
          <div className="divide-y divide-border px-6 pb-6">
            {beliefs.map((item, i) => (
              <div
                key={item}
                className="type-body flex gap-3 py-2 px-2 leading-[1.8] first:pt-2"
              >
                <span className="type-meta w-5 shrink-0 text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-text-mid">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Uses Card */}
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          {usesGroups.map((group, idx) => (
            <div
              key={group.label}
              className={
                idx < usesGroups.length - 1
                  ? "border-b border-border px-5 py-3.5"
                  : "px-5 py-3.5"
              }
            >
              <div className="type-meta mb-2 uppercase tracking-[0.18em] text-text-dim">
                {group.label}
              </div>
              <div className="flex flex-col gap-2">
                {group.items.map(({ name, desc }) => (
                  <div
                    key={name}
                    className="flex flex-wrap gap-2 gap-y-0.5 sm:flex-nowrap sm:gap-4"
                  >
                    <span className="shrink-0 text-[13px] text-[#f5a623]">
                      {name}
                    </span>
                    <span className="type-body leading-[1.65] text-text-dim">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8">
          {siteMetadata.social.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="type-meta uppercase tracking-[0.14em] text-text-dim no-underline transition-colors hover:text-accent"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
