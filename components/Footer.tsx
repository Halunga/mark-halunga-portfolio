import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteSettings } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#df252b] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="text-[58px] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white md:text-[92px]">
            Mark
            <br />
            Halunga
          </p>
        </div>
        <div className="grid gap-6">
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="max-w-xl text-sm text-white/65">
            {siteSettings.name}. Design, image making, AI tools, water projects, architecture
            visualization, writing, and creative systems.
          </p>
          <p className="text-sm text-white/55">©2026 Mark Halunga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
