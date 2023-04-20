import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationSlice from './slices/registrationSlice';
import logInSlice from './slices/logInSlice';

const reducer = combineReducers({
  registration: registrationSlice,
  logIn: logInSlice,
});

const store = configureStore({ reducer });

export default store;
