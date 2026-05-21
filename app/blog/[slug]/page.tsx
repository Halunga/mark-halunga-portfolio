import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const { meta, Content } = post;

  return (
    <article className="mx-auto grid max-w-[1200px] gap-8 px-5 pb-8 pt-12 md:grid-cols-12 md:pt-16">
      <aside className="md:col-span-3">
        <time className="text-xs font-black uppercase tracking-[0.2em] text-rust" dateTime={meta.date}>
          {meta.date} / {meta.category}
        </time>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/45">{meta.readingTime}</p>
      </aside>
      <div className="md:col-span-8">
        <h1 className="max-w-4xl text-[clamp(2.35rem,6vw,5.2rem)] font-light leading-[0.96] tracking-[-0.055em]">
          {meta.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">{meta.excerpt}</p>
        <div className="prose-mark mt-12 border-t border-white/15 pt-10">
          <Content />
        </div>
      </div>
    </article>
  );
}
