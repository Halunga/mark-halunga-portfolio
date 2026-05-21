import createMDX from "@next/mdx";

const repoName = "mark-halunga-portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  poweredByHeader: false,
  reactStrictMode: true
};

export default withMDX(nextConfig);
