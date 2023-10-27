import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './operations';

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
      if (!state.favorites?.map(item => item.id).includes(action.payload.id)) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          item => item.id !== action.payload.id
        );
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
