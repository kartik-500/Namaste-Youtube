import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className="w-full m-2">
      <div className="w-full border border-gray-300 flex">
        <div className="p-2 w-2/3 h-96">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="border border-l-1 border-gray-300"></div>
        <div className="w-1/3 h-96">
          <div className="p-2 h-1/3 w-full">
            <div className="bg-gray-200 h-full w-full"></div>
          </div>
          <div className="p-2 h-1/3 w-full">
            <div className="bg-gray-200 h-full w-full"></div>
          </div>
          <div className="p-2 h-1/3 w-full">
            <div className="bg-gray-200 h-full w-full"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-6 my-2 w-96 bg-gray-200"></div>
        <div className="h-4 my-2 w-48 bg-gray-200"></div>
        <div className="h-4 my-2 w-36 bg-gray-200"></div>
      </div>

      <div className="my-4">
        <div className="h-4 my-2 w-2/3 bg-gray-200"></div>
        <div className="h-3 my-2 w-48 bg-gray-200"></div>
        <div className="h-3 my-2 w-36 bg-gray-200"></div>
      </div>
      <div className="my-4">
        <div className="h-4 my-2 w-2/3 bg-gray-200"></div>
        <div className="h-3 my-2 w-48 bg-gray-200"></div>
        <div className="h-3 my-2 w-36 bg-gray-200"></div>
      </div>
      <div className="my-4">
        <div className="h-4 my-2 w-2/3 bg-gray-200"></div>
        <div className="h-3 my-2 w-48 bg-gray-200"></div>
        <div className="h-3 my-2 w-36 bg-gray-200"></div>
      </div>
      <div className="my-4">
        <div className="h-4 my-2 w-2/3 bg-gray-200"></div>
        <div className="h-3 my-2 w-48 bg-gray-200"></div>
        <div className="h-3 my-2 w-36 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default WatchVideo;
