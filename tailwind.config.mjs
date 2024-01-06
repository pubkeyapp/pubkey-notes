import starlightPlugin from '@astrojs/starlight-tailwind'
import { DEFAULT_THEME } from '@mantine/core'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: convertToTailwind(DEFAULT_THEME.colors.dark),
        brand: convertToTailwind(DEFAULT_THEME.colors.blue),
      },
    },
  },
  plugins: [starlightPlugin()],
}

function convertToTailwind(items) {
  return {
    50: items[0],
    100: items[1],
    200: items[2],
    300: items[3],
    400: items[4],
    500: items[5],
    600: items[6],
    700: items[7],
    800: items[8],
    900: items[9],
  }
}
