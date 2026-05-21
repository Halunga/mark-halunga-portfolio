import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projectSlugs } from "@/lib/content";

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return {};

  return {
    title: project.meta.title,
    description: project.meta.summary,
    openGraph: {
      title: project.meta.title,
      description: project.meta.summary,
      images: [{ url: project.meta.image }]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  const { meta, Content } = project;

  return (
    <article>
      <section className="mx-auto grid max-w-grid gap-8 px-4 pb-12 pt-14 sm:px-6 md:grid-cols-12 md:pb-20 md:pt-20 lg:px-8">
        <p className="text-xs font-black uppercase text-rust md:col-span-3">{meta.discipline}</p>
        <div className="md:col-span-9">
          <h1 className="cover-title max-w-5xl font-serif text-[clamp(3.4rem,11vw,10rem)] font-medium leading-[0.78]">
            {meta.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">{meta.summary}</p>
        </div>
      </section>

      <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-white/5">
          <Image
            src={meta.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="image-treatment object-cover"
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-grid gap-8 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-8">
        <dl className="grid gap-5 border-t border-white/15 pt-5 text-sm md:col-span-3">
          <div>
            <dt className="text-steel">Year</dt>
            <dd className="mt-1 text-ink">{meta.year}</dd>
          </div>
          <div>
            <dt className="text-steel">Client</dt>
            <dd className="mt-1 text-ink">{meta.client ?? "Placeholder client"}</dd>
          </div>
          <div>
            <dt className="text-steel">Role</dt>
            <dd className="mt-1 text-ink">{meta.role ?? "Direction, design, build"}</dd>
          </div>
        </dl>
        <div className="prose-mark md:col-span-9">
          <Content />
        </div>
      </section>
    </article>
  );
}
