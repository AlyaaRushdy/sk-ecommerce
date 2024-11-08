import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getCart", async (token) => {
  const response = await axios.get("http://localhost:5000/carts/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const removeItem = createAsyncThunk("cart/removeItem", async (obj) => {
  const response = await axios.delete("http://localhost:5000/carts/user", {
    headers: { Authorization: `Bearer ${obj.token}` },
    data: {
      productId: obj.productId,
    },
  });
  return response.data;
});

export const addItem = createAsyncThunk("cart/addItem", async (obj) => {
  const response = await axios.post(
    "http://localhost:5000/carts/",
    {
      productId: obj.productId,
      quantity: obj.quantity,
    },
    {
      headers: { Authorization: `Bearer ${obj.token}` },
    }
  );
  return response.data;
});

export const incrementItem = createAsyncThunk(
  "cart/incrementItem",
  async (obj) => {
    const response = await axios.put(
      "http://localhost:5000/carts/user/quantity",
      {
        productId: obj.productId,
        actionType: "increment",
      },
      {
        headers: { Authorization: `Bearer ${obj.token}` },
      }
    );
    return response.data;
  }
);

export const decrementItem = createAsyncThunk(
  "cart/decrementItem",
  async (obj) => {
    const response = await axios.put(
      "http://localhost:5000/carts/user/quantity",
      {
        productId: obj.productId,
        actionType: "decrement",
      },
      {
        headers: { Authorization: `Bearer ${obj.token}` },
      }
    );
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { isOpen: false, products: [], productsIds: [], total: 0 },
  reducers: {
    remove: (state, action) => {
      state.products = state.products.filter((p) => {
        return p.id != action.payload.id;
      });
      state.productsIds = state.productsIds.filter((id) => {
        return id != action.payload.id;
      });
      state.total -=
        action.payload.quantity * action.payload.priceAfterDiscount;
    },

    increment: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity++;
          state.total += action.payload.priceAfterDiscount;
        }
      }
    },

    decrement: (state, action) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity--;
          state.total -= action.payload.priceAfterDiscount;
        }
      }
    },

    add: (state, action) => {
      state.products.push(action.payload);
      state.productsIds.push(action.payload.id);
      state.total += action.payload.priceAfterDiscount;
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.productsIds = action.payload.products.map(
          (product) => product.id
        );
        state.total = action.payload.total;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.productsIds = action.payload.products.map(
          (product) => product.id
        );
        state.total = action.payload.total;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(removeItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.productsIds = action.payload.products.map(
          (product) => product.id
        );
        state.total = action.payload.total;
      })
      .addCase(removeItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(incrementItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.productsIds = action.payload.products.map(
          (product) => product.id
        );
        state.total = action.payload.total;
      })
      .addCase(incrementItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(decrementItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(decrementItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
        state.productsIds = action.payload.products.map(
          (product) => product.id
        );
        state.total = action.payload.total;
      })
      .addCase(decrementItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { remove, increment, decrement, add, openCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
