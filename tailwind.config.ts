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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0B1E3C", // Royal Deep Navy
          pitch: "#061020",   // Midnight Pitch
          slate: "#122A54",   // Dark Slate
          card: "#0D2140",    // Elevated Card surface
          cardHover: "#132D56", // Card Hover state
          border: "#1C3B6B",  // Border outline
          borderMuted: "rgba(28, 59, 107, 0.4)",
        },
        gold: {
          DEFAULT: "#F2A93B", // Regal Gold
          amber: "#FFB627",   // Regal Amber
          light: "#FDE08B",   // Highlight Gold
          dark: "#C57E17",    // Deep Gold
          glow: "rgba(242, 169, 59, 0.25)",
        },
        maroon: {
          DEFAULT: "#7A1F2B", // Rajasthani Royal Maroon
          light: "#9A2737",   // Vibrant Maroon
          dark: "#53121B",    // Shadow Maroon
          glow: "rgba(122, 31, 43, 0.35)",
        },
        royal: {
          slate: "#94A3B8",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(242, 169, 59, 0.25)",
        "gold-glow-lg": "0 0 50px rgba(242, 169, 59, 0.45)",
        "maroon-glow": "0 0 30px rgba(122, 31, 43, 0.35)",
        "pitch-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #F2A93B 0%, #FFD074 50%, #D68B20 100%)",
        "maroon-gradient": "linear-gradient(135deg, #7A1F2B 0%, #9A2737 100%)",
        "navy-gradient": "linear-gradient(180deg, #0B1E3C 0%, #061020 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
