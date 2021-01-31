import { getMovies } from 'apis/movies';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export function useMovies() {
  const { locale } = useRouter();
  const { data } = useSWR(['getMovies', locale], () => getMovies({ language: locale }), {
    suspense: true,
  });

  return { data: data! };
}
