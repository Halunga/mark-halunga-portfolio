# Mark Halunga Portfolio

A dark editorial portfolio and journal built with Next.js, TypeScript, Tailwind, and MDX.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Content

Homepage text lives in `data/home.ts`.
Site name, URL, email, and social links live in `data/site.ts`.
Navigation lives in `data/navigation.ts`.

Project case studies live in `content/projects/*.mdx`.

Each file starts with a `metadata` export:

```ts
export const metadata = {
  title: "Project title",
  category: "AI media",
  year: "2026",
  shortDescription: "Short description used in cards and SEO.",
  thumbnail: "/images/project-image.svg",
  heroImage: "/images/project-image.svg",
  tags: ["Design", "Frontend"],
  featured: true,
  role: "Creative direction, design, build",
  overview: "Case study overview.",
  challenge: "The core problem.",
  process: "How the work was shaped.",
  result: "What changed.",
  gallery: ["/images/project-image.svg"]
};
```

Write the case-study body below the metadata with normal Markdown/MDX.

Journal posts live in `content/blog/*.mdx`. They use the same pattern with `title`,
`excerpt`, `date`, `category`, and `readingTime`.

## Replace Images

Put images in `public/images`, then update `thumbnail`, `heroImage`, and `gallery` values in a project MDX file.
Use paths that start with `/images/`, for example:

```ts
thumbnail: "/images/my-project.jpg"
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

## Deploy to Vercel

Push the project to GitHub, import the repository in Vercel, and keep the default Next.js settings.
Vercel will run `npm install` and `npm run build`.
