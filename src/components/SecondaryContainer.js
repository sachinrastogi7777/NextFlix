import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { Text_Based_On_Language } from "../utils/languageConstant";

const SecondaryContainer = () => {
  const language = useSelector((store) => store.config.lang);
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="lg:px-12 md:px-8 sm:px-6 px-4 lg:-mt-60 xl:-mt-64 md:-mt-2  sm:mt-4  relative z-20">
        <MovieList
          category={Text_Based_On_Language[language].nowPlaying}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          category={Text_Based_On_Language[language].popular}
          movies={movies?.popularMovies}
        />
        <MovieList
          category={Text_Based_On_Language[language].topRated}
          movies={movies?.topRatedMovies}
        />
        <MovieList
          category={Text_Based_On_Language[language].upcoming}
          movies={movies?.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
