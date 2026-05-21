import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://halunga.github.io/mark-halunga-portfolio/sitemap.xml"
  };
}
