import React from "react";
import { useSelector } from "react-redux";
import { Text_Based_On_Language } from "../utils/languageConstant";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={Text_Based_On_Language[language].gptSearchPlaceholder}
          className="px-4 py-2 my-2 col-span-10 rounded-l-full focus:outline-none"
        />
        <button className="bg-red-800 text-white my-2 py-2 rounded-r-full col-span-2">
          {Text_Based_On_Language[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
