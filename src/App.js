import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import VideoPlayer from "./videoPlayer";

function App() {
  const videos = [
    { title: "Video 1", src: "/Videos/space.mp4" },
    { title: "Video 2", src: "/Videos/nature.mp4" },
  ];

  return (
    <Provider store={store}>
      <VideoPlayer videos={videos} />
    </Provider>
  );
}

export default App;
