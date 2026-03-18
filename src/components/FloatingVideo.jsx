import React, { useState } from "react";
import video1 from "../assets/videos/demo.mp4";
import video2 from "../assets/videos/demo2.mp4";

const FloatingVideo = () => {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [video1, video2];

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="video-widget">

      {open && (
        <div className="video-popup">
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <video
            controls
            autoPlay
            muted
            onEnded={handleNextVideo}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
        </div>
      )}

      <div
        className="video-button"
        onClick={() => setOpen(!open)}
      >
        ▶
      </div>

    </div>
  );
};

export default FloatingVideo;
