import { configureStore } from '@reduxjs/toolkit'
import { product } from './ProductSlice';
import productReducer from "./ProductSlice";
import { CartSlice } from './CartSlice';
import  CartSliceReducar from './CartSlice';


export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: CartSliceReducar,
  },
})
export default store;