import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f4efe6",
        ink: "#f5f1e8",
        coal: "#070707",
        night: "#101010",
        steel: "#a7ada6",
        moss: "#7f8f79",
        rust: "#b95f42"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      maxWidth: {
        grid: "1440px"
      }
    }
  },
  plugins: []
};

export default config;
