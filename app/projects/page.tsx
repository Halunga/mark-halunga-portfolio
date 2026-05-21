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
        eyebrow="Work"
        title="Built things, tests, and visual systems."
        description="Design, illustration, AI media, water records, architecture images, and editorial platforms. Some finished, some still moving."
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
