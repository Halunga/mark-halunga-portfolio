import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteSettings } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-black text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="font-serif text-[54px] uppercase leading-[0.86] tracking-[-0.08em] text-white md:text-[86px]">
            Carbon
            <br />
            12
          </p>
        </div>
        <div className="grid gap-6">
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/78">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="max-w-xl text-sm text-white/55">
            {siteSettings.name}. Design, image making, AI tools, water projects, architecture
            visualization, writing, and creative systems.
          </p>
          <p className="text-sm text-white/42">©2026 Carbon 12. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
