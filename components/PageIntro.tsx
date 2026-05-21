type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-8 px-5 pb-12 pt-10 md:grid-cols-12 md:pb-20 md:pt-16">
      <div className="border-t border-white/15 pt-5 md:col-span-3">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-rust">{eyebrow}</p>
      </div>
      <div className="border-t border-white/15 pt-5 md:col-span-9">
        <h1 className="cover-title max-w-4xl text-[clamp(2.35rem,6vw,5.2rem)] font-light leading-[0.96] tracking-[-0.055em]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">{description}</p>
      </div>
    </section>
  );
}
