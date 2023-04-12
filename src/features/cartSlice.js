import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
}
// const initialState = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		itemAdded(state, action) {
			state.cartItems.push(action.payload)
		},
		itemRemoved(state, action) {
			state.push(action.payload)
		},
		increase: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			cartItem.quantity = cartItem.quantity + 1
		},
	},
})

export const { itemAdded, itemRemoved, increase } = cartSlice.actions

export default cartSlice.reducer
