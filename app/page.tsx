import type { Metadata } from "next";
import { KarmaHome } from "@/components/KarmaHome";

export const metadata: Metadata = {
  title: "Carbon 12 | Archive",
  description:
    "Design notes, AI image tests, water records, spatial studies, interface systems, and unfinished ideas from Carbon 12."
};

export default function HomePage() {
  return <KarmaHome />;
}
