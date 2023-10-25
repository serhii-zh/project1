import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ userToken, limit, offset, sortBy }) => {
    const productsURL = `https://demo-api.apiko.academy/api/products`;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
      params: {
        limit,
        offset,
        sortBy,
      },
    };

    try {
      const { data } = await axios.get(productsURL, config);

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const findProducts = createAsyncThunk(
  'products/findProducts',
  async ({ userToken, keywords, limit, offset }) => {
    const searchUrl = `https://demo-api.apiko.academy/api/products/search`;

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
      params: {
        keywords,
        limit,
        offset,
      },
    };

    try {
      const { data } = await axios.get(searchUrl, config);

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

export const getFavorites = createAsyncThunk(
  'products/getFavorites',
  async (userToken) => {
    const getFavoritesUrl = `https://demo-api.apiko.academy/api/products/favorites`;
    // const getFavoritesUrl = `https://demo-api.apiko.academy/api/products/favorites?offset=0&limit=20`;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
    };

    try {
      const { data } = await axios.get(getFavoritesUrl, config);

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'products/addToFavorites',
  async ({ itemId, userToken }) => {
    const addToFavoritesUrl = `https://demo-api.apiko.academy/api/products/${itemId}/favorite`;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
    };

    try {
      const { data } = await axios.post(addToFavoritesUrl, {}, config);

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'products/removeFromFavorites',
  async ({ itemId, userToken }) => {
    const removeFromFavoritesUrl = `https://demo-api.apiko.academy/api/products/${itemId}/favorite`;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
        accept: 'application/json',
      },
    };

    try {
      const { data } = await axios.delete(removeFromFavoritesUrl, config);

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
  favorites: [],
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
    modifyFavoriteStatus: (state, action) => {
      const itemToBeModified = state.data.find((item) => {
        return item.id === action.payload;
      });
      const favoriteToBeModified = state.favorites.findIndex((item) => {
        return item.id === action.payload;
      });
      itemToBeModified.favorite = !itemToBeModified.favorite;
      state.favorites.splice(favoriteToBeModified, 1);
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
      //------------------------
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
      //----------------------------
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
      })
      //--------------------------
      .addCase(getFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
        state.error = null;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //--------------------------
  },
});

export const products = (state) => state.products.data;
export const offsetValue = (state) => state.products.offset;
export const searchKeywords = (state) => state.products.keywords;
export const selectedCategoryId = (state) => state.products.selectedCategory;
export const sortByValue = (state) => state.products.sortBy;
export const productsIsLoading = (state) => state.products.isLoading;
export const favoriteItems = (state) => state.products.favorites;
export const token = () => JSON.parse(localStorage.getItem('currentUser'));

export const {
  clearData,
  increaseOffsetBy12,
  changeKeywords,
  setSelectedCategoryId,
  changeSortBy,
  modifyFavoriteStatus,
} = productsSlice.actions;

export default productsSlice.reducer;
