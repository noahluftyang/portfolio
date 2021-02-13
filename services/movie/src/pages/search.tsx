import { css } from '@emotion/react';
import { Stack } from '@stillmine/react-components';
import { resetList } from '@stillmine/styles';
import { TopNavigation } from 'components/TopNavigation';
import { useMovies } from 'hooks/useMovies';
import Link from 'next/link';
import React from 'react';

const SearchPage = () => {
  const {
    data: { results },
  } = useMovies();

  return (
    <section>
      <TopNavigation />
      <Stack.Vertical align="stretch" css={[resetList, css(`padding-top: 56px`)]} gutter={8}>
        {results.map(({ id, posterPath, releaseDate, title }) => {
          return (
            <li key={id}>
              <Link href={`/movie/${id}`}>
                <Stack.Horizontal align="center" as="a">
                  {posterPath == null ? null : (
                    <img
                      alt={title}
                      css={css(`max-height: 140px`)}
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    />
                  )}
                  <div>
                    <h3>{title}</h3>
                    <p>{releaseDate}</p>
                  </div>
                </Stack.Horizontal>
              </Link>
            </li>
          );
        })}
      </Stack.Vertical>
    </section>
  );
};

export default SearchPage;
