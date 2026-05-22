import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogSlugs, getPost } from "@/lib/content";

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt
    }
  };
}

function ArticleHeroImage() {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[2px] bg-[#ded8ce] md:h-[460px]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f3eee5_0%,#c9704c_42%,#2f2b2a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,transparent,#111)] opacity-60" />
      <div className="absolute left-[11%] top-[16%] h-[68%] w-[42%] skew-x-[-12deg] bg-white/55" />
      <div className="absolute right-[8%] top-[12%] h-[76%] w-[34%] bg-black/18" />
      <div className="absolute bottom-12 left-[22%] h-28 w-28 rounded-full border-[18px] border-[#161616]" />
      <div className="absolute bottom-10 left-[44%] h-[230px] w-[34px] rotate-[20deg] rounded-t-full bg-[#161616]" />
      <div className="absolute bottom-10 left-[33%] h-[185px] w-[30px] rotate-[-18deg] rounded-t-full bg-[#161616]" />
      <div className="absolute bottom-10 left-[18%] h-3 w-[62%] rounded-full bg-black/25 blur-md" />
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const { meta, Content } = post;
  const author = meta.author ?? "Mark Halunga";

  return (
    <article className="bg-[#fbfaf7] text-[#111111]">
      <div className="mx-auto max-w-[1160px] px-5 pb-20 pt-8">
        <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
          <Link href="/blog" className="flex items-center gap-3 text-[15px] font-black">
            <span className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_35%_35%,#df252b,#7aa9c7_62%,#111_63%)]" />
            Carbon 12 Ideas
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2 text-sm font-black text-white transition hover:bg-[#df252b]"
          >
            Subscribe
          </Link>
        </div>

        <ArticleHeroImage />

        <div className="grid gap-10 pt-10 md:grid-cols-[220px_1fr_170px] md:gap-12">
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8c8880]">By {author}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#6f6b64]">
                Notes on design, image making, AI tools, and the working systems behind Carbon 12.
              </p>
              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8c8880]">Read with</p>
                <div className="mt-3 grid gap-2">
                  <button type="button" className="rounded-full border border-black/15 px-4 py-2 text-left text-sm font-black">
                    Text
                  </button>
                  <button type="button" className="rounded-full border border-black/15 px-4 py-2 text-left text-sm font-black">
                    Notes
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <Link
              href="/blog"
              className="mb-6 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#5f5d58]"
            >
              {meta.category}
            </Link>
            <h1 className="max-w-[760px] text-[48px] font-black leading-[0.94] tracking-[-0.06em] md:text-[82px]">
              {meta.title}
            </h1>
            <p className="mt-7 max-w-[720px] text-[21px] font-semibold leading-8 text-[#3d3a36]">
              {meta.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold text-[#77736c]">
              <span>{author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={meta.date}>{meta.date}</time>
              <span aria-hidden="true">·</span>
              <span>{meta.readingTime}</span>
            </div>

            <div className="article-prose mt-10 border-t border-black/10 pt-10">
              <Content />
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.14em] text-[#8c8880]">Share</p>
              <div className="grid gap-2">
                {["Copy link", "Send", "Archive"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full border border-black/15 px-4 py-2 text-left text-sm font-black transition hover:border-black"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
