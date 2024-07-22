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
      },
    },
  },
} satisfies Config

export default config
