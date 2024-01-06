import { type DAS, Helius } from 'helius-sdk'
import { findAssetsByOwner } from './find-assets-by-owner.ts'

/**
 * Get all assets by collection and filter by optional list of owners (comma separated)
 * @param client Helius Helius client
 * @param group string Solana account address of group
 * @param owners string Optional list of owners (comma separated)
 */
export async function getAllAssetsByGroup(
  client: Helius,
  group: string,
  owners?: string,
): Promise<DAS.GetAssetResponseList> {
  // Create a response list similar to the one returned by the API
  const list: DAS.GetAssetResponseList = { total: 0, items: [], limit: 1000, page: 1 }

  // Loop through all pages of assets
  while (list.total < list.page * list.limit) {
    const assets = await client.rpc.getAssetsByGroup({
      groupKey: 'collection',
      groupValue: group,
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

  // Filter the assets by owner
  const items = list.items?.length ? findAssetsByOwner(list?.items, owners) : []

  // Return the list with the page offset by 1
  return { ...list, page: list.page - 1, items }
}
