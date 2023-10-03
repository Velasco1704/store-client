import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@features/cartSlice";
import buyNowReducer from "@features/buyNowSlice";
import { apiSlice } from "@api/apiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    product: persistReducer<ReturnType<typeof buyNowReducer>>(
      {
        key: "product",
        storage,
        whitelist: ["product"],
      },
      buyNowReducer
    ),
    cart: persistReducer<ReturnType<typeof cartReducer>>(
      {
        key: "cart",
        storage,
        whitelist: ["cart"],
      },
      cartReducer
    ),
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultSettings) =>
    getDefaultSettings({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
