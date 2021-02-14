import { getMovies, searchMovies } from 'apis/movies';
import { useMoviesSearchParams } from 'hooks/useMoviesSearchParams';
import { MovieType } from 'models/Movie';
import useSWR from 'swr';

export function useMovies() {
  const { locale, movieType } = useMoviesSearchParams();
  const { data } = useSWR(
    ['getMovies', movieType, locale],
    () => getMovies(movieType as MovieType, { language: locale }),
    { suspense: true }
  );

  return { data: data! };
}

export function useMoviesByKeyword() {
  const { locale, keyword } = useMoviesSearchParams();
  const { data } = useSWR(
    keyword == null ? null : ['searchMovies', keyword, locale],
    () => searchMovies({ language: locale, query: keyword! }),
    { suspense: true }
  );

  return { data: data! };
}
