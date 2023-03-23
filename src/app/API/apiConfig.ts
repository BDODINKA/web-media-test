import axios from 'axios'

import { ICurrency } from '../../interface/currencyInterface'

const instance = axios.create({
  withCredentials: false,
  headers: {
    'API-KEY': process.env.API_KEY,
  },
})

export const api = {
  get: (currency: { val: any; val2: ICurrency }) =>
    instance.get('price', {
      params: {
        fsym: currency.val,
        tsyms: currency.val2,
      },
    }),
}
