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
        eyebrow="Journal"
        title="Notes in public."
        description="Short essays, fragments, references, and working notes on visual systems, publishing, restraint, and the internet."
      />
      <PostList posts={posts} />
    </>
  );
}
