import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../../store"


interface Toggler {
    heroPopup: boolean;

}

const initialState: Toggler = {
    heroPopup: false,
}

export const togglerSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        heroPopupShow(state) {
            state.heroPopup = true;
        },
        heroPopupHide(state) {
            state.heroPopup = false;
        },
    }
});

export const { heroPopupHide, heroPopupShow } = togglerSlice.actions;

export default togglerSlice.reducer;