import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="flex justify-center relative  items-center flex-col h-full xl:pt-40  lg:pt-40 md:pt-28 sm:pt-24 pt-20 w-screen overflow-hidden">
      <div className="z-30 w-full h-20">
        <GptSearchBar />
      </div>
      <div className="w-11/12">
        <GptMovieSuggestions />
      </div>
      <div className="overflow-hidden fixed -z-10 top-0 left-0 w-full">
        <img
          src="/Assets/background-img-2.jpg"
          alt="background-img"
          className="brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150 sm:scale-y-110 object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default GptSearch;
