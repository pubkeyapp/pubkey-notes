import type { DAS, HeliusCluster } from 'helius-sdk'
import { Helius } from 'helius-sdk'

export function getHeliusClient(): Helius {
  // Get your API key from https://dev.helius.xyz/
  const apiKey = process.env['HELIUS_API_KEY']

  if (!apiKey) {
    throw new Error('Please set the HELIUS_API_KEY environment variable.')
  }
  const cluster: string = process.env['HELIUS_CLUSTER'] ?? 'devnet'

  if (!['devnet', 'mainnet-beta'].includes(cluster as string)) {
    throw new Error('Please set the HELIUS_CLUSTER environment variable to devnet or mainnet-beta.')
  }

  // Instantiate the Helius SDK
  return new Helius(apiKey, cluster as HeliusCluster) // or 'mainnet-beta'
}

// Helper to find the collection ID for an asset
function findCollectionId(asset: DAS.GetAssetResponse) {
  return asset.grouping?.find((g) => g.group_key === 'collection')?.group_value
}

// Helper to filter assets by optional list of collections (comma separated)
function filterAssetsByCollection(items: DAS.GetAssetResponse[], collections?: string) {
  return items.filter((item) => !collections || collections.split(',').includes(findCollectionId(item) ?? ''))
}

// Get assets by owner and filter by optional list of collections (comma separated)
export async function getAssetsByOwner(
  client: Helius,
  account: string,
  collections?: string,
  limit = 1000,
  page = 1,
): Promise<DAS.GetAssetResponseList> {
  return client.rpc
    .getAssetsByOwner({
      ownerAddress: account,
      limit,
      page,
    })
    .then((res) => {
      const items = res?.items ? filterAssetsByCollection(res?.items, collections) : []
      return { ...res, total: items.length, items }
    })
}

// Get all assets by owner and filter by optional list of collections (comma separated)
export async function getAllAssetsByOwner(
  client: Helius,
  account: string,
  collections?: string,
): Promise<DAS.GetAssetResponseList> {
  const list: DAS.GetAssetResponseList = { total: 0, items: [], limit: 1000, page: 1 }

  while (list.total < list.page * list.limit) {
    const assets = await getAssetsByOwner(client, account, collections, list.limit, list.page)
    if (assets.items.length === 0) {
      break
    }
    list.items.push(...assets.items)
    list.total += assets.total
    list.page++
  }

  return { ...list, page: list.page - 1 }
}
