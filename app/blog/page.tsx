import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ideas",
  description: "Notes, observations, reflections, and process writing from Carbon 12."
};

const collections = [
  {
    title: "Visual systems",
    description: "Composition, grids, image logic, and the way a page holds attention.",
    href: "/blog/strict-grids",
    items: [
      "Strict grids make better ambiguity",
      "How a quiet layout gives strange images room to breathe",
      "Compositions that feel measured, not managed"
    ]
  },
  {
    title: "Context window",
    description: "Working notes on AI tools, creative systems, and how ideas move through software.",
    href: "/blog/inside-the-carbon-12-visual-factory",
    items: [
      "Inside the Carbon 12 visual factory",
      "A small working method for many parallel ideas",
      "Why rough systems often produce clearer images"
    ]
  },
  {
    title: "Water and place",
    description: "Landscape, architecture, atmosphere, and studies that begin with observation.",
    href: "/projects/water-lines",
    items: [
      "Reading water before rendering it",
      "When a landscape becomes a drawing system",
      "Shadow, reflection, and slow architecture"
    ]
  }
];

const cards = [
  {
    title: "Inside the Carbon 12 visual factory",
    href: "/blog/inside-the-carbon-12-visual-factory",
    category: "Context window",
    date: "May 22, 2026",
    tone: "pool"
  },
  {
    title: "Strict grids make better ambiguity",
    href: "/blog/strict-grids",
    category: "Visual systems",
    date: "May 1, 2026",
    tone: "light-well"
  },
  {
    title: "Dark editorial systems for personal platforms",
    href: "/blog/dark-editorial-systems",
    category: "Process",
    date: "April 18, 2026",
    tone: "table-still"
  }
];

function VisualThumb({ tone, compact = false }: { tone: string; compact?: boolean }) {
  return (
    <div className={`blog-thumb blog-thumb-${tone} ${compact ? "blog-thumb-compact" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#5f5d58]">
      {label}
    </span>
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-[#fbfaf7] text-[#111111]">
      <section className="mx-auto max-w-[1160px] px-5 pb-14 pt-8">
        <div className="flex items-center justify-between border-b border-black/10 pb-5">
          <Link href="/blog" className="flex items-center gap-3 text-[15px] font-black">
            <span className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_35%_35%,#df252b,#7aa9c7_62%,#111_63%)]" />
            Carbon 12 Ideas
          </Link>
          <div className="hidden items-center gap-7 text-sm font-bold text-[#4d4c48] md:flex">
            <Link href="/blog/inside-the-carbon-12-visual-factory">Context window</Link>
            <Link href="/blog/strict-grids">Visual systems</Link>
            <Link href="/projects">Archive</Link>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2 text-sm font-black text-white transition hover:bg-[#df252b]"
          >
            Subscribe
          </Link>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1fr_420px] md:items-center md:py-16">
          <div>
            <Pill label="Notes & Ideas" />
            <h1 className="mt-6 max-w-[650px] text-[50px] font-black leading-[0.94] tracking-[-0.06em] md:text-[76px]">
              Visual thinking for systems, images, and tools.
            </h1>
            <p className="mt-7 max-w-[560px] text-[19px] font-semibold leading-8 text-[#3c3a36]">
              A publication-style home for observations, process notes, AI experiments that have
              earned their place, water studies, architectural fragments, and practical creative
              systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog/inside-the-carbon-12-visual-factory"
                className="rounded-full bg-black px-5 py-3 text-sm font-black text-white hover:bg-[#df252b]"
              >
                Read the lead note
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-black/20 px-5 py-3 text-sm font-black hover:border-black"
              >
                Browse archive
              </Link>
            </div>
          </div>

          <Link href="/blog/inside-the-carbon-12-visual-factory" className="group block">
            <VisualThumb tone="pool" />
            <div className="mt-4 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#88847c]">
                  May 22, 2026 in Context window
                </p>
                <h2 className="mt-2 text-[25px] font-black leading-none tracking-[-0.04em] group-hover:text-[#df252b]">
                  Inside the Carbon 12 visual factory
                </h2>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-black/20 text-2xl">
                →
              </span>
            </div>
          </Link>
        </div>

        <div className="grid gap-5 border-y border-black/10 py-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="group grid grid-cols-[96px_1fr] gap-4">
              <VisualThumb tone={card.tone} compact />
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#8f8b84]">
                  {card.date} / {card.category}
                </p>
                <h3 className="mt-2 text-[18px] font-black leading-[1.05] tracking-[-0.035em] group-hover:text-[#df252b]">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1160px] gap-12 px-5 py-12 md:grid-cols-[1fr_360px]">
        <div className="grid gap-12">
          {collections.map((collection) => (
            <section key={collection.title}>
              <div className="mb-5 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-[30px] font-black tracking-[-0.04em]">{collection.title}</h2>
                  <p className="mt-2 max-w-[520px] text-sm font-semibold leading-6 text-[#77746e]">
                    {collection.description}
                  </p>
                </div>
                <Link href={collection.href} className="hidden text-sm font-black text-[#8b8984] hover:text-black md:block">
                  View →
                </Link>
              </div>
              <div className="grid gap-4">
                {collection.items.map((item, index) => (
                  <Link
                    key={item}
                    href={collection.href}
                    className="grid border-t border-black/10 py-5 transition hover:border-black md:grid-cols-[120px_1fr_40px]"
                  >
                    <span className="text-sm font-black text-[#9a968e]">0{index + 1}</span>
                    <span className="text-[24px] font-black leading-[1.05] tracking-[-0.04em]">{item}</span>
                    <span className="text-2xl">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="md:sticky md:top-28 md:h-fit">
          <div className="rounded-[2px] border border-black/10 bg-[#efede8] p-7">
            <h2 className="text-[32px] font-black leading-none tracking-[-0.045em]">
              What comes next.
            </h2>
            <p className="mt-4 text-[15px] font-semibold leading-6 text-[#6e6a63]">
              Short notes from Carbon 12: visual systems, process fragments, references, and
              practical observations from the work table.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-black text-white hover:bg-[#df252b]"
            >
              Get updates
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-[#8b8780]">
              Recent essays
            </h3>
            <div className="grid gap-4">
              {posts.map((post) => (
                <Link key={post.slug} href={post.href} className="group border-t border-black/10 pt-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#9a968e]">
                    {post.date} / {post.category}
                  </p>
                  <h4 className="mt-2 text-[18px] font-black leading-[1.05] tracking-[-0.035em] group-hover:text-[#df252b]">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
