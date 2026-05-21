import Link from "next/link";
import type { PostMeta } from "@/lib/content";

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
      {posts.map((post) => (
        <article key={post.slug} className="grid border-t border-white/15 py-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-3">
            <time className="text-xs font-bold uppercase text-rust" dateTime={post.date}>
              {post.date}
            </time>
          </div>
          <div className="md:col-span-9">
            <Link href={post.href} className="group">
              <h2 className="cover-title max-w-4xl font-serif text-4xl font-medium leading-[0.92] sm:text-7xl">
                {post.title}
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-steel group-hover:text-ink">{post.summary}</p>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
