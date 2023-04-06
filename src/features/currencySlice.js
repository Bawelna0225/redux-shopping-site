import { createSlice } from '@reduxjs/toolkit'

const initialState = { currency: '$' };

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		currencyChanged(state, action) {
			return action.payload;
		},
	},
})

export const { currencyChanged } = currencySlice.actions

export default currencySlice.reducer
