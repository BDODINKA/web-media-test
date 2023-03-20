import { ICurrency } from '../interface/currencyInterface'

export const converterETHtoUSD = (value: string, currency: ICurrency): string => {
  switch (currency) {
    case '$': {
      return (+value * 1962.8).toString()
    }

    case 'ETH': {
      return (+value / 1962.8).toString()
    }

    default:
      return ''
  }
}
