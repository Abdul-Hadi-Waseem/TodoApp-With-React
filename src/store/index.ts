import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
export const store = configureStore({
  reducer: todoReducer, //Manager of store,ye tamam anay jana wala data store k andar jo hai usko manage krega
});
export type RootState = ReturnType<typeof store.getState>;
