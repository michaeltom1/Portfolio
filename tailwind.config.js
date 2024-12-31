/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        900: "900px",
      },
      fontSize: {
        "responsive-text": "clamp(40px, 8vw, 80px)",
      },
      backgroundImage: {
        "grid-bg":
          "linear-gradient(to right, #fafafa 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px)",
        "grid-bg-dark":
          "linear-gradient(to right, #33333346 1px, transparent 1px), linear-gradient(to bottom, #33333346 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "70px 70px",
      },
      boxShadow: {
        "card-shadow": "0 0 10px 0",
      },
      colors: {
        "hello-color": "#333333",
        light: {
          background: "#ffffff",
          foreground: "#171717",
          Name: "#000000",
          job: "#333333",
          "card-bg": "#ffffff",
          "card-shadow": "#e4e4e4",
          "text-color": "#4d4d4d",
          "border-color": "#fafafa",
        },
        dark: {
          background: "#0d0f12",
          foreground: "#ededed",
          Name: "#ffffff",
          job: "#cccccc",
          "nav-bg": "#00000080",
          "card-bg": "#15161c",
          "card-shadow": "#16171d",
          "text-color": "#b3b3b3",
          "border-color": "#33333346",
        },
      },
    },
  },
  plugins: [],
};
