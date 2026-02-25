import { siteMetadata } from "@/lib/siteMetadata";

const socialIcons: Record<string, { path: string }> = {
  github: {
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
  },
  linkedin: {
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  twitter: {
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.733-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  email: {
    path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
};

function SocialIcon({ icon }: { icon: string }) {
  const path = socialIcons[icon]?.path ?? "";
  return (
    <svg width={11} height={11} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="pt-20">
      <div
        className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent"
        style={{ letterSpacing: "0.22em" }}
      >
        <span
          className="inline-block h-px w-5 bg-accent opacity-60"
          aria-hidden
        />
        Kerala, India · Backend Engineer
      </div>
      <h1 className="font-(family-name:--font-libre-baskerville) mb-6 text-warm text-[clamp(2rem,5.5vw,2.8rem)] font-bold leading-[1.18] tracking-tight">
        Building software that
        <br />
        <em className="text-text">actually works</em> at scale.
        <span
          className="ml-0.5 inline-block h-[0.85em] w-px align-middle bg-accent animate-pulse"
          aria-hidden
        />
      </h1>
      <div className="mb-9 max-w-[560px] text-[14.5px] leading-[1.9] text-text-mid">
        <p className="[&+p]:mt-[0.9rem]">
          I&apos;m <span className="text-accent">K N Anantha Nandanan</span> — a
          software engineer focused on scalable backend systems, DevOps, and
          applied AI. Currently building QuestCraft, an LLM-powered platform
          that helps teachers create better assessments, faster.
        </p>
        <p>
          I write about things I learn, systems I build, and patterns worth
          sharing.
        </p>
      </div>
      <div className="flex items-center gap-6">
        {siteMetadata.social.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-text-dim no-underline transition-colors hover:text-text-mid"
          >
            <SocialIcon icon={s.icon} />
            {s.name}
          </a>
        ))}
      </div>
    </section>
  );
}
