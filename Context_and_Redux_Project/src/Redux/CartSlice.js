import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        Addtocart: (state, action) => {
            state.cartItems.push(action.payload);
        },

        RemoveFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { Addtocart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;