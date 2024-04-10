import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faVideo,
  faFilm,
  faStar,
  faAddressCard,
  faClockRotateLeft,
  faPlay,
  faClock,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.navScroll.isSidebarOpen);
  if (!isSidebarOpen)
    return (
      <div className="w-24 shadow-lg p-2 h-[calc(100vh-56px)]">
        <ul>
          <Link to="/">
            <li className="px-2 py-2 text-center">
              <FontAwesomeIcon className="h-5" icon={faHouse} />
              <p className="text-[10px]">Home</p>
            </li>
          </Link>
          <li className="px-2 py-2 text-center">
            <FontAwesomeIcon className="h-5" icon={faVideo} />
            <p className="text-[10px]">Shorts</p>
          </li>
          <li className="px-2 py-2 text-center">
            <FontAwesomeIcon className="h-5" icon={faFilm} />
            <p className="text-[10px]">Subscriptions</p>
          </li>
          <li className="px-2 py-2 text-center">
            <FontAwesomeIcon className="h-5" icon={faStar} />
            <p className="text-[10px]">Favourites</p>
          </li>
          <li className="px-2 py-2 text-center">
            <FontAwesomeIcon className="h-5" icon={faIdBadge} />
            <p className="text-[10px]">You</p>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="w-48 shadow-lg p-2 h-[calc(100vh-56px)]">
      <ul>
        <Link to="/">
          <li className="px-2 py-2 flex">
            <FontAwesomeIcon className="h-5 pr-2" icon={faHouse} />
            <p>Home</p>
          </li>
        </Link>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faVideo} />
          <p>Shorts</p>
        </li>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faFilm} />
          <p>Subscriptions</p>
        </li>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faStar} />
          <p>Favourites</p>
        </li>
      </ul>
      <hr />
      <h1 className="font-bold text-lg pt-4 pb-2 px-2">{"You  >"}</h1>
      <ul>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faAddressCard} />
          <p>Your Channel</p>
        </li>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faClockRotateLeft} />
          <p>History</p>
        </li>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faPlay} />
          <p>Your Videos</p>
        </li>
        <li className="px-2 py-2 flex">
          <FontAwesomeIcon className="h-5 pr-2" icon={faClock} />
          <p>Watch Later</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
