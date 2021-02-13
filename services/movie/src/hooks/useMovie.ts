import { getMovie } from 'apis/movies';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import useSWR from 'swr';
import { isArray } from 'utils/is';

export function useMovie() {
  const { locale, query } = useRouter();
  const id = useMemo(() => {
    if (query.id == null || isArray(query.id)) {
      return;
    }

    return query.id;
  }, [query]);
  const { data } = useSWR(
    id == null ? null : ['getMovie', id, locale],
    () => getMovie(Number(id!), { language: locale }),
    { suspense: true }
  );

  return { data: data! };
}
