import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    Increment: (state) => {
      state.count += 1
    },
    Decrement: (state) => {
      if (state.count !== 0 && state.count > 0) state.count -= 1
    },
    IncrementByValue: (state, action) => {
      const value = +action.payload
      state.count += value
    }
  },
})

export const { Increment, Decrement, IncrementByValue} =
  counterSlice.actions
export default counterSlice.reducer
