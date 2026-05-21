import type { MetadataRoute } from "next";
import { siteSettings } from "@/data/site";
import { blogSlugs, projectSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/blog", "/about", "/contact"].map((route) => ({
    url: `${siteSettings.url}${route}`,
    lastModified: new Date()
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteSettings.url}/projects/${slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${siteSettings.url}/blog/${slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
