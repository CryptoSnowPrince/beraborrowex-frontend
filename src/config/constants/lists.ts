const BERABORROWEX_EXTENDED = 'https://tokens.beraborrowex.metabest.tech/pancakeswap-extended.json'
const COINGECKO = 'https://tokens.beraborrowex.metabest.tech/coingecko.json'
const CMC = 'https://tokens.beraborrowex.metabest.tech/cmc.json'

// List of official tokens list
export const OFFICIAL_LISTS = [BERABORROWEX_EXTENDED]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  BERABORROWEX_EXTENDED,
  CMC,
  COINGECKO,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
