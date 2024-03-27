import React from "react";
import { MOVIE_POSTER_PATH } from "../utils/constant";

const MovieCard = ({ posterId }) => {
  return (
    <div className="w-36 px-2 hover:scale-125 cursor-pointer">
      <img
        alt="movie-poster"
        src={MOVIE_POSTER_PATH + posterId}
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
