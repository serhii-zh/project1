import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationSlice from './slices/registrationSlice';
import logInSlice from './slices/logInSlice';
import productsSlice from './slices/productsSlice';

const reducer = combineReducers({
  registration: registrationSlice,
  logIn: logInSlice,
  products: productsSlice,
});

const store = configureStore({ reducer });

export default store;
