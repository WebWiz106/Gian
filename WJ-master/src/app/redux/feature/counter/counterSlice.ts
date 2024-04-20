import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
