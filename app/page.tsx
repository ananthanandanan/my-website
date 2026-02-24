import { Hero } from "@/app/components/Hero";
import { Horizon } from "@/app/components/Horizon";
import { SectionHeader } from "@/app/components/SectionHeader";
import { PostListItem } from "@/app/components/PostListItem";
import { ProjectCard } from "@/app/components/ProjectCard";
import { getAllPosts } from "@/lib/blog";
import { projectsData } from "@/lib/projectsData";

const WRAP = "mx-auto w-full max-w-[680px] px-6 sm:px-8";
const HOME_POSTS = 6;
const HOME_PROJECTS = 4;

export default function Home() {
  const posts = getAllPosts().slice(0, HOME_POSTS);
  const projects = projectsData.slice(0, HOME_PROJECTS);

  return (
    <>
      <div className={WRAP}>
        <Hero />
      </div>

      <div className={WRAP}>
        <Horizon />
      </div>

      <div className={WRAP}>
        <section>
          <SectionHeader
            title="Writing"
            href="/posts"
            linkLabel="All posts →"
          />
          <ul className="list-none">
            {posts.map((post) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </ul>
        </section>
      </div>

      <div className={WRAP}>
        <Horizon />
      </div>

      <div className={WRAP}>
        <section>
          <SectionHeader
            title="Projects"
            href="/projects"
            linkLabel="All projects →"
          />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      </div>

      <div className={WRAP}>
        <Horizon className="mt-12! mb-0!" />
      </div>
    </>
  );
}
