import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		itemAdded(state, action) {
			state.push(action.payload)
		},
        itemRemoved(state, action) {
			state.push(action.payload)
		},
	},
})

export const { itemAdded, itemRemoved } = cartSlice.actions

export default cartSlice.reducer
