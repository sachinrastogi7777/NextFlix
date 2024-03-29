export const MOVIE_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

// export const MOVIE_POSTER_PATH =
//   "https://media.themoviedb.org/t/p/w440_and_h660_face";

export const MOVIE_POSTER_PATH = "https://image.tmdb.org/t/p/original";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
