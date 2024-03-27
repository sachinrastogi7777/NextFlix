import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tailerVideoInfo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideoInfo: (state, action) => {
      state.tailerVideoInfo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovie,
  addUpomingMovies,
  addTrailerVideoInfo,
} = movieSlice.actions;

export default movieSlice.reducer;
