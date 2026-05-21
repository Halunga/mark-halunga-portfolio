import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://halunga.github.io/polish-phrasebook"),
  title: {
    default: "Polish Phrasebook",
    template: "%s | Polish Phrasebook"
  },
  description:
    "A focused Polish phrasebook app with common phrases, pronunciation hints, and browser audio playback.",
  openGraph: {
    title: "Polish Phrasebook",
    description: "Listen to common Polish phrases for everyday conversation.",
    url: "https://halunga.github.io/polish-phrasebook",
    siteName: "Polish Phrasebook",
    images: [{ url: "/images/og-mark-halunga.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f3ed"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-black focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <main id="content">{children}</main>
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
