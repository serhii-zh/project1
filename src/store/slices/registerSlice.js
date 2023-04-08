import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const REGISTER_URL = 'https://demo-api.apiko.academy/api/auth/register';

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (userData) => {
    try {
      const response = await axios.post(REGISTER_URL, userData);
      const data = response.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getRegData = (state) => state.registration.data;

export const { actions } = registerSlice;
export default registerSlice.reducer;
