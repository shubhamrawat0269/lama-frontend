import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserData: null,
};

export const userSlice = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.currentUserData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
