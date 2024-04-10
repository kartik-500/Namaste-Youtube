import React from "react";
import CategoryButtonList from "./CategoryButtonList";
import VideoContainerGrid from "./VideoContainerGrid";

const MainContainer = () => {
  return (
    <div className="flex-1">
      <CategoryButtonList />
      <VideoContainerGrid />
    </div>
  );
};

export default MainContainer;
