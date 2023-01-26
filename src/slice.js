import { createSlice } from "@reduxjs/toolkit";

export const videosSlice = createSlice({
  name: "videos",
  initialState: { current: { title: "Video 1", src: "/Videos/sea.mp4" } },
  reducers: {
    setVideo: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setVideo } = videosSlice.actions;
