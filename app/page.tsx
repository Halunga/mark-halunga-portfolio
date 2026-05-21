import Link from "next/link";
import Image from "next/image";
import { getPosts, getProjects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { PostList } from "@/components/PostList";
import { SectionLabel } from "@/components/SectionLabel";

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <>
      <section className="mx-auto grid min-h-[calc(100svh-73px)] max-w-grid content-between gap-8 px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-t border-white/15 pt-6 md:grid-cols-12">
          <p className="text-xs font-black uppercase text-rust md:col-span-2">Mark Halunga</p>
          <div className="md:col-span-10">
            <h1 className="cover-title max-w-7xl text-center font-serif text-[clamp(4.2rem,14vw,15rem)] font-medium leading-[0.75] md:text-left">
              Front-end sites with taste.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-center text-xl leading-8 text-steel md:mx-0 md:text-left">
              I build fast Next.js websites, portfolio systems, and editorial interfaces that are
              easy to navigate, easy to update, and designed around the work itself.
            </p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 border border-white/15 text-center text-sm uppercase text-steel md:mx-0">
              <Link href="/projects" className="border-r border-white/15 p-5 hover:bg-ink hover:text-coal">
                See work
              </Link>
              <Link href="/contact" className="p-5 hover:bg-ink hover:text-coal">
                Start project
              </Link>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden border border-white/15 md:grid-cols-12">
          <div className="relative min-h-[420px] overflow-hidden bg-white/5 md:col-span-8">
            <Image
              src="/images/project-nordic-archive.svg"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 66vw, 100vw"
              className="image-treatment object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <p className="text-xs font-black uppercase text-ink">Selected interface system</p>
              <p className="hidden max-w-[18rem] text-right text-xs leading-5 text-ink/80 sm:block">
                Designed for real screenshots, case studies, and client-facing evidence.
              </p>
            </div>
          </div>
          <div className="rule-grid grid content-between gap-10 border-t border-white/15 p-6 md:col-span-4 md:border-l md:border-t-0">
            <div className="flex justify-between text-[11px] uppercase text-steel">
              <span>Available for</span>
              <span>2026</span>
            </div>
            <p className="font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[0.78] text-ink">
              Websites. Portfolios. Publishing systems.
            </p>
            <p className="max-w-sm text-sm leading-7 text-steel">
              Clear IA, responsive navigation, polished typography, accessible components, SEO
              metadata, and content you can replace without calling a developer.
            </p>
          </div>
        </div>
      </section>

      <section id="builds" className="mx-auto grid max-w-grid gap-3 px-4 py-20 sm:px-6 lg:px-8">
        <article className="grid min-h-[520px] content-between bg-ink p-6 text-coal md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase">Next.js portfolio systems</p>
            <h2 className="mt-5 font-serif text-[clamp(3.4rem,10vw,9rem)] font-medium leading-[0.82]">
              Built to show the work, not the framework.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-coal/70">
              Project grids, case-study pages, MDX writing, metadata, responsive navigation, and a
              content model you can keep editing after launch.
            </p>
            <div className="mt-7 flex justify-center gap-5 text-sm font-bold">
              <Link href="/projects" className="text-rust">
                View work
              </Link>
              <Link href="/contact" className="text-rust">
                Build one
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-full max-w-5xl gap-3 md:grid-cols-3">
            {["Speed", "Navigation", "Editable content"].map((item) => (
              <div key={item} className="border border-coal/15 p-5 text-center">
                <p className="text-xs font-black uppercase">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-3 md:grid-cols-2">
          <article className="grid min-h-[420px] content-between bg-[#151515] p-6 md:p-10">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-black uppercase text-rust">Interface polish</p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.82]">
                Make it feel finished.
              </h2>
              <p className="mt-5 leading-7 text-steel">
                Typography, spacing, hover states, empty states, mobile menus, and the little
                details that decide whether a site feels premium.
              </p>
            </div>
          </article>
          <article className="grid min-h-[420px] content-between bg-[#151515] p-6 md:p-10">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-black uppercase text-rust">Implementation</p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.82]">
                Ship the front end cleanly.
              </h2>
              <p className="mt-5 leading-7 text-steel">
                TypeScript components, Tailwind systems, SEO basics, accessibility, and a structure
                that survives real content.
              </p>
            </div>
          </article>
        </div>
      </section>

      <SectionLabel>Selected Projects</SectionLabel>
      <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>

      <section className="mx-auto my-24 grid max-w-grid gap-8 border-y border-white/15 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        <p className="text-xs font-black uppercase text-rust md:col-span-3">Practice</p>
        <div className="grid gap-8 md:col-span-9 md:grid-cols-3">
          <div className="border-t border-white/15 pt-5">
            <h2 className="font-serif text-5xl font-medium leading-[0.9]">Next.js builds</h2>
            <p className="mt-4 leading-7 text-steel">
              Fast portfolio, editorial, and product sites with TypeScript, clean components,
              accessible navigation, and production-minded structure.
            </p>
          </div>
          <div className="border-t border-white/15 pt-5">
            <h2 className="font-serif text-5xl font-medium leading-[0.9]">Interface polish</h2>
            <p className="mt-4 leading-7 text-steel">
              Careful layout, responsive behavior, typography, interaction states, and visual
              systems that make the work feel intentional.
            </p>
          </div>
          <div className="border-t border-white/15 pt-5">
            <h2 className="font-serif text-5xl font-medium leading-[0.9]">Content systems</h2>
            <p className="mt-4 leading-7 text-steel">
              MDX-backed projects and writing so the site is easy to update without rebuilding the
              design every time the content changes.
            </p>
          </div>
        </div>
      </section>

      <SectionLabel>Latest Writing</SectionLabel>
      <PostList posts={posts.slice(0, 2)} />
    </>
  );
}
