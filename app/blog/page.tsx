import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing and notes from Mark Halunga."
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageIntro
        eyebrow="Notes"
        title="Writing, tests, and things worth keeping."
        description="Short pieces on design, image making, AI tools, philosophy, architecture, water projects, and the machinery behind finished work."
      />
      <PostList posts={posts} />
    </>
  );
}
