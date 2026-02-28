export interface Project {
  title: string;
  description: string;
  /** Optional when there is no public URL (e.g. stealth SaaS on client premises). */
  href?: string;
  tools: string[];
  deployed?: boolean; // true = Live, false = Archive
}

export const projectsData: Project[] = [
  {
    title: "QuestCraft",
    description:
      "LLM-powered platform that helps teachers create better assessments more efficiently.",
    tools: ["Django", "LangChain", "PostgreSQL", "Docker", "RabbitMQ", "Next.js", "Logto", "Redis", "Celery"],
    deployed: true,
  },
  {
    title: "Reg-Exp-Lain",
    description:
      "Interactive regular expression visualizer built with Next.js and React Flow. Visualize regex as flow diagrams, test strings in real time, and get step-by-step explanations.",
    href: "https://github.com/ananthanandanan/Reg-Exp-Lain",
    tools: ["Next.js", "React 19", "React Flow", "TypeScript", "Tailwind CSS", "Zustand", "regjsparser"],
    deployed: true,
  },
  {
    title: "Json_To_Many",
    description:
      "Python package for seamless conversion from JSON to Markdown, XML, and CSV. Built with uv and Ruff for developers and data workflows.",
    href: "https://github.com/ananthanandanan/Json_To_Many",
    tools: ["Python", "uv", "Ruff"],
    deployed: true,
  },
  {
    title: "LangDjangoChat",
    description:
      "LLM-based chatbot with Django and Solara UI. Real-time chat, multiple chatrooms, and user authentication.",
    href: "https://github.com/ananthanandanan/LangDjangoChat",
    tools: ["Django", "Django Channels", "DRF", "Huey", "Redis", "Solara"],
    deployed: false,
  },
];
