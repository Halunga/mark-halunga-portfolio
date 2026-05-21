import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 grid max-w-grid gap-8 border-t border-white/10 px-4 py-8 text-sm text-steel sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
      <p>Mark Halunga. Portfolio, notes, and selected work.</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/projects" className="hover:text-ink">
          Work
        </Link>
        <Link href="/blog" className="hover:text-ink">
          Writing
        </Link>
        <Link href="/contact" className="hover:text-ink">
          Contact
        </Link>
      </div>
    </footer>
  );
}
