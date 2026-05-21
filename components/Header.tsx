"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 text-[#1d1d1f] backdrop-blur-xl">
      <nav
        className="mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-0"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="grid h-11 w-10 place-items-center text-[13px] font-semibold tracking-normal"
          aria-label="Mark Halunga home"
          onClick={() => setOpen(false)}
        >
          MH
        </Link>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-self-end text-xs font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              !item.href.includes("#") &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 text-xs font-normal tracking-normal transition ${
                  active ? "text-black" : "text-black/70 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="hidden text-xs text-[#0066cc] hover:underline md:block">
          Start project
        </Link>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? "grid" : "hidden"} border-t border-black/10 bg-white md:hidden`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-black/10 px-5 py-5 text-2xl font-semibold"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
