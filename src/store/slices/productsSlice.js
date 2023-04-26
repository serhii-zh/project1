import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params) => {
    const productsURL = `https://demo-api.apiko.academy/api/products`;

    try {
      const response = await axios.get(productsURL, { params });
      const data = response.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const clearData = createAsyncThunk(
  'products/clearData',
  async (dispatch) => {
    dispatch(clearData());
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearData: (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // debugger
        state.data = state.data.concat(action.payload);
        // state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const products = (state) => state.products.data;
export const { actions } = productsSlice;
export default productsSlice.reducer;
