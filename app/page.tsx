import type { Metadata } from "next";
import { PolishPhraseApp } from "@/components/PolishPhraseApp";

export const metadata: Metadata = {
  title: "Polish Phrasebook",
  description: "Listen to common Polish phrases for greetings, travel, food, and polite conversation."
};

export default function HomePage() {
  return <PolishPhraseApp />;
}
