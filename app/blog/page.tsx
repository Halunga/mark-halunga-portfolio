import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ideas",
  description: "Writing, observations, reflections, and process notes from Carbon 12."
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageIntro
        eyebrow="Ideas"
        title="Notes, ideas, and observations."
        description="Writing, reflections, process notes, visual references, and thoughts around design, image making, architecture, water projects, and finished work."
      />
      <PostList posts={posts} />
    </>
  );
}
