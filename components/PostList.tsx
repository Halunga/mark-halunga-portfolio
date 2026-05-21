import Link from "next/link";
import type { PostMeta } from "@/lib/content";

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="mx-auto max-w-[1200px] px-5">
      {posts.map((post) => (
        <article key={post.slug} className="grid border-t border-white/15 py-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-3">
            <time className="text-xs font-bold uppercase text-rust" dateTime={post.date}>
              {post.date} / {post.category}
            </time>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">{post.readingTime}</p>
          </div>
          <div className="md:col-span-9">
            <Link href={post.href} className="group">
              <h2 className="cover-title max-w-4xl text-4xl font-light leading-[1.02] tracking-[-0.05em] sm:text-6xl">
                {post.title}
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/58 group-hover:text-white">{post.excerpt}</p>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
