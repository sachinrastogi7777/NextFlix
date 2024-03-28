import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addUpomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upomingMovies = useSelector((store) => store.movies.upomingMovies);
  const fetchMovieData = async () => {
    const movieResponse = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieResponse.json();
    dispatch(addUpomingMovies(jsonResponse.results));
  };

  useEffect(() => {
    !upomingMovies && fetchMovieData();
  }, []);
};

export default useUpcomingMovies;
