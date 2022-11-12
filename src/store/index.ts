import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search/SearchSlice";
import { globalReducer } from "./global/GlobalSlice";

export const store = configureStore({
  reducer: {
    searchReducer,
    globalReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
