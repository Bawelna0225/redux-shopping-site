import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import currencyReducer from '../features/currencySlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
  },
})