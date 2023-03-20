import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICurrency } from '../../interface/currencyInterface'
import { converterETHtoUSD } from '../../utils/converterETHtoUSD'

export type CardStateType = {
  OneNNTPrice: string
  totalPrice: string
  currency: ICurrency
}

const slice = createSlice({
  name: 'CARD',
  initialState: {
    OneNNTPrice: '45.41',
    totalPrice: '',
    currency: '$',
  } as CardStateType,
  reducers: {
    setTotalPriceAC: (state, action: PayloadAction<{ totalPrice: string; curr: ICurrency }>) => {
      state.totalPrice = action.payload.totalPrice
      state.currency = action.payload.curr
    },
    setCurrencyAC: (state, action: PayloadAction<{ curr: ICurrency }>) => {
      state.currency = action.payload.curr
      if (action.payload.curr === 'ETH') {
        state.OneNNTPrice = converterETHtoUSD(state.OneNNTPrice, action.payload.curr)
      }
      if (action.payload.curr === '$') {
        state.OneNNTPrice = converterETHtoUSD(state.OneNNTPrice, action.payload.curr)
      }
    },
  },
})

export const cardReducer = slice.reducer

export const { setTotalPriceAC, setCurrencyAC } = slice.actions
