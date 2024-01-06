import type { DAS } from 'helius-sdk'

import { findAssetGroupValue } from './find-asset-group-value.ts'

/**
 * Filter assets by optional list of collections (comma separated)
 * @param items DAS.GetAssetResponse[] List of assets to filter
 * @param groups string Optional list of groups (comma separated)
 */
export function findAssetsByGroup(items: DAS.GetAssetResponse[], groups?: string) {
  return items.filter((item) => !groups || groups.split(',').includes(findAssetGroupValue(item) ?? ''))
}
