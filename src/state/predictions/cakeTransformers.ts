import { Bet, BetPosition, Round, PredictionUser } from 'state/types'
import numberOrNull from 'utils/numberOrNull'

import { RoundResponseBERABORROWEX } from './cakeQueries'

const getRoundPosition = (positionResponse: string) => {
  if (positionResponse === 'Bull') {
    return BetPosition.BULL
  }

  if (positionResponse === 'Bear') {
    return BetPosition.BEAR
  }

  if (positionResponse === 'House') {
    return BetPosition.HOUSE
  }

  return null
}

export const transformBetResponseBERABORROWEX = (betResponse): Bet => {
  const bet = {
    id: betResponse.id,
    hash: betResponse.hash,
    block: numberOrNull(betResponse.block),
    amount: betResponse.amount ? parseFloat(betResponse.amount) : 0,
    position: betResponse.position === 'Bull' ? BetPosition.BULL : BetPosition.BEAR,
    claimed: betResponse.claimed,
    claimedAt: numberOrNull(betResponse.claimedAt),
    claimedBlock: numberOrNull(betResponse.claimedBlock),
    claimedHash: betResponse.claimedHash,
    claimedBNB: betResponse.claimedBERABORROWEX ? parseFloat(betResponse.claimedBERABORROWEX) : 0,
    claimedNetBNB: betResponse.claimedNetBERABORROWEX ? parseFloat(betResponse.claimedNetBERABORROWEX) : 0,
    createdAt: numberOrNull(betResponse.createdAt),
    updatedAt: numberOrNull(betResponse.updatedAt),
  } as Bet

  if (betResponse.user) {
    bet.user = transformUserResponseBERABORROWEX(betResponse.user)
  }

  if (betResponse.round) {
    bet.round = transformRoundResponseBERABORROWEX(betResponse.round)
  }

  return bet
}

export const transformUserResponseBERABORROWEX = (userResponse): PredictionUser => {
  const {
    id,
    createdAt,
    updatedAt,
    block,
    totalBets,
    totalBetsBull,
    totalBetsBear,
    totalBERABORROWEX,
    totalBERABORROWEXBull,
    totalBERABORROWEXBear,
    totalBetsClaimed,
    totalBERABORROWEXClaimed,
    winRate,
    averageBERABORROWEX,
    netBERABORROWEX,
  } = userResponse || {}

  return {
    id,
    createdAt: numberOrNull(createdAt),
    updatedAt: numberOrNull(updatedAt),
    block: numberOrNull(block),
    totalBets: numberOrNull(totalBets),
    totalBetsBull: numberOrNull(totalBetsBull),
    totalBetsBear: numberOrNull(totalBetsBear),
    totalBNB: totalBERABORROWEX ? parseFloat(totalBERABORROWEX) : 0,
    totalBNBBull: totalBERABORROWEXBull ? parseFloat(totalBERABORROWEXBull) : 0,
    totalBNBBear: totalBERABORROWEXBear ? parseFloat(totalBERABORROWEXBear) : 0,
    totalBetsClaimed: numberOrNull(totalBetsClaimed),
    totalBNBClaimed: totalBERABORROWEXClaimed ? parseFloat(totalBERABORROWEXClaimed) : 0,
    winRate: winRate ? parseFloat(winRate) : 0,
    averageBNB: averageBERABORROWEX ? parseFloat(averageBERABORROWEX) : 0,
    netBNB: netBERABORROWEX ? parseFloat(netBERABORROWEX) : 0,
  }
}

export const transformRoundResponseBERABORROWEX = (roundResponse: RoundResponseBERABORROWEX): Round => {
  const {
    id,
    epoch,
    failed,
    position,
    startAt,
    startBlock,
    startHash,
    lockAt,
    lockBlock,
    lockHash,
    lockPrice,
    lockRoundId,
    closeAt,
    closeBlock,
    closeHash,
    closePrice,
    closeRoundId,
    totalBets,
    totalAmount,
    bullBets,
    bullAmount,
    bearBets,
    bearAmount,
    bets = [],
  } = roundResponse

  return {
    id,
    failed,
    startHash,
    lockHash,
    lockRoundId,
    closeRoundId,
    closeHash,
    position: getRoundPosition(position),
    epoch: numberOrNull(epoch),
    startAt: numberOrNull(startAt),
    startBlock: numberOrNull(startBlock),
    lockAt: numberOrNull(lockAt),
    lockBlock: numberOrNull(lockBlock),
    lockPrice: lockPrice ? parseFloat(lockPrice) : 0,
    closeAt: numberOrNull(closeAt),
    closeBlock: numberOrNull(closeBlock),
    closePrice: closePrice ? parseFloat(closePrice) : 0,
    totalBets: numberOrNull(totalBets),
    totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
    bullBets: numberOrNull(bullBets),
    bullAmount: bullAmount ? parseFloat(bullAmount) : 0,
    bearBets: numberOrNull(bearBets),
    bearAmount: bearAmount ? parseFloat(bearAmount) : 0,
    bets: bets.map(transformBetResponseBERABORROWEX),
  }
}
