import React from "react";
import { IoIosPlay } from "react-icons/io";
import { BiInfoCircle } from "react-icons/bi";
import { MOVIE_POSTER_PATH } from "../utils/constant";

const VideoTitle = ({ movieInfo }) => {
  const { original_title, overview, poster_path, vote_average } = movieInfo;
  const final_overview =
    overview.length > 200 ? overview.slice(0, 200) + "..." : overview;
  return (
    <div className="pt-40 px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <img
        alt="movie-poster"
        src={MOVIE_POSTER_PATH + poster_path}
        className="w-24 my-2"
      />
      <h1 className="text-3xl font-bold mb-1">{original_title}</h1>
      <p className="w-2/5">{final_overview}</p>
      <div className="flex my-4">
        <button className="flex items-center bg-white text-black font-semibold px-4 py-1 text-sm rounded-sm hover:opacity-80">
          <IoIosPlay size={"20px"} />
          Play
        </button>
        <button className="flex items-center bg-gray-400 text-white px-2 ml-2 py-1 text-sm rounded-sm hover:opacity-80">
          <BiInfoCircle color="white" size={"18px"} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
