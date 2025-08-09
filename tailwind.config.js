/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        youtube: {
          red: "#ff0000",
          gray: {
            50: "#f9f9f9",
            100: "#f2f2f2",
            200: "#e8e8e8",
            300: "#e0e0e0",
            400: "#ccc",
            500: "#606060",
            600: "#424242",
            900: "#0f0f0f",
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in": "slideIn 0.3s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.1)",
        medium: "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
