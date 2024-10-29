import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['var(--font-lexend-deca)', ...defaultTheme.fontFamily.sans],
        'lora': ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
        'inter': ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};
export default config;