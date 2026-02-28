const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";

export default function LicensePage() {
  return (
    <div className={WRAP}>
      <header className="mb-10 pt-16">
        <div
          className="type-eyebrow mb-3 flex items-center gap-3 text-accent"
          style={{ letterSpacing: "0.2em" }}
        >
          <span className="inline-block h-px w-5 bg-accent opacity-60" aria-hidden />
          Legal
        </div>
        <h1 className="font-(family-name:--font-libre-baskerville) text-[clamp(1.95rem,3.4vw,2.25rem)] leading-[1.2] font-bold text-warm">
          Remix This Site: The Legal Stuff
        </h1>
        <p className="type-lead measure-readable mt-2">
          So, you clicked "Remix this post" down in the footer. Awesome! I firmly
          believe the internet is better when we share, remix, and build on each
          other&apos;s ideas.
        </p>
      </header>

      <div className="space-y-5 pb-14">
        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            The plain-English version
          </h2>
          <p className="type-body mt-3 leading-[1.8] text-text-mid">
            Here is the plain-English breakdown of how you can reuse stuff on this
            website without getting a strongly worded letter from a lawyer.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            ✍️ The Words and Images (Creative Commons)
          </h2>
          <p className="type-body mt-3 leading-[1.8] text-text-mid">
            All written content on this blog (articles, takes, and tutorials) is
            licensed under the Creative Commons Attribution 4.0 International
            License (CC BY 4.0).
          </p>
          <h3 className="type-meta mt-5 uppercase tracking-[0.12em] text-text-dim">
            What this means for you
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">Share it:</strong> You can copy and
              redistribute the material in any medium or format.
            </li>
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">Remix it:</strong> You can remix,
              transform, and build on the material for any purpose, even
              commercially.
            </li>
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">The catch (attribution):</strong> Give
              appropriate credit, add a link back to the original post on this
              site, and mention if you made changes.
            </li>
          </ul>
          <p className="type-lead mt-4 leading-[1.8]">
            TL;DR: Steal my ideas, but please link back to me.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            💻 The Code Snippets (MIT License)
          </h2>
          <p className="type-body mt-3 leading-[1.8] text-text-mid">
            Code snippets, scripts, and terminal commands embedded in posts are
            licensed under the MIT License.
          </p>
          <h3 className="type-meta mt-5 uppercase tracking-[0.12em] text-text-dim">
            What this means for you
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">Go wild:</strong> You can use, copy,
              modify, merge, publish, distribute, sublicense, and sell copies of
              the code in personal, company, or startup projects.
            </li>
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">The catch:</strong> The software is
              provided "as is", without warranty of any kind. If a snippet breaks
              your server, I cannot be held liable.
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 sm:p-7">
          <h2 className="font-(family-name:--font-libre-baskerville) text-[1.45rem] leading-tight text-warm">
            🛑 What You Can&apos;t Remix
          </h2>
          <ul className="mt-3 space-y-2">
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">Branding:</strong> Site logo, design
              files, and personal name or likeness.
            </li>
            <li className="type-body leading-[1.8] text-text-mid">
              <strong className="text-text">Third-party content:</strong>
              Occasionally used images, embeds, or tools created by others follow
              their own licenses.
            </li>
          </ul>
          <p className="type-lead mt-5">Now get out there and build something cool.</p>
        </section>
      </div>
    </div>
  );
}
