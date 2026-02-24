import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const MyComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

export default MyComponent;
<h1>My Component</h1>;
