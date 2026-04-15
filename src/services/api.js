import axios from "axios";

const API_KEY = "ec109f4f8d522caa95eb814db776b420";
const BASE_URL = "https://api.themoviedb.org/3";

// 🔍 Search
export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });

// 🎬 Movie Details
export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });

// ▶️ Trailer
export const getMovieVideos = (id) =>
  axios.get(`${BASE_URL}/movie/${id}/videos`, {
    params: { api_key: API_KEY },
  });