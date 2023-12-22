/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "app": "url('./src/assets/bg-app.png')",
      },
    },
  },
  plugins: [],
};
