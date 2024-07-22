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
backgroundImage: {
        linear:
          "linear-gradient(180deg, #1a1a1a 0%, #1c1a1a 50%, #0e0e0e 100%)",
        noise:"url('/noise.svg')"
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
        geist: ['var(--font-geist-sans)'],
},
    },
  },
} satisfies Config

export default config
