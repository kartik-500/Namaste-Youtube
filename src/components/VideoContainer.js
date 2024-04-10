import React from "react";
import { Link } from "react-router-dom";

const VideoContainer = ({ data }) => {
  const { channelTitle, description, title, thumbnails } = data.snippet;
  const videoId = data.id.videoId;
  return (
    <div className="p-2 shadow-lg w-1/4">
      <Link to={"/watch?v=" + videoId}>
        <img
          className="h-48 w-full object-cover rounded-lg"
          alt={title}
          src={thumbnails.high.url}
        />
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs">{description}</p>
        <p className="text-sm">{channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoContainer;
