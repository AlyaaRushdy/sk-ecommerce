import { createSlice } from "@reduxjs/toolkit";

const themeInLocalStorage = localStorage.getItem("persist:root")
  ? JSON.parse(localStorage.getItem("persist:root")).theme.slice(1, -1)
  : "light";

const initialState = {
  updateClassList: document.documentElement.classList.add(themeInLocalStorage),
  theme: themeInLocalStorage,
};

const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    setMode: (state, action) => {
      if (action.payload === "dark") {
        document.documentElement.classList.replace("light", "dark");
      } else if (action.payload === "light") {
        document.documentElement.classList.replace("dark", "light");
      }
      return { theme: action.payload };
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
