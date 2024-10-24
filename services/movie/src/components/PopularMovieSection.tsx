import { css } from '@emotion/react';
import { mq } from '@stillmine/styles';
import { Card } from 'components/Card';
import { useMovies } from 'hooks/useMovies';
import React from 'react';

export const PopularMovieSection = () => {
  const {
    data: { results },
  } = useMovies();

  return (
    <section>
      <h2>인기 상영작</h2>
      <div
        css={[
          mq({
            gridTemplateColumns: [3, 4, 5].map(columnCount => `repeat(${columnCount},1fr)`),
          }),
          css`
            display: grid;
            gap: 8px;
          `,
        ]}
      >
        {results.map(movie => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};
