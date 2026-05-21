import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects by Mark Halunga."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected work, built as disciplined visual systems."
        description="Design, illustration, AI media, water storytelling, architecture visualization, and editorial platforms shaped for atmosphere, clarity, and long-term use."
      />
      <div className="mx-auto grid max-w-grid gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((project, index) => (
          <div key={project.slug} className={index === 0 ? "md:col-span-2" : ""}>
            <ProjectCard project={project} priority={index === 0} />
          </div>
        ))}
      </div>
    </>
  );
}
