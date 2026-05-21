import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project, priority = false }: { project: ProjectMeta; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-t border-white/15 py-5"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-white/5">
        <Image
          src={project.thumbnail}
          alt={`${project.title} project thumbnail`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="image-treatment object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-coal/0 mix-blend-multiply transition group-hover:bg-rust/20" />
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rust">{project.category}</p>
          <p className="text-xs text-steel">{project.year}</p>
        </div>
        <h2 className="cover-title mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.9]">
          {project.title}
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-steel">{project.shortDescription}</p>
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
