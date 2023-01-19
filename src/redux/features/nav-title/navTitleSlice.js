import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: false,
};

export const navTitleSlice = createSlice({
  name: "navTitle",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = navTitleSlice.actions;
export default navTitleSlice.reducer;
