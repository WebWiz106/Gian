import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";
import authSlice from "./feature/auth/authSlice";
import togglerSlice from "./feature/toggler/togglerSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    toggler: togglerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
