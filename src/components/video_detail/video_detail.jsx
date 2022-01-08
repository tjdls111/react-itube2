import React from 'react';

import styles from './video_detail.module.css'


const VideoDetail = ({video}) => (

  
  <div className={styles.content}>
    <iframe 
      id="player" 
      type="text/html" 
      title="youtube video player"
      width="100%" 
      height="500px" 
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
      >

      </iframe>
      <h1>{video.snippet.title}</h1>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>

  </div>


  );

export default VideoDetail;