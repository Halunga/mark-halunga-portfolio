"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/projects", label: "Portfolio" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-coal/88 backdrop-blur">
      <nav
        className="mx-auto flex max-w-grid items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="grid h-11 w-11 place-items-center border border-white/20 text-sm font-black uppercase tracking-normal"
          aria-label="Mark Halunga home"
          onClick={() => setOpen(false)}
        >
          MH
        </Link>

        <button
          type="button"
          className="inline-flex h-11 items-center border border-white/20 px-4 text-xs font-bold uppercase tracking-normal md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-normal transition ${
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
        className={`${open ? "grid" : "hidden"} border-t border-white/10 md:hidden`}
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
