import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'PubKey Notes',
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
      social: {
        github: 'https://github.com/pubkeyapp/pubkey-notes',
      },
      sidebar: [
        {
          label: 'Helius',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/helius' },
            { label: 'Getting Started', link: '/helius/getting-started/' },
            {
              label: 'Examples',
              collapsed: false,
              autogenerate: { directory: 'helius/examples' },
            },
          ],
        },
        {
          label: 'Solana CLI',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/solana-cli' },
            { label: 'Getting Started', link: '/solana-cli/getting-started/' },
            {
              label: 'Examples',
              collapsed: false,
              autogenerate: { directory: '/solana-cli/examples' },
            },
          ],
        },
        {
          label: 'Solana TypeScript SDK',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/solana-ts' },
            { label: 'Getting Started', link: '/solana-ts/getting-started/' },
            {
              label: 'Examples',
              collapsed: false,
              autogenerate: { directory: '/solana-ts/examples' },
            },
          ],
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
