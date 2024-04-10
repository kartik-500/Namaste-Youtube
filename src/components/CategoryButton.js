import React from "react";

const CategoryButton = ({ name }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-500 hover:text-gray-100 px-2 mx-1 py-1 rounded-lg">
      {name}
    </button>
  );
};

export default CategoryButton;
