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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistUserReducer = persistReducer(persistConfig, userReducer);
const persistModeReducer = persistReducer(persistConfig, modeReducer);

const store = configureStore({
  reducer: {
    mode: persistModeReducer,
    user: persistUserReducer,
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
