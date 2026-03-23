import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f7f1",
          100: "#d9eadb",
          200: "#b5d6ba",
          300: "#85b98e",
          400: "#5a9a66",
          500: "#3d7d4c",
          600: "#2e643b",
          700: "#265031",
          800: "#204029",
          900: "#1a3522",
          950: "#0d1f13",
        },
        earth: {
          50: "#faf6f1",
          100: "#f0e6d6",
          200: "#e0ccab",
          300: "#cdab79",
          400: "#be8f54",
          500: "#b07a42",
          600: "#996237",
          700: "#7d4b30",
          800: "#693e2d",
          900: "#593529",
          950: "#321a14",
        },
        cream: "#FAF7F2",
        charcoal: "#111111",
        deep: "#0d0d0d",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-cormorant)", "Palatino Linotype", "serif"],
        mono: ["var(--font-dm-mono)", "Courier New", "monospace"],
        caps: ["var(--font-cormorant)", "Palatino Linotype", "serif"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease both",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "heading": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
};

export default config;
