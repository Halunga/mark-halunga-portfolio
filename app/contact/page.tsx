import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mark Halunga for selected projects and collaborations."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Send the project shape, the images, or the unresolved idea."
        description="For selected collaborations in design, AI media, editorial platforms, architecture visualization, water storytelling, and creative systems."
      />
      <section className="mx-auto grid max-w-grid gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">Channels</p>
        </div>
        <div className="grid gap-4 md:col-span-7">
          <p className="mb-4 max-w-2xl leading-7 text-steel">
            Useful first notes include what you are making, what already exists, the images or
            references that matter, your deadline, and whether the work needs direction, design,
            development, writing structure, or all of it together.
          </p>
          <Link
            href="mailto:hello@markhalunga.com"
            className="border border-white/15 p-6 font-serif text-4xl font-medium leading-none hover:bg-ink hover:text-coal sm:text-6xl"
          >
            hello@markhalunga.com
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="border border-white/15 p-6 font-serif text-4xl font-medium leading-none hover:bg-ink hover:text-coal sm:text-6xl"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/"
            className="border border-white/15 p-6 font-serif text-4xl font-medium leading-none hover:bg-ink hover:text-coal sm:text-6xl"
          >
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
