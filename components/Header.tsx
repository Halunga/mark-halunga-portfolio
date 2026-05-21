"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/#builds", label: "Builds" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-coal/92 backdrop-blur-xl">
      <nav
        className="mx-auto grid max-w-grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="grid h-12 w-12 place-items-center border border-white/25 bg-ink text-sm font-black uppercase tracking-normal text-coal"
          aria-label="Mark Halunga home"
          onClick={() => setOpen(false)}
        >
          MH
        </Link>

        <p className="hidden text-[11px] font-bold uppercase text-steel sm:block">
          Front-end development / design systems / content sites
        </p>

        <button
          type="button"
          className="inline-flex h-12 items-center border border-white/20 px-4 text-xs font-bold uppercase tracking-normal md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div className="hidden items-center justify-end gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href !== "/#builds" &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-[11px] font-bold uppercase tracking-normal transition ${
                  active ? "bg-ink text-coal" : "text-steel hover:bg-white/10 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? "grid" : "hidden"} border-t border-white/10 bg-coal md:hidden`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-white/10 px-4 py-5 text-2xl font-semibold"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
