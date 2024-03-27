import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    const movieResponse = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieResponse.json();
    dispatch(addNowPlayingMovies(jsonResponse.results));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useNowPlayingMovies;
