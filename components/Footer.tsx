import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteSettings } from "@/data/site";

export function Footer() {
  return (
    <footer className="mx-auto mt-28 grid max-w-grid gap-8 border-t border-white/15 px-4 py-10 text-sm text-steel sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
      <p className="max-w-md">
        {siteSettings.name}. Design, illustration, AI media, architecture visualization, water
        stories, and creative systems.
      </p>
      <div className="flex flex-wrap gap-4">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
