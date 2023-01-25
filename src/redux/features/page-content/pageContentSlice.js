import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "large-menu",
};

export const pageContentSlice = createSlice({
  name: "pageCOntent",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = pageContentSlice.actions;
export default pageContentSlice.reducer;
