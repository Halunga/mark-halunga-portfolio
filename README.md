# Mark Halunga Portfolio

A dark editorial portfolio and journal built with Next.js, TypeScript, Tailwind, and MDX.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Content

Project case studies live in `content/projects/*.mdx`.

Each file starts with a `metadata` export:

```ts
export const metadata = {
  title: "Project title",
  summary: "Short description used in cards and SEO.",
  year: "2026",
  discipline: "Digital archive",
  image: "/images/project-image.svg",
  tags: ["Design", "Frontend"],
  featured: true,
  client: "Client name",
  role: "Your role"
};
```

Write the case-study body below the metadata with normal Markdown/MDX.

Journal posts live in `content/blog/*.mdx`. They use the same pattern with `title`,
`summary`, and `date`.

## Replace Images

Put images in `public/images`, then update the `image` value in a project MDX file.
Use paths that start with `/images/`, for example:

```ts
image: "/images/my-project.jpg"
```

The current SVG files are placeholders and can be replaced with JPG, PNG, WebP, or SVG files.

## Main Files

- `app/page.tsx` controls the homepage.
- `app/projects/page.tsx` controls the portfolio index.
- `app/projects/[slug]/page.tsx` controls project detail pages.
- `app/blog/page.tsx` controls the journal index.
- `app/blog/[slug]/page.tsx` controls journal post pages.
- `app/about/page.tsx` controls the about page.
- `app/contact/page.tsx` controls the contact page.
- `components/` contains reusable layout and listing components.
- `app/globals.css` contains the global visual system and MDX typography.
- `lib/content.ts` registers MDX files so Next can statically build them.

When you add a new MDX file, also add it to the matching import map in `lib/content.ts`.
