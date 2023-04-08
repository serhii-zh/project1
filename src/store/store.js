import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/registerSlice';

const reducer = combineReducers({
  register: registerSlice,
});

const store = configureStore({ reducer });

export default store;
