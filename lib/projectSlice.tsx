import { createSlice } from '@reduxjs/toolkit';
import {ProjectCardProps} from '@/type/types'

const initialState: ProjectCardProps = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
