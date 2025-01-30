import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#030303",
        "custom-medium-brown": "#7A746E",
        "custom-light-cream": "#FFF7F0",
        "custom-galactic-blue": "#755CDE",
        "custom-summer-yellow": "#F6A560",
        "custom-pink": "#F39E9E",
        "custom-light-red": "#EB7565",
        "custom-cyan": "#61C4B7",
        "custom-dark-purple": "#552049",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
