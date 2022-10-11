/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",
          secondary: "#ff5e19",
          accent: "#0c0e3f",
          neutral: "#252B3C",
          "base-100": "#090a27",

          info: "#71C4DA",
          success: "#21CAA5",
          warning: "#AD7810",
          error: "#F26E75",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
