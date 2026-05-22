import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ideas",
  description: "Notes, observations, reflections, and process writing from Carbon 12."
};

const feature = {
  title: "Live studies, not bigger promises",
  deck: "Visual notes on building systems that keep the eye involved.",
  href: "/blog/inside-the-carbon-12-visual-factory",
  author: "Mark Halunga",
  date: "May 22, 2026",
  tone: "mint-dog"
};

const topLeft = [
  {
    title: "What comes after a new era for images",
    href: "/blog/dark-editorial-systems",
    author: "Mark Halunga",
    tone: "yellow-hand"
  },
  {
    title: "Inside the line: The AI research assistant you have been drawing of",
    href: "/blog/inside-the-carbon-12-visual-factory",
    author: "Mark Halunga",
    tone: "yellow-figure"
  }
];

const recent = [
  "Painting over AI's strange velocity",
  "A human and machine roughness",
  "OpenAI's model, explained for visual work",
  "The future problem of images"
];

const sections = [
  {
    kicker: "Dispatches from the frontiers of AI",
    note: "The latest models, image systems, products, and creative workflows.",
    items: [
      ["How language models look", "A note on process images for grids", "Mark Halunga", "black-orb"],
      ["AI can help you make quiet life decisions", "Notebook prompts for keeping decisions with a little proximity", "Carbon 12", "orange-door"],
      ["GPT-5 is coming: Reading between the lines at Microsoft Build", "Notes and scans from the AI everything developer conference", "Mark Halunga", "pink-chair"],
      ["How I use ChatGPT as a reasonable person", "Not an oracle. More like a spare table.", "Mark Halunga", "green-board"]
    ]
  },
  {
    kicker: "Putting AI to work",
    note: "Everything you need to know about form, tools, and applied systems.",
    items: [
      ["How to become an expert at anything with AI", "Using ChatGPT and Claude for research rituals", "Mark Halunga", "silver-head"],
      ["Inside the pod: Use ChatGPT to supercharge your productivity", "Expand the horizon of focus work you can do with AI", "Mark Halunga", "yellow-portrait"],
      ["Inside the pod: How to use AI to be a smarter investor", "Searching for obscure truths with GPT-5", "Mark Halunga", "market-chart"],
      ["Why I avoided AI, and how I finally embraced it", "Using a new technology can be hard. Here is what you can do about it.", "Mark Halunga", "radio-box"]
    ]
  },
  {
    kicker: "The next built environment",
    note: "How image systems and architecture studies are made.",
    items: [
      ["Here is a visual idea worth keeping", "Unlocking the shape of a new visual operating system", "Mark Halunga", "money-screen"],
      ["The art of scaling taste", "How small visual rules increase decision quality", "Mark Halunga", "green-figure"],
      ["The art of the AI pivot", "How one composition became three image systems", "Mark Halunga", "purple-rail"],
      ["What are AI agents and who profits from them?", "The messy state of AI research in changing everything", "Mark Halunga", "green-hat"]
    ]
  },
  {
    kicker: "Silicon valley history",
    note: "The forgotten men and women who built the foundations of technology.",
    items: [
      ["The secret father of modern computing", "How forgotten research can still reshape visual archives", "Mark Halunga", "red-computer"],
      ["The rise and fall of Steve Jobs's greatest rival", "Adam Osborne and the matter of consequence", "Mark Halunga", "teal-face"],
      ["She built a microcomputer empire from her suburban home", "The untold story of Lore Harp McGovern", "Mark Halunga", "blue-woman"],
      ["The misfit who built the IBM PC", "Don Estridge broke all of IBM's rules to create the home computer.", "Mark Halunga", "cream-man"]
    ]
  }
];

