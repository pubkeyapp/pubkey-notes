import { Helius, type HeliusCluster } from 'helius-sdk'

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
