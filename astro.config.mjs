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
          label: 'Helius',

          items: [
            { label: 'Overview', link: '/helius' },
            { label: 'Getting Started', link: '/helius/getting-started/' },
            { label: 'Examples', autogenerate: { directory: 'helius/examples' } },
          ],
        },
        {
          label: 'Solana',
          autogenerate: {
            directory: 'solana',
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
