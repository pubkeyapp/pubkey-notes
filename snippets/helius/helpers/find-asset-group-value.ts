import type { DAS } from 'helius-sdk'

/**
 * Find the collection group value for the asset
 * @param asset DAS.GetAssetResponse Asset to find the collection group value for
 */
export function findAssetGroupValue(asset: DAS.GetAssetResponse) {
  return asset.grouping?.find((g) => g.group_key === 'collection')?.group_value
}
