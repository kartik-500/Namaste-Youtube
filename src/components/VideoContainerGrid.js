import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";

const VideoContainerGrid = () => {
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=50&key=AIzaSyD4KaVyjPwELZe8AzX9gnRuSRkNpXb9aWY"
    );
    const json = await data.json();
    setVideoItems(json.items);
    console.log(json.items[0]);
  };

  return (
    <div className="m-2 flex flex-wrap">
      {videoItems.map((videoItem) => (
        <VideoContainer data={videoItem} key={videoItem.id.videoId} />
      ))}
    </div>
  );
};

export default VideoContainerGrid;
