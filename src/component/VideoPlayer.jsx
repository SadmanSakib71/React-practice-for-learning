import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play(); // Calling these while rendering isn't allowed.
    } else {
      ref.current.pause(); // Also, this crashes.
    }
  });

  return <video src={src} ref={ref} />;
};

export default VideoPlayer;
