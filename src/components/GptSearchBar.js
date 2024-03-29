import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text_Based_On_Language } from "../utils/languageConstant";
import openai from "../utils/openai";
import { useNavigate } from "react-router-dom";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addGptMoviesResult } from "../redux/gptSlice";

const GptSearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      MOVIE_API_OPTIONS
    );
    const jsonResponse = await movieData.json();
    return jsonResponse.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptSearchResult?.choices) {
      navigate("/error");
    }
    const movieList =
      gptSearchResult?.choices?.[0]?.message?.content.split(", ");
    console.log(movieList);

    const promiseArray = movieList.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMoviesResult({ movieNames: movieList, movieResults: tmdbResults })
    );
  };

  return (
    <form
      className="w-11/12 xl:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        placeholder={Text_Based_On_Language[language].gptSearchPlaceholder}
        className="xl:text-base lg:text-base md:text-sm sm:text-sm text-xs rounded-l-full font-normal text-black border-black xl:pl-5 md:pl-4 sm:pl-4 pl-3 lg:pl-5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:w-9/12 md:w-10/12 w-9/12 sm:w-10/12 lg:w-9/12"
      />
      <button
        className="bg-red-700 lg:py-3 md:py-2.5 sm:py-2 py-1.5 sm:px-4 px-2 md:px-6 lg:px-8 font-semibold xl:text-base lg:text-base sm:text-sm text-xs md:w-2.5/12 sm:w-2/12 w-1.5/12 lg:w-3/12 rounded-r-full"
        onClick={() => handleGptSearch()}
      >
        {Text_Based_On_Language[language].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
