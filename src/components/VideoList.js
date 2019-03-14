import React from 'react';
import Video from './Video';

const VideoList = ({ videos }) => {
  const renderVideoList = videos.map(video => {
    return <Video key={video.id.videoId} video={video} />;
  });
  return <div className="collection">{renderVideoList}</div>;
};

export default VideoList;

/* <div className="collection">{renderVideoList}</div>; */

/* <div>
<ul className="video-collection collection">{renderVideoList}</ul>
</div> */
