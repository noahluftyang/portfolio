import { MovieType } from 'models/Movie';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useMoviesSearchParams() {
  const { locale, query } = useRouter();

  return useMemo<{ keyword?: string; locale?: string; movieType: MovieType }>(() => {
    const { movieType = 'popular', query: keyword } = query;

    return { keyword, locale, movieType };
  }, [locale, query]);
}
