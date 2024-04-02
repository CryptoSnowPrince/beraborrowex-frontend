import { StaticJsonRpcProvider } from '@ethersproject/providers'

// export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://artio.rpc.berachain.com'
export const BSC_PROD_NODE = 'https://artio.rpc.berachain.com'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
