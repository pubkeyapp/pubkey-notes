import { findAssetGroupValue, getAllAssetsByOwner, getHeliusClient } from './helpers'

// Instantiate the Helius SDK
const client = getHeliusClient()

// Get the account and groups from the environment variables
const owner = process.env['OWNER'] ?? 'BeEMuaaQCQPodQdaA7W6Rmsu7761vCabN4Tth6jA4VCP'
const groups = process.env['GROUPS']

// Get all assets for this owner and filter by groups
await getAllAssetsByOwner(client, owner, groups)
  // Print the results
  .then(({ items, limit, page, total }) => {
    const result = {
      items: items
        .map((i) => ({
          id: i.id,
          name: i.content?.metadata.name,
          collectionId: findAssetGroupValue(i),
        }))
        .sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
      owner,
      limit,
      page,
      total,
      owned: items.length,
    }
    console.log(JSON.stringify(result, null, 2))
  })
  .catch((err) => console.error(`Something went wrong:`, err))
