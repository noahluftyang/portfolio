export enum MovieType {
  '인기 상영작' = 'popular',
  '현재 상영작' = 'now_playing',
  '상영 예정작' = 'upcoming',
}

export interface GetMoviesRequest {
  language: string;
  page: number;
}

export interface SearchMoviesRequest extends GetMoviesRequest {
  query: string;
}

export interface GetMoviesResponse {
  page: number;
  results: Movie[];
  totalPages: number;
  totalResults: number;
}

export interface Movie {
  adult: boolean;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string | null;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface GetMovieRequest {
  language?: string;
}

export interface GetMovieResponse {
  adult: boolean;
  backdropPath: string | null;
  belongsToCollection: Record<string, unknown> | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  posterPath: string | null;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  releaseDate: string;
  revenue: number;
  runtime: number | null;
  spokenLanguages: SpokenLanguage[];
  status: MovieStatus;
  tagline: string | null;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  name: string;
  id: number;
  logoPath: string | null;
  originCountry: string;
}

interface ProductionCountry {
  iso33161: string;
  name: string;
}

interface SpokenLanguage {
  iso6391: string;
  name: string;
}

enum MovieStatus {
  루머 = 'Rumored',
  기획중 = 'Planned',
  제작중 = 'In Production',
  후반_작업 = 'Post Production',
  개봉 = 'Released',
  제작_취소 = 'Canceled',
}
