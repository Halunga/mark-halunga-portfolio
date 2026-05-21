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
        title="Selected builds."
        description="Websites, interfaces, publishing systems, and front-end experiments structured as replaceable case studies."
      />
      <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>
    </>
  );
}
