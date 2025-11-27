import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Indigo
        secondary: '#1e293b', // Slate
      }
    },
  },
  plugins: [],
};
export default config;