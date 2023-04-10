import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationSlice from './slices/registrationSlice';

const reducer = combineReducers({
  registration: registrationSlice,
});

const store = configureStore({ reducer });

export default store;
