import { getAllAssetsByGroup, getHeliusClient } from './helpers'

// Instantiate the Helius SDK
const client = getHeliusClient()

// Get the group and owners from the environment variables
const group = process.env['GROUP'] ?? 'Da7ryJm1WRaZagzWVSYvS8dtwQnV1iN3cz76wGH7D6UX'
const owners = process.env['OWNERS']

// Get all assets for this group and filter by owners
await getAllAssetsByGroup(client, group, owners)
  // Print the results
  .then(({ items, limit, page, total }) => {
    const result = {
      items: items
        .map((i) => ({
          id: i.id,
          name: i.content?.metadata.name,
          owner: i.ownership?.owner,
        }))
        .sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
      group,
      limit,
      page,
      total,
      owned: owners?.length ? items.length : undefined,
    }
    console.log(JSON.stringify(result, null, 2))
  })
  .catch((err) => console.error(`Something went wrong:`, err))
