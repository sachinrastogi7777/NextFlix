import React from "react";
import { MOVIE_POSTER_PATH } from "../utils/constant";

const MovieCard = ({ posterId, title }) => {
  if (!posterId) return null;
  return (
    <div className="xl:w-[170px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[90px] cursor-pointer hover:opacity-90 hover:scale-105">
      <img
        alt="movie-poster"
        src={MOVIE_POSTER_PATH + posterId}
        className="w-full stroke animate  rounded-lg"
      />
      <span className="text-gray-300 hidden md:block lg:text-base md:text-sm ">
        {title?.length > 18 ? `${title.slice(0, 18)}...` : title}{" "}
      </span>
      <span className="text-gray-300  md:hidden sm:text-sm text-xs">
        {title?.length > 12 ? `${title.slice(0, 12)}...` : title}{" "}
      </span>
    </div>
  );
};

export default MovieCard;
