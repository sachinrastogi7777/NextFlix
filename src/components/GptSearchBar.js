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
    console.log(tmdbResults);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={Text_Based_On_Language[language].gptSearchPlaceholder}
          className="px-4 py-2 my-2 col-span-10 rounded-l-full focus:outline-none"
        />
        <button
          className="bg-red-800 text-white my-2 py-2 rounded-r-full col-span-2"
          onClick={() => handleGptSearch()}
        >
          {Text_Based_On_Language[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
