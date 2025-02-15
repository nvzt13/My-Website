import { createSlice } from '@reduxjs/toolkit';
import {ProjectInitialStateProps} from '@/type/types'

const initialState: ProjectInitialStateProps = {
  projects: []
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
