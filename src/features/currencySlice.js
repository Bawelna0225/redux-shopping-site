import { createSlice } from '@reduxjs/toolkit'

const initialState = ['$ USD']

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		currencyChanged(state, action) {
			state.push(action.payload)
		},
	},
})

export const { currencyChanged } = currencySlice.actions

export default currencySlice.reducer
