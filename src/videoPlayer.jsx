import { useSelector, useDispatch } from "react-redux";
import { setVideo } from "./slice";

function VideoPlayer({ videos }) {
  const currentVideo = useSelector((state) => state.videos.current);
  console.log(currentVideo.src);
  const dispatch = useDispatch();

  function handleNextClick() {
    const nextVideo =
      videos[(videos.indexOf(currentVideo) + 1) % videos.length];
    dispatch(setVideo(nextVideo));
  }

  return (
    <div className="d-flex half">
      <video
        className="object-fit-cover border rounded"
        src={currentVideo.src}
        loop="true"
        autoplay="autoplay"
        controls
        muted
        width={window.innerWidth < 480 ? "100%" : "56%"}
        height=" 700px"
      />
      <div className="buttons d-flex align-items-center justify-content-center ml-5">
        <button
          className="btn btn-outline-warning btn-lg ml-5 "
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;

{
  /* <ReactPlayer
url={currentVideo.src}
controls
width={window.innerWidth < 480 ? "100%" : "56%"}
height="100%"
objectFit="cover"
playing={true}
/> */
}
