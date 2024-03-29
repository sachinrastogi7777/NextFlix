import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="lg:px-12 md:px-8 sm:px-6 px-4 lg:-mt-60 xl:-mt-64 md:-mt-2  sm:mt-4  relative z-20">
        <MovieList category={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList category={"Popular"} movies={movies?.popularMovies} />
        <MovieList category={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList category={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
