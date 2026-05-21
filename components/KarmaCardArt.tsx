import type { KarmaCard } from "@/data/good-karma";

export function KarmaCardArt({ art }: { art: KarmaCard["art"] }) {
  return (
    <div className={`karma-art karma-art-${art}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
