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
        title="Notes from the build."
        description="Short essays, references, and working notes on front-end craft, interface quality, content systems, and the web."
      />
      <PostList posts={posts} />
    </>
  );
}
