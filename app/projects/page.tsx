import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected projects by Carbon 12."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Visual work and selected projects."
        description="Illustration, renders, compositions, layouts, image systems, water records, architecture studies, and editorial platforms."
      />
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.slug} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
            <ProjectCard project={project} priority={index === 0} />
          </div>
        ))}
      </div>
    </>
  );
}
