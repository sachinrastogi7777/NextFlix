import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopulaMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    const movieResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieResponse.json();
    dispatch(addPopularMovies(jsonResponse.results));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default usePopulaMovies;
