import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F97316",
          light: "#FB923C",
          dark: "#EA580C",
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        secondary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        background: "#FFF7ED",
        surface: "#FFFFFF",
        foreground: "#9A3412",
        "foreground-light": "#C2410C",
        muted: "#F1F0F0",
        border: "#FED7AA",
        destructive: "#DC2626",
        ring: "#F97316",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
      },
      boxShadow: {
        card: "0 12px 32px rgba(249, 115, 22, 0.08)",
        "clay": "8px 8px 16px rgba(249, 115, 22, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.8)",
        "clay-hover": "12px 12px 24px rgba(249, 115, 22, 0.2), -6px -6px 16px rgba(255, 255, 255, 0.9)",
        "fluffy": "0 6px 0 #EA580C, 0 8px 16px rgba(249, 115, 22, 0.3)",
        "fluffy-hover": "0 8px 0 #EA580C, 0 12px 24px rgba(249, 115, 22, 0.4)",
        "fluffy-active": "0 2px 0 #EA580C, 0 4px 8px rgba(249, 115, 22, 0.3)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        display: ["Fredoka", "PingFang SC", "system-ui", "sans-serif"],
        sans: ["Nunito", "PingFang SC", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.02)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      transitionTimingFunction: {
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
export default config;