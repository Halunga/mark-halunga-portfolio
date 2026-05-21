"use client";

import Link from "next/link";
import { KarmaCardArt } from "@/components/KarmaCardArt";
import { karmaCards, karmaIntro } from "@/data/good-karma";

export function KarmaHome() {
  return (
    <div className="min-h-screen bg-[#171717] text-white">
      <section className="mx-auto w-full max-w-[1200px] px-5 pb-12 pt-8 md:pb-16">
        <div className="mx-auto max-w-[760px] pb-8 pt-2 text-center md:pb-10">
          <p className="mb-5 text-[15px] text-white/45">{karmaIntro.section}</p>
          <h1 className="text-[42px] font-light leading-[1.03] tracking-[-0.04em] md:text-[64px]">
            {karmaIntro.title}
            <br />
            <span className="font-black text-[#72b844]">{karmaIntro.accent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-7 text-white/58">
            {karmaIntro.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {karmaCards.map((card) => (
            <Link
              key={`${card.href}-${card.title}`}
              href={card.href}
              className="karma-card group"
              style={{ background: card.gradient }}
            >
              <div className="relative z-10">
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  {card.eyebrow}
                </p>
                <h2 className="max-w-[290px] text-[27px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[30px]">
                  {card.title}
                </h2>
                <p className="mt-4 max-w-[270px] text-[15px] leading-6 text-white/68">
                  {card.description}
                </p>
              </div>
              <KarmaCardArt art={card.art} />
              <span className="karma-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-10">
          <Link
            href="/projects"
            className="rounded-full border border-white/55 px-12 py-4 text-[24px] font-semibold text-white transition hover:bg-white hover:text-[#171717]"
          >
            View Archive
          </Link>
        </div>
      </section>
    </div>
  );
}
