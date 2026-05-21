import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { siteSettings } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Carbon 12 for selected projects and collaborations."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Send the shape of it."
        description="For selected collaborations in design, AI media, editorial platforms, architecture visualization, water storytelling, and creative systems."
      />
      <section className="mx-auto grid max-w-[1200px] gap-8 px-5 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rust">Channels</p>
        </div>
        <div className="grid gap-4 md:col-span-7">
          <p className="mb-4 max-w-2xl leading-7 text-white/58">
            Useful first notes include what you are making, what already exists, the images or
            references that matter, your deadline, and whether the work needs direction, design,
            development, writing structure, or all of it together.
          </p>
          <Link
            href={`mailto:${siteSettings.email}`}
            className="rounded-2xl border border-white/15 p-6 text-4xl font-light leading-none tracking-[-0.05em] transition hover:bg-white hover:text-[#171717] sm:text-6xl"
          >
            {siteSettings.email}
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="rounded-2xl border border-white/15 p-6 text-4xl font-light leading-none tracking-[-0.05em] transition hover:bg-white hover:text-[#171717] sm:text-6xl"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/"
            className="rounded-2xl border border-white/15 p-6 text-4xl font-light leading-none tracking-[-0.05em] transition hover:bg-white hover:text-[#171717] sm:text-6xl"
          >
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
