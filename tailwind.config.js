/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-bg": "#212529",
        "hover": "#343A40",
        "dark-1": "#343A40",
        "dark-2": "#495057",
        "dark-3": "#6C757D",
        "light-4": "#ADB5BD",
        "light-3": "#CED4DA",
        "light-2": "#DEE2E6",
        "light-1": "#E9ECEF",
        "custom-white": "#F8F9FA",
      },
    },
  },
  plugins: [],
};
