import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
  },
  reducers: {
    registerSuccess: (state) => {
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { registerSuccess, registerFailure } = userSlice.actions;

export default userSlice.reducer;
