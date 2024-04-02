export const getLPSymbol = (token0Symbol: string, token1Symbol: string) => {
  if (token0Symbol === 'WBNB') {
    return `BERA-${token1Symbol} LP`
  }
  if (token1Symbol === 'WBNB') {
    return `${token0Symbol}-BERA LP`
  }
  return `${token0Symbol}-${token1Symbol} LP`
}
