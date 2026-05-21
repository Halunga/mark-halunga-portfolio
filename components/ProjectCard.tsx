import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project, priority = false }: { project: ProjectMeta; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid border-t border-white/15 py-5 md:grid-cols-12 md:gap-6"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-white/5 md:col-span-5 md:mb-0 lg:col-span-4">
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="md:col-span-7 lg:col-span-8">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase text-rust">{project.discipline}</p>
          <p className="text-xs text-steel">{project.year}</p>
        </div>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-none sm:text-6xl">
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
