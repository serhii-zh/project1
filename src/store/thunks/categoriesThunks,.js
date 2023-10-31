import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicInstance } from '../../services/axiosInstances';

export const getCategoriesList = createAsyncThunk(
    'categories/getCategoriesList',
    async () => {
      try {
        const { data } = await publicInstance.get('/categories');
  
        return data;
      } catch (err) {
        return err.message;
      }
    }
  );