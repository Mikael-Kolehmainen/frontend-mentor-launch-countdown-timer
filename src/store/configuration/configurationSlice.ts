import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    launchTimestamp: null,
  },
  reducers: {
    saveLaunchTimestamp: (state, action) => {
      state.launchTimestamp = action.payload;
    },
    clearLaunchTimestamp: (state) => {
      state.launchTimestamp = null;
    },
  },
});

export const { saveLaunchTimestamp, clearLaunchTimestamp } = configurationSlice.actions;

export default configurationSlice.reducer;
