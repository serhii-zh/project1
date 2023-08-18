import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const logInUser = createAsyncThunk(
  'logIn/logInUser',
  async (userData) => {
    const logInUrl = 'https://demo-api.apiko.academy/api/auth/login';

    try {
      const { data } = await axios.post(logInUrl, userData);
      localStorage.setItem('currentUser', JSON.stringify(data.token)); // add data to local storage

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (userData) => {
    const registerUrl = 'https://demo-api.apiko.academy/api/auth/register';

    try {
      const { data } = await axios.post(registerUrl, userData);
      localStorage.setItem('currentUser', JSON.stringify(data.token)); // add data to local storage

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getAccountData = createAsyncThunk(
  'account/getAccountData',
  async (userToken) => {
    const getAccountDataUrl = 'https://demo-api.apiko.academy/api/account';
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
    };

    try {
      const { data } = await axios.get(getAccountDataUrl, config);

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

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logOut(state) {
      state.data = null;
      localStorage.removeItem('currentUser'); // remove data from local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.account;
        state.error = null;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      })
      .addCase(getAccountData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAccountData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAccountData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const currentUser = (state) => state.currentUser.data;
export const currentUserIsLoading = (state) => state.currentUser.isLoading;
export const token = () => JSON.parse(localStorage.getItem('currentUser'));

export const { logOut } = currentUserSlice.actions;
export default currentUserSlice.reducer;
