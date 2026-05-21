import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://halunga.github.io/mark-halunga-portfolio"),
  title: {
    default: "Mark Halunga | Portfolio and Journal",
    template: "%s | Mark Halunga"
  },
  description:
    "Mark Halunga builds fast, polished websites, portfolio systems, and editorial front ends with Next.js, TypeScript, Tailwind, and MDX.",
  openGraph: {
    title: "Mark Halunga | Portfolio and Journal",
    description:
      "Fast websites, portfolio systems, and editorial front ends by Mark Halunga.",
    url: "https://halunga.github.io/mark-halunga-portfolio",
    siteName: "Mark Halunga",
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
  themeColor: "#f5f5f7"
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
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
