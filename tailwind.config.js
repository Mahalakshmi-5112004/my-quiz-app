/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pastelBg: "#eaf7fa",
        cardEdge: "#dff3f8",
        darkTeal: "#0f3f54",
        lightBlue: "#def2fc"
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
