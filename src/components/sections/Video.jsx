import React, { useState, useEffect, useRef } from "react";
import Pause from "../icons/Pause";
import Play2 from "../icons/Play2";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section>
      <div className="relative">
        <video
          style={{ objectFit: "cover" }}
          className="sm:aspect-[16/9] aspect-[9/15] max-h-[675px]"
          ref={videoRef}
          width="100%"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <button
          onClick={handlePlayPause}
          className="sm:bottom-9 bottom-4 sm:mx-[40px] mx-[10px] pause-btn"
        >
          {isPlaying ? (
            <div>
              <Pause />
            </div>
          ) : (
            <div className="mr-[-2px]">
              <Play2 />
            </div>
          )}
        </button>
      </div>
    </section>
  );
};
export default Video;
