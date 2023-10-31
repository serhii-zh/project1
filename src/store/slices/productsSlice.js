import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authInstance } from '../../services/axiosInstances';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ limit, offset, sortBy }) => {
    try {
      const { data } = await authInstance.get(`/products`, {
        params: {
          limit,
          offset,
          sortBy,
        },
      });

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const findProducts = createAsyncThunk(
  'products/findProducts',
  async ({ keywords, limit, offset }) => {
    try {
      const { data } = await authInstance.get('/products/search', {
        params: {
          keywords,
          limit,
          offset,
        },
      });

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchProductsByCategoryId = createAsyncThunk(
  'products/fetchProductsByCategoryId',
  async ({ categoryId, limit, offset, sortBy }) => {
    try {
      const { data } = await authInstance.get(
        `/categories/${categoryId}/products`,
        {
          params: {
            limit,
            offset,
            sortBy,
          },
        }
      );

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getFavorites = createAsyncThunk(
  'products/getFavorites',
  async () => {
    try {
      const { data } = await authInstance.get('/products/favorites');

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'products/addToFavorites',
  async ({ itemId }) => {
    try {
      const { data } = await authInstance.post(`/products/${itemId}/favorite`);

      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'products/removeFromFavorites',
  async ({ itemId }) => {
    try {
      const { data } = await authInstance.delete(
        `/products/${itemId}/favorite`
      );

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
        // debugger;
        return item.id === action.payload;
      });
      const favoriteToBeModified = state.favorites.findIndex((item) => {
        return item.id === action.payload;
      });
      // console.log(itemToBeModified);
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

export const {
  clearData,
  increaseOffsetBy12,
  changeKeywords,
  setSelectedCategoryId,
  changeSortBy,
  modifyFavoriteStatus,
} = productsSlice.actions;

export default productsSlice.reducer;
