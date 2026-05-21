import type { Metadata } from "next";
import { KarmaHome } from "@/components/KarmaHome";

export const metadata: Metadata = {
  title: "Mark Halunga | Archive",
  description:
    "Design notes, AI image tests, water records, spatial studies, interface systems, and unfinished ideas by Mark Halunga."
};

export default function HomePage() {
  return <KarmaHome />;
}
