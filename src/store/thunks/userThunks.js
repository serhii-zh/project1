import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance, publicInstance } from '../../services/axiosInstances';

export const logInUser = createAsyncThunk(
  'logIn/logInUser',
  async (userData) => {
    try {
      const { data } = await publicInstance.post('/auth/login', userData);
      localStorage.setItem('currentUser', JSON.stringify(data.token));

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (userData) => {
    try {
      const { data } = await publicInstance.post('/auth/register', userData);
      localStorage.setItem('currentUser', JSON.stringify(data.token)); // add data to local storage

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getAccountData = createAsyncThunk(
  'account/getAccountData',
  async () => {
    try {
      const { data } = await authInstance.get('/account');

      return data;
    } catch (err) {
      return err.message;
    }
  }
);
