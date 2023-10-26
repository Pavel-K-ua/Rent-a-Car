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
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      console.log(item);
      const index = state.favorites.indexOf(item);
      console.log(index);
      if (index === -1) {
        state.favorites.push(item);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
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

export const { toggleFavorite } = slice.actions;

export const rentACarReducer = slice.reducer;
