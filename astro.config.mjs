import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'PubKey Notes',
      social: {
        github: 'https://github.com/pubkeyapp/pubkey-notes',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
        {
          label: 'Helius',
          autogenerate: {
            directory: 'helius',
          },
        },
        {
          label: 'Solana',
          autogenerate: {
            directory: 'solana',
          },
        },
        {
          label: 'Dev',
          autogenerate: {
            directory: 'dev',
          },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
