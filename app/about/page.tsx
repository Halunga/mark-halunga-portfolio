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
        title="Quiet systems. Sharp surfaces."
        description="A placeholder biography for Mark Halunga. Replace this with a direct account of your background, values, clients, and current focus."
      />
      <section className="mx-auto grid max-w-grid gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase text-rust">Profile</p>
        </div>
        <div className="prose-mark md:col-span-7">
          <p>
            Mark Halunga is a placeholder title for an independent creative technologist,
            designer, writer, or studio practice. The site is structured to support selected work,
            long-form case studies, essays, and a direct contact path without marketing clutter.
          </p>
          <p>
            Use this page for a concise biography, location, current availability, selected
            collaborators, press references, or a short manifesto. Keep the writing concrete and
            let the work carry the atmosphere.
          </p>
          <h2>Capabilities</h2>
          <ul>
            <li>Editorial web design and front-end implementation</li>
            <li>Identity systems, art direction, and digital publications</li>
            <li>Portfolio architecture, content systems, and performance-focused builds</li>
          </ul>
        </div>
      </section>
    </>
  );
}
