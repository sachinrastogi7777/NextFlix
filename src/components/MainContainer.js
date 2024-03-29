import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[Math.floor(Math.random() * 20)];
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <VideoBackground movieId={mainMovie?.id} />
      </div>
      <div className="absolute top-0">
        <VideoTitle movieInfo={mainMovie} />
      </div>
    </div>
  );
};

export default MainContainer;
