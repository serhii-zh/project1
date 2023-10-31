import { createSlice } from '@reduxjs/toolkit';
import { logInUser, registerUser, getAccountData } from '../thunks/userThunks';
// import { authInstance, publicInstance } from '../../services/axiosInstances';

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
      localStorage.removeItem('currentUser');
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

export const { logOut } = currentUserSlice.actions;
export default currentUserSlice.reducer;
