export interface Project {
  title: string;
  description: string;
  /** Optional when there is no public URL (e.g. stealth SaaS on client premises). */
  href?: string;
  tools: string[];
  status: "live" | "published" | "repository" | "archived";
}

export const projectsData: Project[] = [
  {
    title: "Reigner",
    description:
      "Open-source Python harness for citation-faithful question-answering agents, with bounded context, cost-aware model escalation, and evaluation built in.",
    href: "https://github.com/Construct-Lab/reigner",
    tools: ["Python", "FastAPI", "Pydantic", "LLM Agents", "SSE", "PyPI"],
    status: "published",
  },
  {
    title: "Json To Many",
    description:
      "Zero-dependency Python library and CLI for converting JSON into Markdown, XML, CSV, and HTML, with typed results and reusable templates.",
    href: "https://github.com/ananthanandanan/Json_To_Many",
    tools: ["Python", "Click", "PyPI", "uv", "Ruff", "Typed API"],
    status: "published",
  },
  {
    title: "Reg-Exp-Lain",
    description:
      "Interactive regular expression visualizer for exploring flow diagrams, testing strings in real time, and stepping through matches.",
    href: "https://github.com/ananthanandanan/Reg-Exp-Lain",
    tools: ["Next.js", "React 19", "React Flow", "TypeScript", "Tailwind CSS", "Zustand", "regjsparser"],
    status: "repository",
  },
  {
    title: "My Website",
    description:
      "Personal publishing platform with an MDX content pipeline, tag archives, static article pages, and a custom editorial design.",
    href: "https://github.com/ananthanandanan/my-website",
    tools: ["Next.js 16", "React 19", "TypeScript", "MDX", "Tailwind CSS"],
    status: "live",
  },
];
