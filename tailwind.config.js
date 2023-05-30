/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkestBlack: "hsl(0,0%,2%)",
        darkBlack: "hsl(0,0%,12%)",
        darkestGray: "hsl(0,0%,18%)",
        darkGray: "hsl(0,0%,23%)",

        gray: "hsl(0,0%,51%)",
        lightGray: "hsl(0,0%,91%)",
        lightestGray: "hsl(0,0%,96%)",

        purple: "hsl(274,82%,60%)",
        red: "hsl(0,100%,66%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
