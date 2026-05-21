export type KarmaCard = {
  title: string;
  eyebrow: string;
  href: string;
  gradient: string;
  art: "chip" | "spiral" | "block" | "orbit" | "water" | "paper" | "lens" | "grid" | "sphere";
};

export const karmaIntro = {
  section: "Archive",
  title: "Open notes from a visual practice",
  accent: "MARK HALUNGA",
  description:
    "Design notes, AI image tests, water records, spatial studies, interface systems, and unfinished ideas worth keeping in public."
};

export const karmaCards: KarmaCard[] = [
  {
    title: "AI image systems without the novelty hangover",
    eyebrow: "AI tools",
    href: "/blog/dark-editorial-systems",
    gradient: "linear-gradient(145deg, #5c35d6 0%, #231a88 72%)",
    art: "chip"
  },
  {
    title: "A small archive for work that refuses one category",
    eyebrow: "Visual systems",
    href: "/projects/nordic-archive",
    gradient: "linear-gradient(155deg, #bb7047 0%, #5b241f 80%)",
    art: "paper"
  },
  {
    title: "Water Lines and the problem of public clarity",
    eyebrow: "Water projects",
    href: "/projects/water-lines",
    gradient: "linear-gradient(145deg, #c9a032 0%, #725718 80%)",
    art: "water"
  },
  {
    title: "Strict grids make better ambiguity",
    eyebrow: "Design",
    href: "/blog/strict-grids",
    gradient: "linear-gradient(155deg, #dd3d6d 0%, #9f234c 78%)",
    art: "orbit"
  },
  {
    title: "Field notes for buildings, rooms, and quiet shadows",
    eyebrow: "Architecture images",
    href: "/projects/field-notes",
    gradient: "linear-gradient(150deg, #4eaa32 0%, #276d20 80%)",
    art: "block"
  },
  {
    title: "Silent commerce and restrained product storytelling",
    eyebrow: "Media tests",
    href: "/projects/silent-commerce",
    gradient: "linear-gradient(145deg, #50a9c2 0%, #1e566c 82%)",
    art: "spiral"
  },
  {
    title: "Notes on making tools feel less theatrical",
    eyebrow: "Process",
    href: "/about",
    gradient: "linear-gradient(145deg, #e05f3f 0%, #6f2f25 80%)",
    art: "lens"
  },
  {
    title: "The practical romance of a content system",
    eyebrow: "MDX",
    href: "/projects/nordic-archive",
    gradient: "linear-gradient(145deg, #2f64d8 0%, #152d70 80%)",
    art: "grid"
  },
  {
    title: "What to keep, what to cut, what to let breathe",
    eyebrow: "Writing",
    href: "/blog/strict-grids",
    gradient: "linear-gradient(145deg, #7a3bb6 0%, #261b5a 82%)",
    art: "sphere"
  }
];
