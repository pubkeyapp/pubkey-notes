import { getHeliusClient, solanaConnection } from './helpers'

// Instantiate the Helius SDK
const client = getHeliusClient()

// Example of how to access the Solana connection object
await solanaConnection(client)
