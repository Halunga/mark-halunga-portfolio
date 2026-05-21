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
            make the content feel considered rather than assembled from a template.
          </p>
          <p>
            This page is ready for a more personal biography, location, client history, and current
            availability. The structure is intentionally direct so the work and writing stay in
            front.
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
