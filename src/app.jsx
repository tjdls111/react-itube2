import React, {Component, useEffect, useState, useCallback} from 'react';
import Mynavbar from './components/navbar/navbar'
import VideoList  from './components/video_list/videoList';


import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';


function App({youtube}){
  const [videos, setVideos] = useState([]); // state  
  const [selectedVideo, setSelectedVideo] = useState(null);


  // 마운트, 업데이트마다 호출
  useEffect(()=>{
    youtube.mostPopular()
    .then((res)=>{
      setVideos(res);
    })

  }, [youtube]); 


  const searchData = useCallback((searchWord)=>{
    youtube
    .search(searchWord)
    .then((videos)=>{
      setSelectedVideo(null);
      setVideos(videos);
    })
  }, []);

  const selectVideo = (video)=>{
    setSelectedVideo(video); 
  }


  return (
    <>
      <Mynavbar searchData ={searchData}></Mynavbar>
      <section className={styles.content}>
        {selectedVideo && <div className={styles.mainVideo}>          
            <VideoDetail
              video={selectedVideo}>
            </VideoDetail>
          </div>
        }
        <div className={styles.sideVideos}>
          <VideoList results={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>

        </div>

      </section>
    </>
  )

}

export default App;
