import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        cream: "var(--cream)",
        "cream-muted": "var(--cream-muted)",
        bottle: "var(--bottle)",
        "bottle-soft": "var(--bottle-soft)",
        amber: "var(--amber)",
        burnt: "var(--burnt)",
        line: "var(--line)",
        paper: "var(--paper)",
      },
      fontFamily: {
        serif: ["Georgia", "Iowan Old Style", "Palatino Linotype", "Palatino", "serif"],
        sans: ["Inter", "Aptos", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 90px rgba(0, 0, 0, 0.32)",
        warm: "0 20px 80px rgba(197, 111, 45, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
