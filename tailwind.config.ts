import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-red": "#FC4747",
        "primary-dark-blue": "#10141E",
        "off-gray-blue": "#5A698F",
        "dark-gray-blue": "161D2F",
      },
      fontFamily: {
        body: ["Outfit"],
      },
    },
  },
  plugins: [],
};
export default config;
