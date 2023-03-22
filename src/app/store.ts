import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { cardReducer } from '../features/card/cardReducer'

import { appReducer } from './appReducer'
export const store = configureStore({
  reducer: {
    app: appReducer,
    card: cardReducer,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// @ts-ignore
window.store = store
