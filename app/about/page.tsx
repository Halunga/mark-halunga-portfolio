import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "About Carbon 12."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Background"
        title="A practice around images, systems, and useful restraint."
        description="Carbon 12 works across front-end development, visual design, illustration, AI media, architecture visualization, water storytelling, and philosophical editorial systems."
      />
      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">Profile</p>
        </div>
        <div className="prose-mark md:col-span-7">
          <p>
            Carbon 12 builds digital work for projects that need atmosphere and structure at the
            same time: portfolios, editorial systems, AI-assisted visual worlds, architecture
            studies, illustration-led concepts, and public-interest water projects.
          </p>
          <p>
            The work is guided by a simple preference: make the image strong, make the system quiet,
            and make the path through the page unmistakable. A site should feel designed without
            feeling decorated.
          </p>
          <p>
            The stack is deliberately modern and maintainable: Next.js, TypeScript, Tailwind CSS,
            MDX, semantic HTML, accessible navigation, SEO metadata, and reusable components that
            keep content replacement straightforward.
          </p>
          <h2>Capabilities</h2>
          <ul>
            <li>Portfolio architecture, editorial web design, and long-form case-study systems</li>
            <li>AI media direction, prompt systems, image research, and campaign prototypes</li>
            <li>Architecture visualization surfaces, spatial narratives, and image sequencing</li>
            <li>Water project storytelling, public documentation, and field-note archives</li>
            <li>Next.js, TypeScript, Tailwind CSS, MDX, accessibility, SEO, and performance</li>
          </ul>
        </div>
      </section>
    </>
  );
}
