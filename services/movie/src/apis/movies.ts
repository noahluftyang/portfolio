import { apiClient } from 'apis/apiClient';
import {
  GetMovieRequest,
  GetMovieResponse,
  GetMoviesRequest,
  GetMoviesResponse,
} from 'models/Movie';

export function getMovies(params?: GetMoviesRequest) {
  return apiClient.get<GetMoviesResponse>('/movie/popular', { params });
}

export function getMovie(id: number, params?: GetMovieRequest) {
  return apiClient.get<GetMovieResponse>(`/movie/${id}`, { params });
}
