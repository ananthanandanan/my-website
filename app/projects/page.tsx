import { ProjectCard } from "@/app/components/ProjectCard";
import { projectsData } from "@/lib/projectsData";

const WRAP = "mx-auto max-w-[680px] px-6 sm:px-8";

export default function ProjectsPage() {
  return (
    <div className={WRAP}>
      <header className="mb-10 pt-8">
        <h1 className="font-(family-name:--font-libre-baskerville) text-2xl font-bold text-warm">
          Projects
        </h1>
        <p className="mt-2 text-[13px] text-text-mid">
          Things I&apos;ve built or contributed to.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {projectsData.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
