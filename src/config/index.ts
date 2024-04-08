import { ChainId } from '@pancakeswap/sdk'
import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.BSC]: 'https://artio.beratrail.io',
  [ChainId.BSC_TESTNET]: 'https://testnet.bscscan.com',
}

// BERABORROWEX_PER_BLOCK details
// 40 POLLEN is minted per block
// 20 POLLEN per block is sent to Burn pool (A farm just for burning cake)
// 10 POLLEN per block goes to POLLEN syrup pool
// 9 POLLEN per block goes to Yield farms and lottery
// BERABORROWEX_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// POLLEN/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const BERABORROWEX_PER_BLOCK = 40
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const BERABORROWEX_PER_YEAR = BERABORROWEX_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = 'https://beraborrowex.metabest.tech'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.BSC]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 250000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
