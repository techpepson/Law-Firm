/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: {
          primary: `#ca8a04`,
        },
      },
    },
  },
  plugins: [],
};
