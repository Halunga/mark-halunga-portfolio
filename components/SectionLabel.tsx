import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-grid px-4 sm:px-6 lg:px-8">
      <p className="border-t border-black/15 pt-5 text-xs font-black uppercase text-rust">{children}</p>
    </div>
  );
}
