import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#07080b",
          card: "#0d0f15",
          subtle: "#121520",
          border: "rgba(255, 255, 255, 0.08)",
        },
        fire: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff5500",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          glow: "rgba(255, 85, 0, 0.45)",
          amber: "#f59e0b",
        },
        ai: {
          emerald: "#ff6a00",
          cyan: "#ff9500",
          indigo: "#ff4500",
          violet: "#f97316",
          glow: "rgba(255, 85, 0, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        heading: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "fire-pulse": "firePulse 3s ease-in-out infinite",
        "light-beam": "lightBeam 7s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
        firePulse: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        lightBeam: {
          "0%": { opacity: "0.65", transform: "rotate(-25deg) translate(-2%, -2%)" },
          "100%": { opacity: "0.9", transform: "rotate(-23deg) translate(2%, 1%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
