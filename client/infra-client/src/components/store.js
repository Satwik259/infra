import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productslice';
import cartReducer from './cartslice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
