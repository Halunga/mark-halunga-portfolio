import type { ComponentType } from "react";

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  discipline: string;
  image: string;
  tags: string[];
  featured?: boolean;
  client?: string;
  role?: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  href: string;
};

type ProjectModule = {
  default: ComponentType;
  metadata: Omit<ProjectMeta, "slug">;
};

type BlogModule = {
  default: ComponentType;
  metadata: Omit<PostMeta, "slug" | "href">;
};

const projectImports = {
  "nordic-archive": () => import("@/content/projects/nordic-archive.mdx"),
  "silent-commerce": () => import("@/content/projects/silent-commerce.mdx"),
  "field-notes": () => import("@/content/projects/field-notes.mdx")
} satisfies Record<string, () => Promise<ProjectModule>>;

const blogImports = {
  "strict-grids": () => import("@/content/blog/strict-grids.mdx"),
  "dark-editorial-systems": () => import("@/content/blog/dark-editorial-systems.mdx")
} satisfies Record<string, () => Promise<BlogModule>>;

export const projectSlugs = Object.keys(projectImports);
export const blogSlugs = Object.keys(blogImports);

export async function getProjects() {
  const projects = await Promise.all(
    Object.entries(projectImports).map(async ([slug, load]) => {
      const mod = await load();
      return { slug, ...mod.metadata };
    })
  );

  return projects.sort((a, b) => Number(b.year) - Number(a.year));
}

export async function getProject(slug: string) {
  const load = projectImports[slug as keyof typeof projectImports];
  if (!load) return null;

  const mod = await load();
  return {
    meta: { slug, ...mod.metadata },
    Content: mod.default
  };
}

export async function getPosts() {
  const posts = await Promise.all(
    Object.entries(blogImports).map(async ([slug, load]) => {
      const mod = await load();
      return { slug, href: `/blog/${slug}`, ...mod.metadata };
    })
  );

  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getPost(slug: string) {
  const load = blogImports[slug as keyof typeof blogImports];
  if (!load) return null;

  const mod = await load();
  return {
    meta: { slug, href: `/blog/${slug}`, ...mod.metadata },
    Content: mod.default
  };
}
