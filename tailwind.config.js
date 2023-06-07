/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    extend: {
      colors: {
        darkestBlackCustom: "hsl(0,0%,2%)",
        darkBlackCustom: "hsl(0,0%,12%)",
        darkestGrayCustom: "hsl(0,0%,18%)",
        darkGrayCustom: "hsl(0,0%,23%)",
        grayCustom: "hsl(0,0%,51%)",
        lightGrayCustom: "hsl(0,0%,91%)",
        lightestGrayCustom: "hsl(0,0%,96%)",
        purpleCustom: "hsl(274,82%,60%)",
        redCustom: "hsl(0,100%,66%)",
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
