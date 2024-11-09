import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      return { token: action.payload };
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
