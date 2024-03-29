import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store?.movies?.tailerVideoInfo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen overflow-hidden">
      <div>
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerInfo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
