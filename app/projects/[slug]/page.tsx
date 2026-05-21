import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjects, projectSlugs } from "@/lib/content";

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
    description: project.meta.shortDescription,
    openGraph: {
      title: project.meta.title,
      description: project.meta.shortDescription,
      images: [{ url: project.meta.heroImage }]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  const { meta, Content } = project;
  const projects = await getProjects();
  const currentIndex = projects.findIndex((item) => item.slug === meta.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 pb-12 pt-12 md:grid-cols-12 md:pb-20 md:pt-16">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rust md:col-span-3">{meta.category}</p>
        <div className="md:col-span-9">
          <h1 className="cover-title max-w-4xl text-[clamp(2.35rem,6vw,5.2rem)] font-light leading-[0.96] tracking-[-0.055em]">
            {meta.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">{meta.shortDescription}</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
            src={meta.heroImage}
            alt={`${meta.title} hero image`}
            fill
            priority
            sizes="100vw"
            className="image-treatment object-cover"
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 md:grid-cols-12">
        <dl className="grid content-start gap-5 border-t border-white/15 pt-5 text-sm md:col-span-3">
          <div>
            <dt className="text-white/45">Year</dt>
            <dd className="mt-1 text-ink">{meta.year}</dd>
          </div>
          <div>
            <dt className="text-white/45">Category</dt>
            <dd className="mt-1 text-ink">{meta.category}</dd>
          </div>
          <div>
            <dt className="text-white/45">Role</dt>
            <dd className="mt-1 text-ink">{meta.role ?? "Direction, design, build"}</dd>
          </div>
        </dl>
        <div className="grid gap-10 md:col-span-9">
          {[
            ["Overview", meta.overview],
            ["Challenge", meta.challenge],
            ["Process", meta.process],
            ["Result", meta.result]
          ].map(([title, body]) => (
            <section key={title} className="grid gap-4 border-t border-white/15 pt-5 md:grid-cols-9">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-rust md:col-span-2">{title}</h2>
              <p className="max-w-3xl text-xl leading-9 text-white/72 md:col-span-7">{body}</p>
            </section>
          ))}
          <div className="prose-mark border-t border-white/15 pt-10">
            <Content />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-12">
        <p className="border-t border-white/15 pt-5 text-xs font-black uppercase tracking-[0.2em] text-rust">
          Gallery
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {meta.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image src={image} alt={`${meta.title} gallery image ${index + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="image-treatment object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-16">
        <Link href={`/projects/${nextProject.slug}`} className="group block rounded-2xl border border-white/15 p-6 transition hover:bg-white hover:text-[#171717]">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">Next project</p>
          <h2 className="mt-6 text-[clamp(2rem,4.2vw,3rem)] font-light leading-[1.03] tracking-[-0.05em] group-hover:text-[#171717]">
            {nextProject.title}
          </h2>
        </Link>
      </section>
    </article>
  );
}
