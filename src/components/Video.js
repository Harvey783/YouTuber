import React from 'react';

const Video = ({ video }) => {
  return (
    <div className="collection-item-avatar">
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span className="title">{video.snippet.title}</span>
    </div>
  );
};

export default Video;
