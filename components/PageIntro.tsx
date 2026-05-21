type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto grid max-w-grid gap-8 px-4 pb-12 pt-14 sm:px-6 md:grid-cols-12 md:pb-20 md:pt-20 lg:px-8">
      <p className="text-xs font-black uppercase text-rust md:col-span-3">{eyebrow}</p>
      <div className="md:col-span-9">
        <h1 className="max-w-5xl font-serif text-[clamp(3rem,11vw,9rem)] font-medium leading-[0.82]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">{description}</p>
      </div>
    </section>
  );
}
