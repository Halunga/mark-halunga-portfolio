import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteSettings } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    default: `${siteSettings.name} | Design, AI Media, Creative Systems`,
    template: `%s | ${siteSettings.name}`
  },
  description: siteSettings.description,
  openGraph: {
    title: siteSettings.name,
    description: siteSettings.description,
    url: siteSettings.url,
    siteName: siteSettings.name,
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
  themeColor: "#070707"
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
