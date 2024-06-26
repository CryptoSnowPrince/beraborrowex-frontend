import addresses from 'config/constants/contracts'

import { GRAPH_API_PREDICTION_POLLEN, GRAPH_API_PREDICTION_BNB } from 'config/constants/endpoints'
import { getAddress } from 'utils/addressHelpers'
import { bscTokens } from 'config/constants/tokens'
import { BigNumber } from '@ethersproject/bignumber'

const DEFAULT_MIN_PRICE_USD_DISPLAYED = BigNumber.from(10000)

export default {
  BERA: {
    address: getAddress(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBNB),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.bnb,
  },
  POLLEN: {
    address: getAddress(addresses.predictionsPOLLEN),
    api: GRAPH_API_PREDICTION_POLLEN,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBERABORROWEX),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.cake,
  },
}
