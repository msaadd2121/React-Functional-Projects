import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    pending: false,
    error: null,
};

export const FetchData = createAsyncThunk(
    "product/fetchData",
    async () => {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const result = await response.json();

        return result.products;
    }
);

export const product = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(FetchData.pending, (state) => {
                state.pending = true;
            })

            .addCase(FetchData.fulfilled, (state, action) => {
                state.pending = false;
                state.data = action.payload;
            })

            .addCase(FetchData.rejected, (state, action) => {
                state.pending = false;
                state.error = action.error.message;
            });
    },
});

export default product.reducer;