import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardStateType } from '../features/card/cardReducer'
import { ICurrency } from '../interface/currencyInterface'

import { api } from './API/apiConfig'

export const setAppState = createAsyncThunk<
  { data: Record<ICurrency, number>; currency: ICurrency },
  undefined,
  { state: { card: CardStateType } }
>(
  'APP/SET-ALL-CURRENCY',
  async (
    arg,
    { dispatch, getState, rejectWithValue }
  ): Promise<Promise<{ data: Record<ICurrency, number>; currency: ICurrency }> | any> => {
    const { currency } = getState().card

    const from = currency === 'USD' ? currency : 'ETH'
    const to = currency !== 'USD' ? 'USD' : 'ETH'

    dispatch(setAppRequest({ request: true }))

    const res = await api.get({
      val: from,
      val2: to,
    })

    try {
      return { data: res.data, currency }
    } catch (reason) {
      return rejectWithValue(reason)
    }
  }
)

type AppStateType = {
  exchangeRates: Record<ICurrency, number>
  error: string
  request: boolean
}

const slice = createSlice({
  name: 'APP',
  initialState: {
    error: '',
    exchangeRates: {
      ETH: 0,
      USD: 0,
    },
    request: true,
  } as AppStateType,
  reducers: {
    setAppRequest: (state, action: PayloadAction<{ request: boolean }>) => {
      state.request = action.payload.request
    },
  },
  extraReducers: builder => {
    builder.addCase(setAppState.fulfilled, (state, action) => {
      state.exchangeRates = action.payload.data
      state.request = false
    })
    builder.addCase(setAppState.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message
      } else {
        state.error = 'Something Wrong'
      }
      state.request = false
    })
  },
})

export const appReducer = slice.reducer
export const { setAppRequest } = slice.actions
