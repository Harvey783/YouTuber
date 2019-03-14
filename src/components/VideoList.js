import React from 'react';
import Video from './Video';

const VideoList = ({ videos }) => {
  const renderVideoList = videos.map(video => {
    return <Video video={video} />;
  });
  return <div>{renderVideoList}</div>;
};

export default VideoList;
