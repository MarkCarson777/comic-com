import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        input: "#000",
      },
      ringColor: {
        ring: "#7cc0e7",
      },
      ringOffsetColor: {
        background: "var(--background)",
      },
      colors: {
        primary: {
          DEFAULT: "#457ee6",
          foreground: "#FFF",
        },
        secondary: {
          DEFAULT: "#696b69",
          foreground: "#FFF",
        },
        destructive: {
          DEFAULT: "#d9483a",
          foreground: "#FFF",
        },
        accent: {
          DEFAULT: "#7a7a7a",
          foreground: "#FFF",
        },
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
export default config;
