"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const groups = [
  {
    label: "Portfolio",
    links: [
      { href: "/projects", label: "Portfolio" },
      { href: "/projects/water-lines", label: "Water Lines" },
      { href: "/projects/nordic-archive", label: "Nordic Archive" }
    ]
  },
  {
    label: "Ideas",
    links: [
      { href: "/blog", label: "Ideas" },
      { href: "/blog/strict-grids", label: "Strict Grids" },
      { href: "/blog/dark-editorial-systems", label: "Dark Editorial Systems" }
    ]
  },
  {
    label: "Archive",
    links: [
      { href: "/", label: "Archive" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ]
  }
];

function pageLabel(pathname: string) {
  if (pathname === "/") return "Archive";
  if (pathname.startsWith("/projects")) return "Portfolio";
  if (pathname.startsWith("/blog")) return "Ideas";
  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/contact")) return "Contact";
  return "Carbon 12";
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#171717]/90 px-5 py-5 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-5" aria-label="Main navigation">
        <div className="flex h-16 min-w-0 flex-1 items-center rounded-lg bg-white/15 px-5 text-white md:h-20 md:px-10">
          <Link
            href="/"
            className="mr-4 grid h-6 w-8 place-items-center border-r border-white/30 pr-4"
            aria-label="Carbon 12 home"
            onClick={() => setOpen(false)}
          >
            <span className="text-[18px]">⌂</span>
          </Link>
          <span className="truncate text-[16px] text-white/45 md:text-[18px]">{pageLabel(pathname)}</span>
        </div>

        <button
          type="button"
          className="grid h-16 w-16 place-items-center rounded bg-[#df252b] text-white transition hover:bg-[#c91f25] md:h-20 md:w-20"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-[28px] leading-none">{open ? "×" : "≡"}</span>
          <span className="mt-[-10px] text-[10px] font-semibold uppercase">Menu</span>
        </button>
      </nav>

      <div
        id="site-menu"
        className={`fixed inset-0 z-[-1] overflow-y-auto bg-[#171717] px-5 pb-10 pt-28 transition ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          {groups.map((group) => (
            <section key={group.label} className="border-t border-white/15 pt-6">
              <p className="mb-8 text-[14px] font-black uppercase tracking-[0.18em] text-white/35">
                {group.label}
              </p>
              <ul className="grid gap-5">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group text-[28px] leading-none text-white/80 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <span className="ml-3 inline-block translate-x-0 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-4 md:flex-row">
          <Link
            href="/projects"
            className="rounded-full border border-white px-8 py-4 text-center text-white hover:bg-white hover:text-[#171717]"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[#df252b] px-8 py-4 text-center text-white hover:bg-[#c91f25]"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
