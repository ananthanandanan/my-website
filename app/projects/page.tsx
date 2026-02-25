import { ProjectCard } from "@/app/components/ProjectCard";
import { projectsData } from "@/lib/projectsData";

const WRAP = "mx-auto max-w-[1150px] px-6 sm:px-8";

export default function ProjectsPage() {
  return (
    <div className={WRAP}>
      <header className="mb-12 pt-16">
        <div
          className="type-eyebrow mb-3 flex items-center gap-3 text-accent"
          style={{ letterSpacing: "0.2em" }}
        >
          <span className="inline-block h-px w-5 bg-accent opacity-60" aria-hidden />
          Projects
        </div>
        <h1 className="font-(family-name:--font-libre-baskerville) text-[clamp(1.95rem,3.4vw,2.25rem)] leading-[1.2] font-bold text-warm">
          Things I&apos;ve built
        </h1>
        <p className="type-lead measure-readable mt-2">
          A mix of live products, tools, and experiments.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {projectsData.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
