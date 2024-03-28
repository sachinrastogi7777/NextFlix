import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { toggleGptSearchView } from "../redux/gptSlice";
import {
  Supported_Language,
  Text_Based_On_Language,
} from "../utils/languageConstant";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const userObject = useSelector((state) => state.user);
  const userName = userObject?.displayName;
  const firstName = userName?.split(" ")[0];
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);
  const language = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when components unmounts.
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          toast.success("Loged Out Successfully");
        }, 200);
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView(true));
  };

  const handleHomeClick = () => {
    dispatch(toggleGptSearchView(false));
    dispatch(changeLanguage("en"));
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 2000, position: "top-right" }} />
      {location.pathname === "/" ? (
        <div className="absolute px-36 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
          <img
            className="w-48"
            src="/Assets/netflix_logo.png"
            alt="netflix-logo"
          />
        </div>
      ) : (
        <div className="absolute px-10 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-36"
              src="/Assets/netflix_logo.png"
              alt="netflix-logo"
            />
            <ul className="flex text-white px-10 focus:font-semibold cursor-pointer">
              <Link to="/browse" onClick={handleHomeClick}>
                <li className="px-2 font-bold">
                  {Text_Based_On_Language[language].home}
                </li>
              </Link>
              <li className="px-2">
                {Text_Based_On_Language[language].tvShow}
              </li>
              <li className="px-2">{Text_Based_On_Language[language].movie}</li>
              <li className="px-2">
                {Text_Based_On_Language[language].newPopular}
              </li>
              <li className="px-2">
                {Text_Based_On_Language[language].myList}
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex items-center">
              {gptSearchView && (
                <select
                  className="m-2 p-1 bg-red-800 text-white focus:outline-none rounded-md"
                  onChange={handleChangeLanguage}
                >
                  {Supported_Language.map((lang) => (
                    <option
                      key={lang.identifier}
                      className="px-2"
                      value={lang.identifier}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="flex text-white bg-red-800 px-2 py-1 rounded-md"
                onClick={handleGptSearchClick}
              >
                GPT
                <GoSearch
                  color="white"
                  className="w-6 h-6 mx-1 cursor-pointer"
                />
              </button>
              <IoMdNotificationsOutline
                color="white"
                className="w-6 h-6 mx-4 cursor-pointer"
              />
              <img
                className="w-6 h-6 rounded-sm"
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
              <div className="absolute w-auto my-1 px-2 bg-black text-white rounded-md right-2 top-[50px]">
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
                  <p className="px-1">
                    {Text_Based_On_Language[language].account}
                  </p>
                </div>
                <a href="https://help.netflix.com/en/" target="blank">
                  <div className="flex items-center mt-1 mb-2 cursor-pointer">
                    <IoHelpCircleOutline className="w-4 h-4 mx-1" />
                    <p className="px-1">
                      {Text_Based_On_Language[language].helpCenter}
                    </p>
                  </div>
                </a>
                <hr />
                <div
                  className="text-sm text-center my-2 cursor-pointer"
                  onClick={handleSignOut}
                >
                  {Text_Based_On_Language[language].signOut}
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
