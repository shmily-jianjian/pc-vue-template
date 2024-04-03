import type { Config } from 'tailwindcss'

const tailwindcssConfig: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default tailwindcssConfig
