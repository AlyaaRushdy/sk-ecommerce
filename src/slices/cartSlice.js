import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isOpen: false, products: [] },
  reducers: {
    dalete: (state, action) => {
      return state.products.filter((p) => {
        return p.id != action.payload;
      });
    },

    increment: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.count++;
        }
      }
    },

    decrement: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.count--;
        }
      }
    },

    add: (state, action) => {
      state.products.push(action.payload);
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { dalete, increment, decrement, add, openCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
