export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4a6fa5",
          dark: "#3a5a8c",
          light: "#6b8cb9",
        },
        secondary: {
          DEFAULT: "#4fb286",
          dark: "#3a9970",
          light: "#6fc49d",
        },
        tertiary: {
          DEFAULT: "#7e57c2",
          dark: "#6a46b0",
          light: "#9575cd",
        },
        background: "#d0d7e2",
        card: "#ffffff",
        text: {
          primary: "#333333",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};