/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // src/app folder
    "./src/pages/**/*.{js,ts,jsx,tsx}",    // agar pages folder use ho raha hai
    "./src/components/**/*.{js,ts,jsx,tsx}" // src/components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // root CSS variable
      },
    },
  },
  plugins: [],
};
