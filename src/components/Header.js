import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
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
import { IoHome } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { addCastInfo } from "../redux/movieSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.user);
  const userName = userObject?.displayName;
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);
  const language = useSelector((store) => store.config.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
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
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleBackClick = () => {
    dispatch(addCastInfo());
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-50 flex justify-between overflow-hidden lg:px-10 md:px-10 sm:px-8 px-4">
      <Toaster toastOptions={{ duration: 2000, position: "top-right" }} />
      <Link to={"/browse"}>
        <img
          className="lg:w-48 sm:w-28 w-20 md:w-40 md:py-4 py-2"
          src="/Assets/netflix_logo.png"
          alt="netflix-logo"
        />
      </Link>
      <div className="flex flex-row justify-center items-center">
        {userObject && (
          <div className="flex justify-center items-center flex-row lg:gap-2 gap-0.5 sm:gap-1">
            <span className="text-white pr-2 font-normal text-xs md:font-semibold md:text-lg">
              {Text_Based_On_Language[language].welcome} {userName}
            </span>
            {gptSearchView ? (
              <>
                <button
                  className="bg-red-700 lg:text-base hidden md:flex md:items-center text-white font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                  onClick={handleGptSearchClick}
                >
                  <IoHome className="w-4 sm:w-6 lg:pr-1 pr-0.5" />
                  {Text_Based_On_Language[language].home}
                </button>
                <button
                  className="bg-red-700 text-sm flex items-center md:hidden text-white font-normal hover:opacity-80 py-1 px-0.5 rounded-md mr-0.5"
                  onClick={handleGptSearchClick}
                >
                  <IoHome className="w-4 sm:w-6 lg:pr-1 pr-0.5" />
                  {Text_Based_On_Language[language].home}
                </button>
              </>
            ) : (
              <>
                {window.location.pathname.includes("movieinfo") ? (
                  <Link to={"/browse"}>
                    <button
                      className="bg-red-700 text-sm lg:text-base flex items-center text-white font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                      onClick={handleBackClick}
                    >
                      <IoArrowBackOutline
                        color="white"
                        className="w-4 sm:w-6 lg:pr-1 pr-0.5"
                      />
                      {Text_Based_On_Language[language].back}
                    </button>
                  </Link>
                ) : (
                  <>
                    <button
                      className="bg-red-700 lg:text-base hidden md:flex md:items-center text-white font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                      onClick={handleGptSearchClick}
                    >
                      <GoSearch
                        color="white"
                        className="w-4 sm:w-6 lg:pr-1 pr-0.5"
                      />
                      {Text_Based_On_Language[language].gptSearch}
                    </button>
                    <button
                      className="bg-red-700 text-sm flex items-center md:hidden text-white font-normal hover:opacity-80 py-1 px-0.5 rounded-md mr-0.5"
                      onClick={handleGptSearchClick}
                    >
                      <GoSearch
                        color="white"
                        className="w-4 sm:w-6 lg:pr-1 pr-0.5"
                      />
                      GPT
                    </button>
                  </>
                )}
                {/* <Link to={"/browse"}>
                  <button
                    className="bg-red-700 lg:text-base hidden md:flex md:items-center text-white font-normal hover:opacity-80 py-1 px-2 rounded-md mr-1.5"
                    onClick={handleGptSearchClick}
                  >
                    <GoSearch
                      color="white"
                      className="w-4 sm:w-6 lg:pr-1 pr-0.5"
                    />
                    {Text_Based_On_Language[language].gptSearch}
                  </button>
                </Link>
                <Link to={"/browse"}>
                  <button
                    className="bg-red-700 text-sm flex items-center md:hidden text-white font-normal hover:opacity-80 py-1 px-0.5 rounded-md mr-0.5"
                    onClick={handleGptSearchClick}
                  >
                    <GoSearch
                      color="white"
                      className="w-4 sm:w-6 lg:pr-1 pr-0.5"
                    />
                    GPT
                  </button>
                </Link> */}
              </>
            )}
            <button
              className="text-white hidden md:flex items-center lg:text-base md:text-base font-normal hover:opacity-80 py-1 px-1 rounded-md mr-2.5 bg-zinc-700"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="pr-0.5 md:pr-1" />
              {Text_Based_On_Language[language].signOut}
            </button>
            <button
              className="text-white md:hidden text-sm font-normal hover:opacity-80 py-2 px-1.5 rounded-md mr-1 bg-zinc-700"
              onClick={handleSignOut}
            >
              <FaSignOutAlt className="pr-0.5 md:pr-1" />
            </button>
          </div>
        )}
        <select
          className="bg-red-800 text-white border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 md:px-2 md:py-1 rounded-md w-24 md:w-36"
          onChange={handleChangeLanguage}
        >
          {Supported_Language.map((lang) => (
            <option
              key={lang.identifier}
              className="text-white md:px-2 md:py-1 sm:px-1.5 sm:py-0.5 text-sm md:text-base"
              value={lang.identifier}
            >
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
