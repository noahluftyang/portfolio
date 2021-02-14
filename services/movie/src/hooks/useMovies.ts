import { getMovies, searchMovies } from 'apis/movies';
import { useMoviesSearchParams } from 'hooks/useMoviesSearchParams';
import useSWR from 'swr';

export function useMovies() {
  const { locale, movieType } = useMoviesSearchParams();
  const { data } = useSWR(
    ['getMovies', movieType, locale],
    () => getMovies(movieType, { language: locale }),
    { suspense: true }
  );

  return { data: data! };
}

export function useMoviesByKeyword() {
  const { keyword } = useMoviesSearchParams();
  const { data } = useSWR(
    keyword == null ? null : ['searchMovies', keyword],
    () => searchMovies({ query: keyword! }),
    { suspense: true }
  );

  return { data: data! };
}
