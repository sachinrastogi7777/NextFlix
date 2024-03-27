import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tailerVideoInfo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideoInfo: (state, action) => {
      state.tailerVideoInfo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideoInfo } = movieSlice.actions;

export default movieSlice.reducer;
