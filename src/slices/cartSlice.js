import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isOpen: false, products: [], productsIds: [] },
  reducers: {
    remove: (state, action) => {
      state.products = state.products.filter((p) => {
        return p.id != action.payload.id;
      });
      state.productsIds = state.productsIds.filter((id) => {
        return id != action.payload.id;
      });
    },

    increment: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity++;
        }
      }
    },

    decrement: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity--;
        }
      }
    },

    add: (state, action) => {
      state.products.push(action.payload);
      state.productsIds.push(action.payload.id);
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { remove, increment, decrement, add, openCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
