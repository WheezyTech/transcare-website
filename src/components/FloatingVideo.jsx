import React, { useState } from "react";
import video1 from "../assets/videos/demo.mp4";
import video2 from "../assets/videos/demo2.mp4";
import video3 from "../assets/videos/demo3.mp4";

const FloatingVideo = () => {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { src: video1, title: "Demo Video 1" },
    { src: video2, title: "Demo Video 2" },
    { src: video3, title: "Demo Video 3" },
  ];

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
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

          {/* VIDEO PLAYER */}
          <video
            key={currentVideo}
            controls
            autoPlay
            muted
            onEnded={handleNext}
          >
            <source src={videos[currentVideo].src} type="video/mp4" />
          </video>

          {/* CONTROLS */}
          <div className="controls">
            <button onClick={handlePrev}>⏮ Prev</button>
            <button onClick={handleNext}>Next ⏭</button>
          </div>

          {/* PLAYLIST */}
          <div className="playlist">
            {videos.map((vid, index) => (
              <div
                key={index}
                className={`playlist-item ${
                  currentVideo === index ? "active" : ""
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                {vid.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <div
        className="video-button"
        onClick={() => {
          setCurrentVideo(0);
          setOpen(!open);
        }}
      >
        ▶
      </div>

    </div>
  );
};

export default FloatingVideo;
