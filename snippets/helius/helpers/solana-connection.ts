import type { Helius } from 'helius-sdk'

// Example of how to access the Solana connection object
export async function solanaConnection(client: Helius) {
  // Print the genesis hash of the node
  // Will print  on devnet
  const hash = await client.connection.getGenesisHash()
  console.log(`Genesis: ${hash}, cluster: ${getCluster(hash)}`)

  // Print the version of the node
  const version = await client.connection.getVersion()
  console.log('Version:', version)
}

export function getCluster(hash: string) {
  switch (hash) {
    case 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG':
      return 'Devnet'
    case '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d':
      return 'Mainnet'
    default:
      return 'Unknown (not devnet or mainnet-beta)'
  }
}
