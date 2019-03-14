import React from 'react';

const Video = ({ video }) => {
  return (
    <div>
      {video.snippet.title}
      <img src={video.snippet.thumbnails.medium.url} alt="" />
    </div>
  );
};

export default Video;
