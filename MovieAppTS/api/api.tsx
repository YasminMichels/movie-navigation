import axios from 'axios';
import { Movie } from '../types/movies';

const API_KEY = 'SUA_API_KEY_DO_TMDB';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
    },
  });
  return response.data;
};
