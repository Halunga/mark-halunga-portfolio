import Link from "next/link";
import { getPosts, getProjects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { PostList } from "@/components/PostList";
import { SectionLabel } from "@/components/SectionLabel";

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <section className="mx-auto grid max-w-grid gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-12 md:pb-24 md:pt-24 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase text-rust">Portfolio / Journal</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="max-w-6xl font-serif text-[clamp(3.6rem,13vw,12rem)] font-medium leading-[0.78]">
            Mark Halunga builds restrained digital work with a hard editorial edge.
          </h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-8 text-steel">
              Placeholder positioning for a designer, developer, strategist, or writer. Replace this
              with the clearest sentence about what you make and who it serves.
            </p>
            <div className="grid grid-cols-2 border border-white/15 text-sm uppercase text-steel">
              <Link href="/projects" className="border-r border-white/15 p-5 hover:bg-ink hover:text-coal">
                View work
              </Link>
              <Link href="/contact" className="p-5 hover:bg-ink hover:text-coal">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionLabel>Selected Projects</SectionLabel>
      <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>

      <section className="mx-auto my-20 grid max-w-grid gap-8 border-y border-white/15 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-8">
        <p className="text-xs font-black uppercase text-rust md:col-span-3">Practice</p>
        <div className="grid gap-8 md:col-span-9 md:grid-cols-3">
          {["Identity systems", "Editorial interfaces", "Digital publishing"].map((item) => (
            <div key={item}>
              <h2 className="font-serif text-4xl font-medium leading-none">{item}</h2>
              <p className="mt-4 leading-7 text-steel">
                Replace this compact description with a specific service, capability, or recurring
                theme in the work.
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionLabel>Latest Writing</SectionLabel>
      <PostList posts={posts.slice(0, 2)} />
    </>
  );
}
