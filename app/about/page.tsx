import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "About Mark Halunga."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Frontend with taste and discipline."
        description="Mark Halunga builds fast, refined websites and content systems with a focus on structure, atmosphere, accessibility, and maintainable implementation."
      />
      <section className="mx-auto grid max-w-grid gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase text-rust">Profile</p>
        </div>
        <div className="prose-mark md:col-span-7">
          <p>
            Mark Halunga works across front-end development, interface design, and digital
            publishing. The focus is practical: build sites that load quickly, navigate clearly, and
            make the content feel considered rather than generic.
          </p>
          <p>
            I work best on projects where the content matters: portfolios, small-business sites,
            editorial pages, landing pages, and redesigns that need sharper structure. I care about
            the parts users notice immediately and the parts that make the site easier to maintain
            six months later.
          </p>
          <p>
            The stack is deliberately modern and simple: Next.js, React, TypeScript, Tailwind, MDX,
            semantic HTML, responsive navigation, SEO metadata, and accessible interaction states.
          </p>
          <h2>Capabilities</h2>
          <ul>
            <li>Next.js, TypeScript, Tailwind, and component-driven front ends</li>
            <li>Responsive navigation, accessibility, SEO, and performance-minded builds</li>
            <li>Portfolio architecture, MDX content systems, and editorial interfaces</li>
          </ul>
        </div>
      </section>
    </>
  );
}
