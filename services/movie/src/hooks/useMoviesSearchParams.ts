import { isArray } from '@stillmine/utils';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

interface MoviesSearchParams {
  keyword?: string;
  locale?: string;
  movieType: string;
}

export function useMoviesSearchParams() {
  const { locale, query } = useRouter();

  return useMemo<MoviesSearchParams>(() => {
    const { movieType = 'popular', query: keyword } = query;

    if (isArray(movieType) || isArray(keyword)) {
      return { locale, movieType: 'popular' };
    }

    return { keyword, locale, movieType };
  }, [locale, query]);
}
