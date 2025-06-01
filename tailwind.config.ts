import { type Config } from "tailwindcss";

export default {
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      mono: ['"Jetbrains Mono"', "monospace"],
    }
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;
