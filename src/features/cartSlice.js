import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	total: 0,
	quantity: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const itemToFind = action.payload
			const existingItem = state.cartItems.find((item) => item.name === itemToFind.name && item.activeColor === itemToFind.activeColor && item.activeSize === itemToFind.activeSize)
			if (!existingItem) {
				state.cartItems.push(action.payload)
			} else {
				if (existingItem.quantity >= 100) return
				existingItem.quantity++
			}
		},
		removeItem(state, action) {
			const itemId = action.payload.itemId
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
		},
		increase: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			if (cartItem.quantity >= 100) return
			cartItem.quantity = cartItem.quantity + 1
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			if (cartItem.quantity <= 1) return
			cartItem.quantity = cartItem.quantity - 1
		},
		setQuantity: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.itemId)
			cartItem.quantity = payload.quantity
		},
		calculateTotal: (state) => {
			let quantity = 0
			let total = 0
			state.cartItems.forEach((item) => {
				quantity += item.quantity
				total += item.quantity * item.price
			})
			state.quantity = quantity
			state.total = total
		},
	},
})

export const { addItem, removeItem, increase, decrease, setQuantity, calculateTotal } = cartSlice.actions

export default cartSlice.reducer
