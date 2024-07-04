/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#DD1845",
        secondary: "#1C1C1D",
        body: "#2A2B2A",
      },
    },
  },
  plugins: [],
  purge: false,
};

