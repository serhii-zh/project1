import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params) => {
    const productsURL = `https://demo-api.apiko.academy/api/products`;

    try {
      const { data } = await axios.get(productsURL, { params });

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const findProducts = createAsyncThunk(
  'products/findProducts',
  async (params) => {
    const searchUrl = `https://demo-api.apiko.academy/api/products/search`;

    try {
      const { data } = await axios.get(searchUrl, { params });

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchProductsByCategoryId = createAsyncThunk(
  'products/fetchProductsByCategoryId',
  async ({ categoryId, limit, offset, sortBy }) => {
    const fetchProductsByCategoryURL = `https://demo-api.apiko.academy/api/categories/${categoryId}/products`;

    try {
      const { data } = await axios.get(fetchProductsByCategoryURL, {
        params: { limit, offset, sortBy },
      });

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  offset: 0,
  keywords: '',
  selectedCategory: null,
  sortBy: 'latest',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearData: (state) => {
      state.isLoading = false;
      state.data = [];
      state.error = null;
      state.offset = 0;
    },
    increaseOffsetBy12: (state) => {
      state.offset += 12;
    },
    changeKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategory = action.payload;
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
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
        state.data = state.data.concat(action.payload);
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(findProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(findProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.concat(action.payload);
        state.error = null;
      })
      .addCase(findProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsByCategoryId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategoryId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.concat(action.payload);
        state.error = null;
      })
      .addCase(fetchProductsByCategoryId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const products = (state) => state.products.data;
export const offsetValue = (state) => state.products.offset;
export const searchKeywords = (state) => state.products.keywords;
export const selectedCategoryId = (state) => state.products.selectedCategory;
export const sortByValue = (state) => state.products.sortBy;

export const {
  clearData,
  increaseOffsetBy12,
  changeKeywords,
  setSelectedCategoryId,
  changeSortBy,
} = productsSlice.actions;

export default productsSlice.reducer;
