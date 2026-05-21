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
        title="Start with a precise note."
        description="Use this page for direct inquiries, collaboration requests, commissions, speaking, writing, or editorial projects."
      />
      <section className="mx-auto grid max-w-grid gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-3">
          <p className="text-xs font-black uppercase text-rust">Channels</p>
        </div>
        <div className="grid gap-4 md:col-span-7">
          <Link
            href="mailto:hello@markhalunga.com"
            className="border border-white/15 p-6 text-2xl font-semibold hover:bg-ink hover:text-coal"
          >
            hello@markhalunga.com
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="border border-white/15 p-6 text-2xl font-semibold hover:bg-ink hover:text-coal"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/"
            className="border border-white/15 p-6 text-2xl font-semibold hover:bg-ink hover:text-coal"
          >
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
