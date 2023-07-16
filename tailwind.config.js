/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        black: "#0B0D17",
        lightPurpule:"#D0D6F9",
        white:"#FFFFFF"
      },
      fontFamily: {
        barlowCondensed: ["barlow-condensed", "sans-serif"],
        bellafair: ["bellafair", "sans-serif"],
      },
      fontSize: {
        "h1":"150px",
        "h2":"100px",
        "h3":"56px",
        "h4":"32px",
        "h5":"28px",
        "s2":"14px",
        "nav":"16px",
        "body":"18px"
      },
      spacing: {
        "xs":"4.75ch",
        "s":"2.35ch",
        "m":"3.7ch",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
