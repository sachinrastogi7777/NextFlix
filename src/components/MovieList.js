import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ category, movies }) => {
  return (
    movies && (
      <div className="mx-10">
        <h1 className="py-4 text-2xl text-white">{category}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterId={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
