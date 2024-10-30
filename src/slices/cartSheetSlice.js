import { createSlice } from "@reduxjs/toolkit";

const cartSheetSlice = createSlice({
  name: "cartSheet",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openSheet: (state) => {
      state.isOpen = true;
    },
    closeSheet: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSheet, closeSheet } = cartSheetSlice.actions;
export default cartSheetSlice.reducer;
