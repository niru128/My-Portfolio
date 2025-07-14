// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
  scrollbar: ['rounded']
},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
