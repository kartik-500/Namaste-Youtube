import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/navScrollSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="flex col-span-1 border-b-gray-200">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleSidebar}
          className="cursor-pointer h-6 p-2"
        />
        <img
          className="h-8 m-1"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="px-3 py-1 border border-solid border-gray-500 rounded-l-full w-3/5"
          type="text"
          placeholder="Search"
        />
        <button className="bg-gray-200 px-2 py-1 rounded-r-full border border-solid border-gray-500">
          🔍
        </button>
      </div>
      <div className="col-span-1 text-right">
        <img
          alt="user-icon"
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
