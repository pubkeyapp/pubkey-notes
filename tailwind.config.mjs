import starlightPlugin from '@astrojs/starlight-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#C9C9C9',
          100: '#b8b8b8',
          200: '#828282',
          300: '#696969',
          400: '#424242',
          500: '#3b3b3b',
          600: '#2e2e2e',
          700: '#242424',
          800: '#1f1f1f',
          900: '#141414',
        },
      },
    },
  },
  plugins: [starlightPlugin()],
}
