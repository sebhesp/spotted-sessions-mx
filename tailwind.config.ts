import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        red: "var(--red)",
        acid: "var(--acid)",
        card: "var(--card)",
      },
      fontFamily: {
        display: [
          "Arial Narrow",
          "Roboto Condensed",
          "Aptos Narrow",
          "Inter Tight",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "Inter",
          "Aptos",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        redline: "0 0 0 1px rgba(255, 45, 45, 0.45), 0 22px 90px rgba(255, 45, 45, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
