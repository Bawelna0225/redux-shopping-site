import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		itemAdded(state, action) {
			state.cartItems.push(action.payload)
		},
		itemRemoved(state, action) {
			const itemId = action.payload.itemId
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
		},
		increase: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			cartItem.quantity = cartItem.quantity + 1
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			if (cartItem.quantity <= 1) return
			cartItem.quantity = cartItem.quantity - 1
		},
	},
})

export const { itemAdded, itemRemoved, increase, decrease } = cartSlice.actions

export default cartSlice.reducer
