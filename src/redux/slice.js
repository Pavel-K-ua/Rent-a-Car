import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdvertsThunk, fetchFilteredAdvertsThunk } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  filter: '',
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'rentACar',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchAdvertsThunk.pending), (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchAdvertsThunk.rejected), (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const rentACarReducer = slice.reducer;
