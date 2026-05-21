import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project, priority = false }: { project: ProjectMeta; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid border-t border-white/15 py-7 md:grid-cols-12 md:gap-8"
    >
      <div className="relative mb-5 aspect-[5/4] overflow-hidden bg-white/5 md:col-span-5 md:mb-0 lg:col-span-4">
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 100vw"
          className="image-treatment object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-coal/0 mix-blend-multiply transition group-hover:bg-rust/20" />
      </div>
      <div className="md:col-span-7 lg:col-span-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase text-rust">{project.discipline}</p>
          <p className="text-xs text-steel">{project.year}</p>
        </div>
        <h2 className="cover-title mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.9] sm:text-7xl">
          {project.title}
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-steel">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li key={tag} className="border border-white/15 px-3 py-1 text-xs uppercase text-steel">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
