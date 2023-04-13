/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: {
        400: "#8D8D8D",
        500: "#0A0A0A",
        600: "#5F5F5F",
        700: "#484848",
        900: "#1A1A1A",
        950: "#000000",
      },
      grey: {
        50: "#F7F7F7",
        100: "#F0F0F0",
        200: "#E8E8E8",
        300: "#A39D9E",
        500: "#EDEDED",
        600: "#F4F4F4",
        700: "#565C69",
      },
      pink: {
        400: "#FFFBF7",
        500: "#EF2C5A",
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px", letterSpacing: "-0.01em" }],
      sm: ["14px", { lineHeight: "20px", letterSpacing: "-0.01em" }],
      base: ["16px", { lineHeight: "24px", letterSpacing: "-0.02em" }],
      lg: ["18px", { lineHeight: "24px", letterSpacing: "-0.02em" }],
      xl: ["20px", { lineHeight: "32px", letterSpacing: "-0.02em" }],
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "general-sans": ["General-Sans", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        fadeOut: "fadeOut 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
