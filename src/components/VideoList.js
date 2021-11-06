import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
  
  const items = videos.map(video => {
    //console.log(video);
    return <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>;
  });

  //console.log(items);
  return(
    <div className="ui relaxed divided list">
      {items}
    </div>
  );
} 

export default VideoList;

