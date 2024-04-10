import React from "react";
import CategoryButton from "./CategoryButton";

const CategoryButtonList = () => {
  const btns = [
    "All",
    "Music",
    "Mixes",
    "Macintosh",
    "T-series",
    "Bollywood Music",
    "Live",
    "Indian Pop Music",
  ];
  return (
    <div className="p-2">
      {btns.map((btn) => (
        <CategoryButton name={btn} key={btn} />
      ))}
    </div>
  );
};

export default CategoryButtonList;
