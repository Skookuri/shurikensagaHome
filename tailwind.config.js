/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmPurp: {
          500: "#885d9a",
          600: "#724789",
          700: "#613a77",
        },
        coolPurp: {
          500: "#524c73",
          600: "#35345d",
          700: "#13121e",
        },
        yt: "#e7e7eb",
        moontan: "#edc6a1",
        blueGrey: "#9ea8b2",
      },
    },
  },
  plugins: [],
};
