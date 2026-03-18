import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserWithEstimates } from '../../types/usersTable.types';
import { fetchAllData } from './thunks/dataSliceThunk';

interface DataState {
  users: UserWithEstimates[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  users: [],
  loading: false,
  error: null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllData.fulfilled, (state, action: PayloadAction<UserWithEstimates[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ошибка загрузки данных';
      });
  }
});

export const { clearError } = dataSlice.actions;
export default dataSlice.reducer;