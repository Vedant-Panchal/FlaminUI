import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  prefix: "",
  theme: {

    extend: {
      backgroundColor: {
        "ghost-bg": "ghost-bg",
        "ghost-text": "ghost-text",
        "ghost-hover": "ghost-hover",
        "primary-100": "bg-rose-100",
        "primary-200": "bg-rose-200",
        "primary-300": "bg-rose-300",
        "primary-400": "bg-rose-400",
        "primary-500": "bg-rose-500",
        "primary-550": "#F65571",
        "primary-600": "bg-rose-600",
        "primary-700": "bg-rose-700",
        "primary-800": "bg-rose-800",
        "primary-900": "bg-rose-900",
        textarea: "bg-textarea",
      },
      textColor: {
        disabled: "text-disabled",
        "text-disabled": "text-disabled",
        "border-disabled": "border-disabled",
        "ghost-bg": "ghost-bg",
        "ghost-text": "ghost-text",
        "ghost-hover": "ghost-hover",
        "primary-100": "text-rose-100",
        "primary-200": "text-rose-200",
        "primary-300": "text-rose-300",
        "primary-400": "text-rose-400",
        "primary-500": "text-rose-500",
        "primary-550": "#F65571",
        "primary-600": "text-rose-600",
        "primary-700": "text-rose-700",
        "primary-800": "text-rose-800",
        "primary-900": "text-rose-900",
      },
      borderColor: {
        "primary-100": "border-rose-100",
        "primary-200": "border-rose-200",
        "primary-300": "border-rose-300",
        "primary-400": "border-rose-400",
        "primary-500": "border-rose-500",
        "primary-600": "border-rose-600",
        "primary-700": "border-rose-700",
        "primary-800": "border-rose-800",
        "primary-900": "border-rose-900",
      },
      backgroundImage: {
        linear:
          "linear-gradient(180deg, #1a1a1a 0%, #1c1a1a 50%, #0e0e0e 100%)",
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
        geist: ["Geist", "sans"],
      },
    },
  },
} satisfies Config

export default config
