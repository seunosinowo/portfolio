/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        primary: "#00f0ff",
        secondary: "#ff00e5",
        accent: "#9600ff",
        "text-light": "rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        custom: "12px",
      },
      animation: {
        dance: "dance 6s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        dance: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(2deg)" },
          "50%": { transform: "translateY(0) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
}