import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const videos = [
    "https://www.youtube.com/embed/n1ETsAou0ZE",
    "https://www.youtube.com/embed/5Hg00H4hAAU",
    "https://www.youtube.com/embed/Yp6FWq_l8H0"
  ];
  const [video, setVideo] = useState(videos[0]);

  const handleChange = (e) => {
    setVideo(e.target.value);
  };

  return (
    <>
      <form>
        <h1>Video Oynatıcı</h1>
        {videos.map((data, index) => (
          <label key={index}>
            <input
              type="radio"
              value={data}
              checked={video === data}
              onChange={handleChange}
            />
            Video {index + 1}
          </label>
        ))}
      </form>
      <div style={{ width: "600px", height: "400px" }}>
        <iframe width="600px" height="400px" src={video}></iframe>
      </div>
    </>
  );
}
