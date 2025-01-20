
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  isDark: boolean | null 
}

const initialState: CounterState = {
  value: 0,
  isDark: null
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDark = action.payload
    }
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer