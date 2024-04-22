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
    setProfileToggler(state, actions) {
      state.profileToggler = actions.payload;

    },

  },
});
export const { setProfileToggler } = TogglerSlice.actions;
export const selectProfileToggler = (state: RootState) =>
  state.toggler.profileToggler;

export default TogglerSlice.reducer;
