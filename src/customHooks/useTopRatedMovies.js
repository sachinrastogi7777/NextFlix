import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addTopRatedMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    const movieResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieResponse.json();
    dispatch(addTopRatedMovie(jsonResponse.results));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useTopRatedMovies;
