import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return (state = 0);
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
