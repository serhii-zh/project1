import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const LOG_IN_URL = 'https://demo-api.apiko.academy/api/auth/login';

export const logInUser = createAsyncThunk(
  'logIn/logInUser',
  async (userData) => {
    try {
      const response = await axios.post(LOG_IN_URL, userData);
      const data = response.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  isLoading: false,
  data: null, //remove later
  error: null,
};

export const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; //remove later
        state.error = null;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const logInData = (state) => state.logIn.data;
export const { actions } = logInSlice;
export default logInSlice.reducer;
