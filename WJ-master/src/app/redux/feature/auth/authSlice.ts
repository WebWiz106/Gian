import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isClient: boolean;
  isAdmin: boolean;
}
const initialState: AuthState = {
  isAuth: true,
  isAdmin: false,
  isClient: true,
};

export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthState>) {
      state.isAuth = action.payload.isAuth;
      state.isAdmin = action.payload.isAdmin;
      state.isClient = action.payload.isClient;
    },
  },
});
export const { setAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