function StoryImage({ tone, tall = false }: { tone: string; tall?: boolean }) {
  return (
    <div className={`ideas-art ideas-art-${tone} ${tall ? "ideas-art-tall" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function Byline({ author }: { author: string }) {
  return (
    <p className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-white/56">
      <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_35%_30%,#f7e7cf,#df252b_55%,#111_56%)]" />
      {author}
    </p>
  );
}

function StoryCard({
  title,
  summary,
  author,
  tone
}: {
  title: string;
  summary: string;
  author: string;
  tone: string;
}) {
  return (
    <Link href="/blog/inside-the-carbon-12-visual-factory" className="group block">
      <StoryImage tone={tone} />
      <h3 className="mt-3 text-[19px] font-medium leading-[1.05] tracking-[-0.025em] text-white group-hover:text-[#baf1ff]">
        {title}
      </h3>
      <p className="mt-2 text-[12px] leading-5 text-white/48">{summary}</p>
      <Byline author={author} />
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-[1180px] px-5 pb-12 pt-5">
        <div className="flex items-center justify-between border-b border-white/14 pb-4 text-[12px] text-white/72">
          <div className="flex items-center gap-4">
            <span className="text-lg leading-none">≡</span>
            <span className="text-sm leading-none">⌕</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden hover:text-white sm:block">
              Sign in
            </Link>
            <Link href="/contact" className="rounded bg-[#baf1ff] px-3 py-2 font-bold text-black">
              Subscribe
            </Link>
          </div>
        </div>

        <Link
          href="/blog"
          className="mx-auto block w-fit py-7 font-serif text-[58px] uppercase leading-none tracking-[-0.08em] md:text-[86px]"
        >
          IDEAS
        </Link>

        <div className="grid gap-8 border-b border-white/14 pb-8 lg:grid-cols-[250px_1fr_260px]">
          <div className="grid gap-6">
            {topLeft.map((item) => (
              <Link key={item.title} href={item.href} className="group block border-b border-white/10 pb-5 last:border-0">
                <StoryImage tone={item.tone} />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">Sep 18, 2026</p>
                <h2 className="mt-2 text-[17px] font-medium leading-[1.05] tracking-[-0.02em] group-hover:text-[#baf1ff]">
                  {item.title}
                </h2>
                <Byline author={item.author} />
              </Link>
            ))}
          </div>

          <Link href={feature.href} className="group block text-center">
            <StoryImage tone={feature.tone} tall />
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/42">{feature.date}</p>
            <h1 className="mx-auto mt-3 max-w-[420px] text-[31px] font-medium leading-[0.98] tracking-[-0.035em] group-hover:text-[#baf1ff]">
              {feature.title}
            </h1>
            <p className="mx-auto mt-3 max-w-[390px] text-[13px] leading-5 text-white/55">{feature.deck}</p>
            <div className="flex justify-center">
              <Byline author={feature.author} />
            </div>
          </Link>

          <aside>
            <div className="mb-3 flex items-center justify-between border-b border-white/14 pb-2">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/58">Recent essays</h2>
              <span className="text-white/45">→</span>
            </div>
            <div className="grid gap-3">
              {recent.map((title, index) => (
                <Link
                  key={title}
                  href="/blog/inside-the-carbon-12-visual-factory"
                  className="grid grid-cols-[54px_1fr] gap-3 border-b border-white/10 pb-3 last:border-0"
                >
                  <StoryImage tone={["pink-chair", "yellow-hand", "green-board", "teal-face"][index]} />
                  <div>
                    <h3 className="text-[14px] font-medium leading-[1.05] tracking-[-0.02em] hover:text-[#baf1ff]">
                      {title}
                    </h3>
                    <Byline author="Mark Halunga" />
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {sections.slice(0, 1).map((section) => (
          <section key={section.kicker} className="border-b border-white/14 py-8">
            <Link href="/blog/inside-the-carbon-12-visual-factory" className="mb-5 flex items-end justify-between gap-5">
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">{section.kicker}</h2>
                <p className="mt-1 text-[12px] text-white/48">{section.note}</p>
              </div>
              <span className="text-white/45">→</span>
            </Link>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {section.items.map(([title, summary, author, tone]) => (
                <StoryCard key={title} title={title} summary={summary} author={author} tone={tone} />
              ))}
            </div>
          </section>
        ))}

        <section className="border-b border-white/14 py-10">
          <div className="mx-auto grid max-w-[980px] items-center gap-8 bg-[#baf1ff] px-8 py-12 text-center text-black md:grid-cols-[1fr_1.1fr] md:text-left">
            <div>
              <p className="font-serif text-[34px] uppercase tracking-[-0.07em]">IDEAS</p>
              <h2 className="mt-4 text-[30px] font-medium leading-[1.08] tracking-[-0.035em]">
                Stories, visual systems, notes, and tools for making with more attention.
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {["#dff3f7", "#cc83ef", "#4938df", "#ff8b24"].map((color) => (
                <span key={color} className="aspect-square rounded-2xl" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </section>

        {sections.slice(1).map((section) => (
          <section key={section.kicker} className="border-b border-white/14 py-8">
            <Link href="/blog/inside-the-carbon-12-visual-factory" className="mb-5 flex items-end justify-between gap-5">
              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white">{section.kicker}</h2>
                <p className="mt-1 text-[12px] text-white/48">{section.note}</p>
              </div>
              <span className="text-white/45">→</span>
            </Link>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {section.items.map(([title, summary, author, tone]) => (
                <StoryCard key={title} title={title} summary={summary} author={author} tone={tone} />
              ))}
            </div>
          </section>
        ))}

        <section className="grid gap-10 py-12 md:grid-cols-[1fr_260px]">
          <div>
            <p className="font-serif text-[42px] uppercase leading-none tracking-[-0.07em]">IDEAS</p>
            <h2 className="mt-5 text-[28px] font-medium leading-none tracking-[-0.035em]">What comes next</h2>
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/58">
              Notes on visual work, systems, tools, and the human attention inside the process.
            </p>
            <div className="mt-5 flex max-w-[520px] flex-col gap-2 sm:flex-row">
              <input
                aria-label="Email address"
                placeholder="Email address"
                className="min-h-10 flex-1 border border-white/30 bg-black px-3 text-sm text-white placeholder:text-white/34"
              />
              <button type="button" className="min-h-10 bg-[#baf1ff] px-6 text-sm font-bold text-black">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid gap-3 text-[12px] text-white/64 md:justify-end">
            {["About", "Contact", "Portfolio", "The archive", "FAQ", "Terms"].map((item) => (
              <Link key={item} href={item === "Portfolio" ? "/projects" : "/contact"} className="hover:text-white">
                {item} →
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
