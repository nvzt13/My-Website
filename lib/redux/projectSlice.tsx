import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectInitialStateProps } from '@/type/types';
import { Post } from '@prisma/client';

// fetchProjects function
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const res = await fetch('/api/project/get', {
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
// createProject function
export const createProject = createAsyncThunk(
  'projects/createProject',
  async (formData: Post) => {
    const res = await fetch('/api/project/create', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Veri alınamadı');
    const data = await res.json();
    return data;
  }
);
// deleteProject function
export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (id: string) => {
    const res = await fetch(`/api/project/${id}`, {
      method: 'DELETE',
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
