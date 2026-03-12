import React, { useState } from "react";
import videoFile from "../assets/videos/demo.mp4";

const FloatingVideo = () => {
  const [open, setOpen] = useState(false);

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

          <video controls autoPlay muted loop>
            <source src={videoFile} type="video/mp4" />
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