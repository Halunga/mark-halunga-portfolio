export type KarmaCard = {
  title: string;
  description: string;
  eyebrow: string;
  href: string;
  gradient: string;
  art: "chip" | "spiral" | "block" | "orbit" | "water" | "paper" | "lens" | "grid" | "sphere";
};

export const karmaIntro = {
  section: "",
  title: "CARBON12",
  kicker: "Visually Creative",
  accent: "Creative Visionary",
  description: ""
};

export const karmaCards: KarmaCard[] = [
  {
    title: "Visual Work",
    description: "Illustration, renders, compositions, layouts, visual studies, and image making.",
    eyebrow: "Images",
    href: "/projects",
    gradient: "linear-gradient(145deg, #5c35d6 0%, #231a88 72%)",
    art: "chip"
  },
  {
    title: "Film & Motion",
    description: "Video work, editing, cinematic studies, moving image, and media-based work.",
    eyebrow: "Moving image",
    href: "/projects/silent-commerce",
    gradient: "linear-gradient(155deg, #bb7047 0%, #5b241f 80%)",
    art: "paper"
  },
  {
    title: "Environments",
    description:
      "Landscapes, interiors, structures, atmosphere, Blender scenes, and environmental studies.",
    eyebrow: "Places",
    href: "/projects/field-notes",
    gradient: "linear-gradient(145deg, #c9a032 0%, #725718 80%)",
    art: "water"
  },
  {
    title: "Notes & Ideas",
    description: "Writing, observations, reflections, process notes, and ongoing thoughts.",
    eyebrow: "Writing",
    href: "/blog",
    gradient: "linear-gradient(155deg, #dd3d6d 0%, #9f234c 78%)",
    art: "orbit"
  },
  {
    title: "Process",
    description:
      "Sketches, workflows, references, behind-the-scenes material, and development work.",
    eyebrow: "Working method",
    href: "/about",
    gradient: "linear-gradient(150deg, #4eaa32 0%, #276d20 80%)",
    art: "block"
  },
  {
    title: "Archive",
    description:
      "Collected material, studies, references, visual collections, and selected past material.",
    eyebrow: "Collected",
    href: "/projects/nordic-archive",
    gradient: "linear-gradient(145deg, #50a9c2 0%, #1e566c 82%)",
    art: "spiral"
  }
];
