import React from 'react';
import Video from './Video';

const VideoList = ({ videos }) => {
  const renderVideoList = videos.map(video => {
    return <Video key={video.id.videoId} video={video} />;
  });
  return (
    <div>
      <ul className="collection">{renderVideoList}</ul>
    </div>
  );
};

export default VideoList;

/* <div className="collection">{renderVideoList}</div>; */
