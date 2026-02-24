export interface Project {
  title: string;
  description: string;
  href: string;
  tools: string[];
  deployed?: boolean; // true = Live, false = Archive
}

export const projectsData: Project[] = [
  {
    title: "QuestCraft",
    description:
      "LLM-powered platform that helps teachers create better assessments more efficiently.",
    href: "https://questcraft.example.com",
    tools: ["Django", "LangChain", "PostgreSQL"],
    deployed: true,
  },
  {
    title: "Lazzzy-Space",
    description:
      "A web app for teams to collaborate and manage tasks with a minimal interface.",
    href: "https://lazzzy.example.com",
    tools: ["Next.js", "Django", "GraphQL"],
    deployed: true,
  },
  {
    title: "Passman",
    description:
      "A command line password manager built with JavaScript. Generates and copies to clipboard.",
    href: "#",
    tools: ["JavaScript", "CLI"],
    deployed: false,
  },
  {
    title: "Django Chatbot",
    description:
      "Real-time LLM chatbot using Django Channels, DRF, and LangChain for seamless API integration.",
    href: "#",
    tools: ["Django", "WebSockets", "LLM"],
    deployed: false,
  },
];
