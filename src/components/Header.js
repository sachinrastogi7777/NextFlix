import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const userObject = useSelector((state) => state.user);
  const userName = userObject?.displayName;
  const firstName = userName?.split(" ")[0];

  return (
    <div>
      {location.pathname === "/" ? (
        <div className="absolute px-36 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
          <img
            className="w-48"
            src="/Assets/netflix_logo.png"
            alt="netflix-logo"
          />
        </div>
      ) : (
        <div className="absolute px-16 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
          <img
            className="w-48"
            src="/Assets/netflix_logo.png"
            alt="netflix-logo"
          />
          <div>
            <div className="flex items-center">
              <GoSearch color="white" className="w-6 h-6 mx-1 cursor-pointer" />
              <IoMdNotificationsOutline
                color="white"
                className="w-6 h-6 mx-4 cursor-pointer"
              />
              <img
                className="w-8 h-8 rounded-sm"
                alt="user-icon"
                src="/Assets/user-icon.png"
              />
              <AiFillCaretDown
                className="mx-1 cursor-pointer"
                color="white"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              />
            </div>
            {showDropdown && (
              <div className="absolute w-36 my-1 px-2 bg-black text-white rounded-md">
                <div className="flex items-center my-1">
                  <img
                    className="w-4 h-4 rounded-sm mx-1"
                    alt="user-icon"
                    src="/Assets/user-icon-2.png"
                  />
                  <p className="px-1">{firstName}</p>
                </div>
                <div className="flex items-center my-1">
                  <CiUser className="w-4 h-4 mx-1" />
                  <p className="px-1">Account</p>
                </div>
                <a href="https://help.netflix.com/en/" target="blank">
                  <div className="flex items-center mt-1 mb-2 cursor-pointer">
                    <IoHelpCircleOutline className="w-4 h-4 mx-1" />
                    <p className="px-1">Help Center</p>
                  </div>
                </a>
                <hr />
                <div
                  className="text-sm text-center my-2 cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Sign Out of Netflix
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
