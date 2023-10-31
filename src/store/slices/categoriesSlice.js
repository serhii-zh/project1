import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesList = (state) => state.categories.data;
export default categoriesSlice.reducer;
