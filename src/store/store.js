import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './slices/currentUserSlice';
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categoriesSlice';

const reducer = combineReducers({
  currentUser: currentUserSlice,
  products: productsSlice,
  categories: categoriesSlice,
});

const store = configureStore({ reducer });

export default store;
