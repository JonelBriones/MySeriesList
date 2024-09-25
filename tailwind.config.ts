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
        "dark-gray-blue": "#161D2F",
      },
      fontFamily: {
        body: ["Outfit"],
      },
      fontSize: {
        hl: [
          "32px",
          {
            fontWeight: "300",
          },
        ],
        hm: [
          "24px",
          {
            fontWeight: "300",
          },
        ],
        hs: [
          "24px",
          {
            fontWeight: "500",
          },
        ],
        xs: [
          "18px",
          {
            fontWeight: "500",
          },
        ],
        bm: [
          "15px",
          {
            fontWeight: "300",
          },
        ],
        bs: [
          "13px",
          {
            fontWeight: "300",
          },
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
