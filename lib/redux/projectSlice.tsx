import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectInitialStateProps } from '@/type/types';

// Async thunk
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const res = await fetch('/api/project', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!res.ok) throw new Error('Veri alınamadı');
    const data = await res.json();
    return data;
  }
);

const initialState: ProjectInitialStateProps = {
  projects: [],
  loading: false,
  error: null,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Hata oluştu';
      });
  },
});

export default projectsSlice.reducer;
