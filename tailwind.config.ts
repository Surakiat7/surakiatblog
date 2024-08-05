import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp1: "fadeInUp 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards",
        fadeInUp2: "fadeInUp 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards",
        fadeInUp3: "fadeInUp 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards",
        fadeInUp4: "fadeInUp 1.25s cubic-bezier(0.4, 0, 0.2, 1) 0.75s forwards",
      },
      screens: {
        sm: { min: "220px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1660px" },
        xxl: { min: "1661px", max: "2560px" },
        xxxl: { min: "2561px" },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      layout: {},
      themes: {
        light: {
          colors: {
            // primary: "#FFFFFF",
          },
        },
        dark: {
          colors: {
            // primary: "#000000",
          },
        },
      },
    }),
  ],
};
export default config;
