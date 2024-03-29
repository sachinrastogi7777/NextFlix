import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addCastInfo } from "../redux/movieSlice";

const useCast = (id) => {
  const dispatch = useDispatch();
  const fetchCastDetails = async () => {
    const castDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await castDetails.json();
    dispatch(addCastInfo(jsonResponse));
  };

  useEffect(() => {
    fetchCastDetails();
  }, []);
};

export default useCast;
