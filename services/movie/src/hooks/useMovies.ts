import { getMovies, searchMovies } from 'apis/movies';
import { SearchMoviesRequest } from 'models/Movie';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export function useMovies() {
  const { locale, query } = useRouter();
  const { data } = useSWR(
    ['getMovies', locale, query],
    () => {
      if (Object.keys(query).length === 0) {
        return getMovies({ language: locale });
      }

      return searchMovies((query as unknown) as SearchMoviesRequest);
    },
    { suspense: true }
  );

  return { data: data! };
}
