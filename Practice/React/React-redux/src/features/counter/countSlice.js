import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    //Logic
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    zero: (state) => {
      state.value = initialState;
    },
  },
});

export const { increment, decrement, zero } = countSlice.actions;

export default countSlice.reducer;
