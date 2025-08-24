/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
