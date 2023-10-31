import { createAsyncThunk } from '@reduxjs/toolkit';
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
  