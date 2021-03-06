import React from 'react';
import Video from './Video';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideoList = videos.map(video => {
    return <Video onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="collection">{renderVideoList}</div>;
};

export default VideoList;
