import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src="/Assets/background-img-2.jpg" alt="background-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
