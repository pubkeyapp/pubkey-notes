import { type DAS, Helius } from 'helius-sdk'
import { findAssetsByGroup } from './find-assets-by-group.ts'

/**
 * Get all assets by owner and filter by optional list of groups (comma separated)
 * @param client Helius Helius client
 * @param owner string Solana account address of owner
 * @param groups string Optional list of groups (comma separated)
 */
export async function getAllAssetsByOwner(
  client: Helius,
  owner: string,
  groups?: string,
): Promise<DAS.GetAssetResponseList> {
  // Create a response list similar to the one returned by the API
  const list: DAS.GetAssetResponseList = { total: 0, items: [], limit: 1000, page: 1 }

  // Loop through all pages of assets
  while (list.total < list.page * list.limit) {
    const assets = await client.rpc.getAssetsByOwner({
      ownerAddress: owner,
      limit: list.limit,
      page: list.page,
    })
    if (assets.items.length === 0) {
      break
    }
    list.items.push(...assets.items)
    list.total += assets.total
    list.page++
  }

  // Filter the assets by group
  const items = list?.items ? findAssetsByGroup(list?.items, groups) : []

  // Return the list with the page offset by 1
  return { ...list, page: list.page - 1, items }
}
