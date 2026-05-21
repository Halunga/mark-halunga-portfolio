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
        bone: "#f6f3ed",
        ink: "#ffffff",
        coal: "#171717",
        night: "#101010",
        steel: "#a8a8a8",
        moss: "#72b844",
        rust: "#df252b"
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
