import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Portfolio Sites",
    kicker: "For creatives and independents",
    body: "Case studies, writing, about, contact, and a content structure that is easy to keep current.",
    href: "/projects"
  },
  {
    title: "Business Sites",
    kicker: "For small teams",
    body: "Clear navigation, fast pages, stronger trust, better calls to action, and a site that explains what you do.",
    href: "/contact"
  },
  {
    title: "Frontend Builds",
    kicker: "Next.js / React / Tailwind",
    body: "Typed components, responsive layouts, SEO metadata, accessibility, and production-ready structure.",
    href: "/about"
  },
  {
    title: "Redesigns",
    kicker: "Sharper from the first screen",
    body: "Turn a vague or outdated site into a focused interface that feels easier, faster, and more credible.",
    href: "/contact"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="grid min-h-[720px] content-start overflow-hidden bg-[#fbfbfd] text-center">
        <div className="mx-auto max-w-5xl px-5 pt-16">
          <h1 className="text-[clamp(3.4rem,9vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.035em] text-[#1d1d1f]">
            Mark Halunga
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-[clamp(1.6rem,3.2vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-[#1d1d1f]">
            Front-end sites with taste.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-8 text-[#6e6e73]">
            Fast portfolio, business, and editorial websites built with Next.js, React, Tailwind,
            and content you can actually update.
          </p>
          <div className="mt-5 flex justify-center gap-7 text-lg text-[#0066cc]">
            <Link href="#services" className="hover:underline">
              Learn more
            </Link>
            <Link href="/contact" className="hover:underline">
              Start project
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-6xl px-5">
          <div className="relative mx-auto aspect-[16/8.3] overflow-hidden rounded-[2rem] bg-[#111] shadow-2xl shadow-black/20">
            <Image
              src="/images/project-nordic-archive.svg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-3 grid min-h-[650px] content-start overflow-hidden bg-black text-center text-white">
        <div className="mx-auto max-w-5xl px-5 pt-16">
          <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.035em]">
            Sites that feel finished.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[clamp(1.35rem,2.6vw,2.3rem)] font-semibold leading-tight tracking-[-0.02em] text-white/88">
            Navigation, typography, interaction states, mobile behavior, SEO, and speed handled as
            part of the same system.
          </p>
          <div className="mt-5 flex justify-center gap-7 text-lg text-[#2997ff]">
            <Link href="/projects" className="hover:underline">
              View work
            </Link>
            <Link href="/about" className="hover:underline">
              How I work
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-3 gap-3 px-5">
          {["Next.js", "TypeScript", "Tailwind"].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-white/10 px-5 py-10">
              <p className="text-sm font-semibold uppercase tracking-normal text-white/60">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mt-3 grid gap-3 px-3 pb-3 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`grid min-h-[560px] content-between overflow-hidden rounded-none px-6 pb-8 pt-12 text-center ${
              index === 0 || index === 3 ? "bg-white text-[#1d1d1f]" : "bg-[#1d1d1f] text-white"
            }`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${
                  index === 0 || index === 3 ? "text-[#6e6e73]" : "text-white/60"
                }`}
              >
                {service.kicker}
              </p>
              <h3 className="mt-2 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                {service.title}
              </h3>
              <p
                className={`mx-auto mt-4 max-w-md text-lg leading-7 ${
                  index === 0 || index === 3 ? "text-[#6e6e73]" : "text-white/70"
                }`}
              >
                {service.body}
              </p>
              <Link
                href={service.href}
                className={`mt-5 inline-block text-lg hover:underline ${
                  index === 0 || index === 3 ? "text-[#0066cc]" : "text-[#2997ff]"
                }`}
              >
                Learn more
              </Link>
            </div>

            <div
              className={`mx-auto mt-12 grid h-44 w-full max-w-lg place-items-center rounded-[2rem] ${
                index === 0 || index === 3 ? "bg-[#f5f5f7]" : "bg-white/10"
              }`}
              aria-hidden="true"
            >
              <div
                className={`h-24 w-3/4 rounded-[1.5rem] border ${
                  index === 0 || index === 3 ? "border-black/10 bg-white" : "border-white/10 bg-white/10"
                }`}
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
