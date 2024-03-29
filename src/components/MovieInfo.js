import React from "react";
import { useParams } from "react-router-dom";
import useMovieInfo from "../customHooks/useMovieInfo";
import { useSelector } from "react-redux";
import Header from "./Header";
import { MOVIE_POSTER_PATH } from "../utils/constant";
import ShimmerUI from "../Layout/ShimmerUI";
import MovieInfoUpper from "./MovieInfoUpper";
import MovieInfoMiddle from "./MovieInfoMiddle";

const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);

  const movieInfo = useSelector((store) => store.movies.movieInfo);
  if (!movieInfo) return <ShimmerUI />;
  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          alt="movieinfobg"
          src={MOVIE_POSTER_PATH + movieInfo?.backdrop_path}
          className="w-12/12 mx-auto brightness-[.3] scale-125 xl:scale-105"
        />
      </div>
      <MovieInfoUpper info={movieInfo} />
      <MovieInfoMiddle id={movieInfo?.id} info={movieInfo} />
    </div>
  );
};

export default MovieInfo;
