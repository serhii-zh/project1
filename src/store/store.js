import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './slices/currentUserSlice';
import productsSlice from './slices/productsSlice';

const reducer = combineReducers({
  currentUser: currentUserSlice,
  products: productsSlice,
});

const store = configureStore({ reducer });

export default store;
