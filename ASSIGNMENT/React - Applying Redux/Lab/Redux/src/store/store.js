import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import crudReducer from './crudSlice'; // for Task 3

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer
  }
});
