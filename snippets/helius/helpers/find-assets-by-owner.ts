import type { DAS } from 'helius-sdk'

/**
 * Filter assets by optional list of owners (comma separated)
 * @param items DAS.GetAssetResponse[] List of assets to filter
 * @param owners string Optional list of owners (comma separated)
 */
export function findAssetsByOwner(items: DAS.GetAssetResponse[], owners?: string) {
  return items.filter((item) => !owners || owners.split(',').includes(item.ownership.owner ?? ''))
}
