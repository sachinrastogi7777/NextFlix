import React from "react";
import { MOVIE_POSTER_PATH } from "../utils/constant";

const MovieInfoUpper = ({ info }) => {
  return (
    <div className="flex flex-row justify-between gap-3 xl:gap-1 h-[30vh] sm:h-[80vh] md:h-[100vh] w-[100%] items-start px-3 xl:px-20 pt-[15%] xl:pt-28 ">
      <div className="w-4/12 xl:w-3.5/12">
        <img
          alt="movieposter"
          src={MOVIE_POSTER_PATH + info?.poster_path}
          className="w-24 sm:w-48 md:w-60 lg:w-64 xl:w-72 rounded-2xl"
        />
      </div>

      <div className="flex flex-col justify-start items-start w-9/12 xl:w-8/12">
        <div>
          <span className="text-base sm:text-2xl md:text-4xl lg:text-6xl font-semibold sm:font-bold md:font-extrabold text-gray-50">
            {info.title}
          </span>
          <span className="pl-2 lg:pl-4 text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300">
            ({info.release_date.slice(0, 4)})
          </span>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-0 lg:gap-6 pt-0 sm:pt-2 md:pt-5 lg:pt-6 xl:pt-7 text-white">
          <div className="-mb-2 md:m-0">
            <span className="font-medium text-white lg:pr-2 md:pr-1.5 pr-0.5 text-[8px] sm:text-sm lg:text-base">
              Date:
            </span>
            <span className="px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 lg:py-1 text-[8px] sm:text-sm lg:text-base text-white md:bg-black md:opacity-70 md:border md:rounded-2xl md:border-black">
              {info?.release_date}
            </span>
          </div>
          <div className="-mb-2 md:m-0">
            <span className="font-medium text-white lg:pr-2 md:pr-1.5 pr-0.5 text-[8px] sm:text-sm lg:text-base">
              Genure:
            </span>
            {info?.genres?.map((gen) => (
              <span
                key={gen?.name}
                className="px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 lg:py-1 text-[8px] sm:text-sm lg:text-base text-white md:bg-black md:opacity-70 md:border md:rounded-2xl md:border-black"
              >
                {gen?.name}
              </span>
            ))}
          </div>
          <div>
            <span className="font-medium text-white lg:pr-2 md:pr-1.5 pr-0.5 text-[8px] sm:text-sm lg:text-base">
              Runtime:
            </span>
            <span className="px-1 sm:px-2 md:px-3 lg:px-4 py-0.5 lg:py-1 text-[8px] sm:text-sm lg:text-base text-white md:bg-black md:opacity-70 md:border md:rounded-2xl md:border-black">
              {Math.floor(info?.runtime / 60)} Hrs
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center py-0.5 lg:py-4 md:py-3 sm:py-2 xl:py-5">
          <span className="md:text-lg sm:text-base text-[9px] font-semibold text-white lg:pr-2 sm:pr-1 pr-0.5">
            Tagline:{" "}
          </span>
          <span className="text-gray-400 xl:text-2xl lg:text-2xl md:text-xl sm:text-base text-[9px] italic">
            "{info?.tagline}"
          </span>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-start md:items-start md:w-12/12 xl:w-11/12">
          <span className="text-white font-semibold  text-[9px] lg:text-xl md:text-lg sm:text-base  xl:text-xl">
            Overview:{" "}
          </span>
          <span className="text-white text-[7px] hidden sm:block lg:text-lg md:text-base text-sm  xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview}
          </span>
          <span className="text-white text-[7px] sm:hidden xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview?.length > 180
              ? `${info?.overview?.slice(0, 180)}...`
              : info?.overview}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoUpper;
