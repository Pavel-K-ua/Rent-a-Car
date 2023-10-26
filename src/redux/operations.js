import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const carsApi = axios.create({
  baseURL: 'https://65381011a543859d1bb13330.mockapi.io/',
});

export const fetchAdvertsThunk = createAsyncThunk(
  'fetchAdverts',
  async (limit, thunkAPI) => {
    try {
      const { data } = await carsApi.get(`/adverts?page=1&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdvertsThunk = createAsyncThunk(
  'fetchFilteredAdverts',
  async (make, thunkAPI) => {
    try {
      const { data } = await carsApi.get(`/adverts?make=${make}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
