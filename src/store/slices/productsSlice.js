import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductsByCategoryId,
  findProducts,
  getFavorites,
} from '../thunks/productsThunks';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  offset: 0,
  keywords: '',
  selectedCategory: null,
  sortBy: 'latest',
  favorites: [],
  itemsInCart: [],
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
    addToCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const newArray = state.itemsInCart.filter(
        ({ item }) => item.id !== action.payload
      );
      state.itemsInCart = newArray;
    },
    updateItemQty: (state, action) => {
      const updatedItem = state.itemsInCart.find(
        (itemObj) => itemObj.item.id === action.payload.itemId
      );
      updatedItem.itemQty = action.payload.itemQty;
    },
    addItemsToCart: (state, action) => {
      state.itemsInCart = action.payload;
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
export const getItemsInCart = (state) => state.products.itemsInCart;

export const {
  clearData,
  increaseOffsetBy12,
  changeKeywords,
  setSelectedCategoryId,
  changeSortBy,
  modifyFavoriteStatus,
  addToCart,
  removeFromCart,
  updateItemQty,
  addItemsToCart,
} = productsSlice.actions;

export default productsSlice.reducer;
