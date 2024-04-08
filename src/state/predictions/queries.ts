import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsBERABORROWEX,
  betBaseFields as betBaseFieldsBERABORROWEX,
  userBaseFields as userBaseFieldsBERABORROWEX,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'POLLEN' ? roundBaseFieldsBERABORROWEX : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'POLLEN' ? betBaseFieldsBERABORROWEX : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'POLLEN' ? userBaseFieldsBERABORROWEX : userBaseFieldsBNB
