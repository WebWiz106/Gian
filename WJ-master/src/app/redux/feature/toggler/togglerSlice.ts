import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
interface TogglerState {
  profileToggler: boolean;
}
const initialState: TogglerState = {
  profileToggler: false,
};

export const TogglerSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    setProfileToggler(state) {
      state.profileToggler = !state.profileToggler;
    },
  },
});
export const { setProfileToggler } = TogglerSlice.actions;
export const selectProfileToggler = (state: RootState) =>
  state.toggler.profileToggler;

export default TogglerSlice.reducer;
