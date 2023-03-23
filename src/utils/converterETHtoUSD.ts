export const converterETHtoUSD = (value: string, exchangeRates: number): string => {
  return (+value * exchangeRates).toString()
}
