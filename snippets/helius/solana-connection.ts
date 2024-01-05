import type { Helius } from 'helius-sdk'

// Example of how to access the Solana connection object
export async function solanaConnection(client: Helius) {
  // Print the genesis hash of the node
  // Will print EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG on devnet
  const hash = await client.connection.getGenesisHash()
  console.log('Genesis hash:', hash)

  // Print the version of the node
  const version = await client.connection.getVersion()
  console.log('Version:', version)
}
