import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        charcoal: "var(--color-charcoal)",
        "green-deep": "var(--color-green-deep)",
        "green-bottle": "var(--color-green-bottle)",
        cream: "var(--color-cream)",
        tobacco: "var(--color-tobacco)",
        "burnt-orange": "var(--color-burnt-orange)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
      },
      fontFamily: {
        display: [
          "Georgia",
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "serif",
        ],
        body: [
          "Inter",
          "Aptos",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        credit: [
          "Aptos Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        room: "0 30px 90px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
