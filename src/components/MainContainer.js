import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[Math.floor(Math.random() * 20)];
  return (
    <div>
      <VideoTitle movieInfo={mainMovie} />
      <VideoBackground movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
