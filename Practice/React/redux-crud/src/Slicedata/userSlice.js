import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "UserDetails",
  initialState: {
    user: [],
    loading: false,
    error: "",
  },
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
