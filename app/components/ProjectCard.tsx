import Link from "next/link";
import { Tag } from "./Tag";
import type { Project } from "@/lib/projectsData";

const cardClassName =
  "flex flex-col gap-3 bg-surface p-6 text-inherit no-underline transition-colors hover:bg-surface-2";

export function ProjectCard({ project }: { project: Project }) {
  const live = project.deployed !== false;
  const content = (
    <>
      <div className="type-meta flex items-center gap-1.5 uppercase tracking-widest text-text-dim">
        <span
          className={`h-1.5 w-1.5 rounded-full ${live ? "bg-[#2ecc71] animate-pulse" : "bg-text-dim"}`}
          aria-hidden
        />
        {live ? "Live" : "Archive"}
      </div>
      <div className="type-title font-(family-name:--font-libre-baskerville)">
        {project.title}
      </div>
      <p className="type-body measure-readable flex-1">{project.description}</p>
      <div className="mt-0.5 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <Tag
            key={t}
            tag={t}
            normalized={t.toLowerCase().replace(/\s+/g, "-")}
          />
        ))}
      </div>
    </>
  );

  if (project.href) {
    return (
      <Link href={project.href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
