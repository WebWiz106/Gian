import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";
import authSlice from "./feature/auth/authSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
