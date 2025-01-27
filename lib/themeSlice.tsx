
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isDark: boolean
}

const initialState: CounterState = {
  isDark: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark
    }
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer