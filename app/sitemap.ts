import type { MetadataRoute } from "next";
import { blogSlugs, projectSlugs } from "@/lib/content";

const siteUrl = "https://halunga.github.io/mark-halunga-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/blog", "/about", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
