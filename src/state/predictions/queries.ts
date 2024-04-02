import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsFLUIDEX,
  betBaseFields as betBaseFieldsFLUIDEX,
  userBaseFields as userBaseFieldsFLUIDEX,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'FLUIDEX' ? roundBaseFieldsFLUIDEX : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'FLUIDEX' ? betBaseFieldsFLUIDEX : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'FLUIDEX' ? userBaseFieldsFLUIDEX : userBaseFieldsBNB
