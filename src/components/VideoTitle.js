import React from "react";
import { IoIosPlay } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Text_Based_On_Language } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const VideoTitle = ({ movieInfo }) => {
  const language = useSelector((store) => store.config.lang);
  const { original_title, overview, id } = movieInfo;
  return (
    <div className="w-screen aspect-video lg:pt-[13%] sm:pt-[25%]  md:pt-[20%] pt-[20%] lg:px-28 md:px-20 sm:px-10 px-8 overflow-hidden bg-gradient-to-r from-black ">
      <div className="flex justify-start items-start flex-col">
        <span className="lg:w-5/12 md:w-7/12 sm:w-6/12 w-6/12 lg:text-4xl md:text-4xl  text-base sm:text-3xl block xl:text-5xl text-white font-bold">
          {original_title}
        </span>
        <span className="lg:w-4/12 md:w-5/12  sm:w-5/12 w-7/12 text-white lg:text-sm md:text-sm text-[7px] hidden sm:block tracking-wide font-normal lg:pt-3 pt-0.5 md:pt-2 sm:pt-2">
          {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
        </span>
        <span className="lg:w-4/12 md:w-5/12  sm:w-5/12 w-5/12 text-white lg:text-sm md:text-xs text-[7px] sm:hidden tracking-wide font-normal lg:pt-3 pt-0.5 md:pt-2">
          {overview.length > 60 ? `${overview.slice(0, 60)}...` : overview}
        </span>
        <div className="flex justify-evenly items-start flex-row gap-2 lg:pt-6 sm:pt-3 pt-1.5 md:pt-5">
          <button className="md:px-4 cursor-pointer md:py-1.5 px-2 py-0.5 lg:px-4 lg:py-1.5 rounded-md lg:text-lg md:text-base sm:text-xs text-[9px] text-black bg-white hover:opacity-80 font-semibold flex items-center">
            <IoIosPlay className="pr-1 lg:text-lg md:text-base sm:text-xs text-[9px]" />
            {Text_Based_On_Language[language].playNow}
          </button>
          <Link to={"/movieinfo/" + id}>
            <button className="md:px-4 md:py-1.5  cursor-pointer px-2 py-0.5 lg:px-4 lg:py-1.5 rounded-md lg:text-lg md:text-base sm:text-xs text-[9px] text-white bg-zinc-600 hover:opacity-80 font-semibold flex items-center">
              <BiInfoCircle className="ri-information-line pr-1 lg:text-xl  md:text-base sm:text-xs text-[9px]" />
              {Text_Based_On_Language[language].moreInfo}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
