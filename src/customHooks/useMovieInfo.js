import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addMovieInfo } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieInfo = (id) => {
  const dispatch = useDispatch();
  const fetchMovieDetails = async () => {
    const movieDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieDetails.json();
    dispatch(addMovieInfo(jsonResponse));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);
};

export default useMovieInfo;
