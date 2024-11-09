import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopAddressSlice from "./addressSlice";
import modeReducer from "./modeSlice";
import userReducer from "./modeSlice";
import cartReducer from "./userSlice";
import authReducer from "./cartSlice";
// Persist configuration for user, mode, cart, and auth slices
const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
};
const modePersistConfig = {
  key: "theme",
  version: 1,
  storage,
};
const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
};

// Apply persistReducer to each slice
const persistUserReducer = persistReducer(userPersistConfig, userReducer);
const persistModeReducer = persistReducer(modePersistConfig, modeReducer);
const persistCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

// Configure store with all reducers
const store = configureStore({
  reducer: {
    mode: persistModeReducer,
    user: persistUserReducer,
    cart: persistCartReducer,
    address: shopAddressSlice,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export let persistor = persistStore(store);
export default store;
