import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	total: 0,
	amount: 0,
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
		calculateTotals: (state) => {
			let amount = 0
			let total = 0
			state.cartItems.forEach((item) => {
				amount += item.quantity
				total += item.quantity * item.price
			})
			state.quantity = amount
			state.total = total
		},
	},
})

export const { itemAdded, itemRemoved, increase, decrease, calculateTotals } = cartSlice.actions

export default cartSlice.reducer
