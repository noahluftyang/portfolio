import { apiClient } from 'apis/apiClient';
import {
  GetMovieRequest,
  GetMovieResponse,
  GetMoviesRequest,
  GetMoviesResponse,
  MovieType,
  SearchMoviesRequest,
} from 'models/Movie';

export function searchMovies(params?: SearchMoviesRequest) {
  return apiClient.get<GetMoviesResponse>('/search/movie', { params });
}

export function getMovies(movieType: MovieType, params?: Partial<GetMoviesRequest>) {
  return apiClient.get<GetMoviesResponse>(`/movie/${movieType}`, { params });
}

export function getMovie(id: number, params?: GetMovieRequest) {
  return apiClient.get<GetMovieResponse>(`/movie/${id}`, { params });
}
