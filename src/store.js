import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "./slice";

export const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
  },
});
