import React from 'react';

const VideoShow = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="video-container">
        <iframe
          width="853"
          height="480"
          src={videoSrc}
          frameBorder="0"
          title="video-player"
          allowFullscreen
        />
      </div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{video.snippet.title}</span>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoShow;

/* <div className="card">
<div>{video.snippet.title}</div>
</div> */
