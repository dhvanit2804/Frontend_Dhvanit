import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/counter/countSlice";

export const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});
