import React from 'react';
import './Style.css';

const Video = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-collection collection-item"
    >
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span className="video-title title">{video.snippet.title}</span>
    </div>
  );
};

export default Video;
