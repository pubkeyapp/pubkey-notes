import { getAllAssetsByOwner, getHeliusClient } from './helpers'
import { solanaConnection } from './solana-connection.ts'

// Instantiate the Helius SDK
const client = getHeliusClient()

await solanaConnection(client)

// async getAllAssetsByOwner(account: string, collections?: string): Promise<GetAllAssetsByOwner> {
//   const list: GetAllAssetsByOwner = { total: 0, items: [] }
// const limit = 1000
// let page = 1
//
// while (list.total < page * limit) {
//   const assets = await this.getAssetsByOwner(account, collections, limit, page)
//   if (assets.items.length === 0) {
//     break
//   }
//   list.items.push(...assets.items)
//   list.total += assets.total
//   page++
// }
//
// return list
// }

await getAllAssetsByOwner(client, 'Dd1JSwojUsptwFa97A3WRZU1SijCWYo9Qa3xLxT8yzb7')
  //
  .then(({ limit, page, total }) => {
    console.log(JSON.stringify({ account: '1', limit, page, total }, null, 2))
  })
