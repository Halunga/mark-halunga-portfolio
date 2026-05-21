import type { Metadata } from "next";
import { KarmaHome } from "@/components/KarmaHome";

export const metadata: Metadata = {
  title: "Carbon 12 | Archive",
  description:
    "Visual work, film and motion, environments, notes, process material, and collected records from Carbon 12."
};

export default function HomePage() {
  return <KarmaHome />;
}
