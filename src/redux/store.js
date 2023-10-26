import { configureStore } from '@reduxjs/toolkit';
import { rentACarReducer } from './slice';

export const store = configureStore({
  reducer: {
    rentACar: rentACarReducer,
  },
  //   devTools: process.env.NODE_ENV !== 'production',
});
