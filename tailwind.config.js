/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "rainbow-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "gradient-move": "gradient-move 3s linear infinite",
        "rainbow-border": "rainbow-border 2s linear infinite",
      },
    },
  },
  plugins: [],
};
