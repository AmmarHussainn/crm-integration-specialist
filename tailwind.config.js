/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        surface: "#12181F",
        surface2: "#171F28",
        border: "#232D38",
        text: "#E8ECF1",
        muted: "#8A97A6",
        cyan: {
          DEFAULT: "#4CC9F0",
          dim: "#2E7C93",
        },
        brass: {
          DEFAULT: "#D4AF6A",
          dim: "#8C7346",
        },
        live: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "bowtie": "radial-gradient(60% 80% at 50% 50%, rgba(76,201,240,0.18) 0%, rgba(76,201,240,0) 70%)",
      },
      keyframes: {
        pulseLine: {
          "0%, 100%": { opacity: 0.25 },
          "50%": { opacity: 1 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulseLine: "pulseLine 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
