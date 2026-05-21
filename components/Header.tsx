"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-coal/80 text-ink backdrop-blur-xl">
      <nav
        className="mx-auto grid h-[var(--site-nav-height)] max-w-grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="grid h-full w-11 place-items-center text-[13px] font-semibold tracking-normal"
          aria-label="Mark Halunga home"
          onClick={() => setOpen(false)}
        >
          MH
        </Link>

        <button
          type="button"
          className="inline-flex h-full items-center justify-self-end text-xs font-medium uppercase tracking-[0.2em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-xs font-medium uppercase tracking-[0.16em] transition ${
                  active ? "text-ink" : "text-steel hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="hidden text-xs font-medium uppercase tracking-[0.16em] text-rust hover:text-ink md:block">
          Start
        </Link>
      </nav>

      <div
        id="mobile-menu"
        className={`${open ? "grid" : "hidden"} border-t border-black/10 bg-coal md:hidden`}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-black/10 px-5 py-5 font-serif text-4xl font-medium"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
