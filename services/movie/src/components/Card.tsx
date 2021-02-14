import { css } from '@emotion/react';
import { margin } from '@stillmine/styles';
import { Movie } from 'models/Movie';
import Link from 'next/link';
import React from 'react';

export const Card = ({ id, posterPath, title, voteAverage }: Movie) => {
  return (
    <Link href={`/movie/${id}`}>
      <a>
        {posterPath == null ? null : (
          <img
            alt={title}
            css={css(`max-width: 100%`)}
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          />
        )}
        <h3 css={margin.top(8)}>{title}</h3>
        <p>{voteAverage}점</p>
      </a>
    </Link>
  );
};
