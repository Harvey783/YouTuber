import React from 'react';
import './Video.css';

const Video = ({ video }) => {
  return (
    <div className="video-collection collection-item avatar">
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span className="video-title title">{video.snippet.title}</span>
    </div>
  );
};

export default Video;

/* <div className="video-collection collection-item-avatar">
<img src={video.snippet.thumbnails.medium.url} alt="" />
<span className="title">{video.snippet.title}</span>
</div> */

/* <li className="video-avatar collection-item avatar">
<img src={video.snippet.thumbnails.medium.url} alt="" />
<span className="video-list-title title">{video.snippet.title}</span>
</li> */
