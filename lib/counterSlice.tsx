
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  isDark: boolean
}

const initialState: CounterState = {
  value: 0,
  isDark: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    changeTheme: (state) => {
      state.isDark = !state.isDark
    }
  },
})

export const { increment, decrement, incrementByAmount, changeTheme } = counterSlice.actions

export default counterSlice.reducer