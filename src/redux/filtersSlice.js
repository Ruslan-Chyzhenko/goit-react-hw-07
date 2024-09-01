import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  // Name slice
  name: "filters",
  // Beginner state reducer slice
  initialState: INITIAL_STATE,
  // Object reducers
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters?.name || "";
