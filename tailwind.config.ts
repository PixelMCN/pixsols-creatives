import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0A0A0A",
        "surface-light": "#111111",
        accent: "#EEFF00",
        "text-primary": "#FFFFFF",
        "text-muted": "#666666",
        border: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(238,255,0,0.3)",
        "glow-sm": "0 0 12px rgba(238,255,0,0.2)",
        "glow-lg": "0 0 48px rgba(238,255,0,0.4)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
