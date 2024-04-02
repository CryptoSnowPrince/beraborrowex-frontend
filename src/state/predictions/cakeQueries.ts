import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponseBERABORROWEX extends UserResponse<BetResponseBERABORROWEX> {
  totalBERABORROWEX: string
  totalBERABORROWEXBull: string
  totalBERABORROWEXBear: string
  averageBERABORROWEX: string
  totalBERABORROWEXClaimed: string
  netBERABORROWEX: string
}

export interface BetResponseBERABORROWEX extends BetResponse {
  claimedBERABORROWEX: string
  claimedNetBERABORROWEX: string
  user?: UserResponseBERABORROWEX
  round?: RoundResponseBERABORROWEX
}

export type HistoricalBetResponseBERABORROWEX = HistoricalBetResponse<UserResponseBERABORROWEX>

export type RoundResponseBERABORROWEX = RoundResponse<BetResponseBERABORROWEX>

export interface TotalWonMarketResponseBERABORROWEX {
  totalBERABORROWEX: string
  totalBERABORROWEXTreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedBERABORROWEX
 claimedNetBERABORROWEX
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalBERABORROWEX
  totalBERABORROWEXBull
  totalBERABORROWEXBear
  totalBetsClaimed
  totalBERABORROWEXClaimed
  winRate
  averageBERABORROWEX
  netBERABORROWEX
`
