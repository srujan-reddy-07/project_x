import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7a5fd2",
        "primary-light": "#9b7ef8",
        "primary-dark": "#5a3fb2",
        accent: "#c084fc",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: { to: { backgroundPosition: "var(--bg-size) 0" } },
        "float-around": {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "25%": { transform: "translate(80px,-40px) rotate(90deg)" },
          "50%": { transform: "translate(0,80px) rotate(180deg)" },
          "75%": { transform: "translate(-80px,40px) rotate(270deg)" },
        },
        "border-beam": { "100%": { "offset-distance": "100%" } },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(122,95,210,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(122,95,210,0.7), 0 0 80px rgba(192,132,252,0.3)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        gradient: "gradient 8s linear infinite",
        "float-around": "float-around 20s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        shimmer: "shimmer 2s infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
