import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICurrency} from "../../interface/currencyInterface";

export type CardStateType = {
    OneNNTPrice:string
    totalPrice:string,
    currency: ICurrency
}

const slice = createSlice({
    name: 'CARD',
    initialState: {
        OneNNTPrice: '45.41',
        totalPrice:'',
        currency: '$'
    } as CardStateType,
    reducers: {
        setTotalPriceAC: (state, action: PayloadAction<{ totalPrice: string,curr:ICurrency }>) => {
            state.totalPrice = action.payload.totalPrice
            state.currency = action.payload.curr
        },
    }
})

export const cardReducer = slice.reducer

export const {setTotalPriceAC} = slice.actions
