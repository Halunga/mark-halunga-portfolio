import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { homeCopy } from "@/data/home";
import { getPosts, getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mark Halunga",
  description:
    "Portfolio and journal for Mark Halunga: design, illustration, AI media, philosophy, water projects, architecture visualization, and creative systems."
};

export default async function HomePage() {
  const projects = await getProjects();
  const posts = await getPosts();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <section className="relative grid min-h-[calc(100svh-var(--site-nav-height))] items-center overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/project-water-lines.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="image-treatment object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/70 to-coal/20" />
        </div>
        <div className="relative mx-auto grid w-full max-w-grid gap-8 md:grid-cols-12">
          <div className="border-t border-white/20 pt-5 md:col-span-3">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">{homeCopy.hero.eyebrow}</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="hero-title cover-title max-w-6xl font-serif font-medium">
              {homeCopy.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/80">{homeCopy.hero.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <SectionLabel>Featured work</SectionLabel>
        <div className="mx-auto mt-8 grid max-w-grid gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative min-h-[440px] overflow-hidden border border-white/10 bg-white/5 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={project.thumbnail}
                alt={`${project.title} project thumbnail`}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="image-treatment object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">
                  {project.category} / {project.year}
                </p>
                <h2 className="mt-4 max-w-xl font-serif text-5xl font-medium leading-[0.9] md:text-7xl">
                  {project.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24">
        <SectionLabel>Journal</SectionLabel>
        <div className="mx-auto mt-8 grid max-w-grid gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
          <h2 className="display-title cover-title font-serif font-medium md:col-span-6">
            Essays on making images, interfaces, and thought systems behave.
          </h2>
          <div className="grid gap-5 md:col-span-6">
            {posts.slice(0, 2).map((post) => (
              <Link key={post.slug} href={post.href} className="group border-t border-white/15 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">
                  {post.category} / {post.readingTime}
                </p>
                <h3 className="mt-4 font-serif text-4xl font-medium leading-none group-hover:text-rust">
                  {post.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-steel">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-grid gap-8 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-28 lg:px-8">
        <p className="border-t border-white/15 pt-5 text-xs font-black uppercase tracking-[0.2em] text-rust md:col-span-3">
          About Mark
        </p>
        <div className="border-t border-white/15 pt-5 md:col-span-9">
          <p className="display-title cover-title max-w-5xl font-serif font-medium">
            {homeCopy.about}
          </p>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <SectionLabel>Skills and services</SectionLabel>
        <div className="mx-auto mt-8 grid max-w-grid gap-px border-y border-white/10 bg-white/10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {homeCopy.services.map((service) => (
            <article key={service.title} className="min-h-72 bg-coal p-6">
              <h2 className="font-serif text-4xl font-medium leading-none">{service.title}</h2>
              <p className="mt-6 leading-7 text-steel">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-grid px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="border-t border-white/15 pt-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">Contact</p>
          <h2 className="display-title mt-8 max-w-5xl font-serif font-medium">
            Bring the project shape. I’ll bring the system.
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:border-rust hover:text-rust"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
