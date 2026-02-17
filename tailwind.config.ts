import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prussian: {
          DEFAULT: '#0A3658',
          light: '#347FB2',
          mid: '#1F5B85',
          pale: '#f0f4f8',
        },
      },
      fontFamily: {
        sans: ['"Tajawal"', '"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', '"Tajawal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
