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

import modeReducer from "../slices/modeSlice";
import userReducer from "../slices/userSlice";
import cartReducer from "../slices/cartSlice";

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

const persistUserReducer = persistReducer(userPersistConfig, userReducer);
const persistModeReducer = persistReducer(modePersistConfig, modeReducer);
const persistCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
  reducer: {
    mode: persistModeReducer,
    user: persistUserReducer,
    cart: persistCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
