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
        ink: "#1d1d1f",
        coal: "#f6f3ed",
        night: "#e8e3d9",
        steel: "#6e6e73",
        moss: "#6f7f70",
        rust: "#9f4f38"
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
