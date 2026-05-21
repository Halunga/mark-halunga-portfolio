import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal",
  description: "Writing and notes from Mark Halunga."
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageIntro
        eyebrow="Writing"
        title="Notes on image, systems, and slower forms of attention."
        description="Editorial essays on design, illustration, AI media, philosophy, architecture, water projects, and the creative machinery behind serious digital work."
      />
      <PostList posts={posts} />
    </>
  );
}
