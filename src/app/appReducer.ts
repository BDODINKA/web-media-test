import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from './API/apiConfig'

export type AppStateType = {
  fromAsset: string
  toAsset: string
  fromAssetMinAmount: string
  fromAssetMaxAmount: string
  toAssetMinAmount: string
  toAssetMaxAmount: string
}

export const setAppState = createAsyncThunk('APP/SET-ALL-CURRENCY', async (arg, thunkAPI) => {
  const res = await api.get({ val: 'ETH', val2: 'USD' })

  try {
    console.log(res.data)
  } catch (reason) {
    console.log(res.data)

    return thunkAPI.rejectWithValue(reason)
  }
})

const slice = createSlice({
  name: 'APP',
  initialState: [] as AppStateType[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setAppState.fulfilled, state => {
      state
    })
  },
})

export const appReducer = slice.reducer
