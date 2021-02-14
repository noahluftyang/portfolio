import { isArray } from '@stillmine/utils';
import { getMovie } from 'apis/movies';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import useSWR from 'swr';

export function useMovie() {
  const { locale, query } = useRouter();
  const id = useMemo(() => {
    if (query.id == null || isArray(query.id)) {
      return;
    }

    return Number(query.id);
  }, [query]);
  const { data } = useSWR(
    id == null ? null : ['getMovie', id, locale],
    () => getMovie(id!, { language: locale }),
    { suspense: true }
  );

  return { data: data! };
}
