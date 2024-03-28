import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addTrailerVideoInfo } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieDetails = async () => {
    const movieInfo = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieInfo.json();
    const filteredResponse = jsonResponse.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const movieTrailer =
      filteredResponse.length === 0
        ? jsonResponse.results[0]
        : filteredResponse;
    dispatch(addTrailerVideoInfo(movieTrailer[0]));
  };

  useEffect(() => {
    !trailerVideo && getMovieDetails();
  }, []);
};

export default useMovieTrailer;
