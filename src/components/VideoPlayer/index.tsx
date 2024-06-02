import React from 'react';
import YouTube from 'react-youtube';
import './videoplayer.css';

const VideoPlayer = ({ videoId }: any) => {
  const opts = {
    height: '275',
    width: '489',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    // acessar ao evento
    event.target.pauseVideo();
  };

  return (
    <div className='yt-video'>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
