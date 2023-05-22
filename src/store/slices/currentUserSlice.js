import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const LOG_IN_URL = 'https://demo-api.apiko.academy/api/auth/login';

export const logInUser = createAsyncThunk(
  'logIn/logInUser',
  async (userData) => {
    try {
      const response = await axios.post(LOG_IN_URL, userData);
      const data = response.data;
      localStorage.setItem('currentUser', JSON.stringify(data)); // add data to local storage
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const REGISTER_URL = 'https://demo-api.apiko.academy/api/auth/register';

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post(REGISTER_URL, userData);
      const data = response.data;
      localStorage.setItem('currentUser', JSON.stringify(data)); // add data to local storage
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
        state.data = action.payload;
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
      });
  },
});

// export const currentUser = (state) => state.currentUser.data;
export const currentUser = JSON.parse(localStorage.getItem('currentUser'));
export const { logOut } = currentUserSlice.actions;
export default currentUserSlice.reducer;
