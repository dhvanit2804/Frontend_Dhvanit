import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slicedata/userSlice";
import adminSlice from "../Slicedata/adminSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    admins: adminSlice,
  },
});
