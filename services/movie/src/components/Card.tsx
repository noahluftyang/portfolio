import { css } from '@emotion/react';
import { Movie } from 'models/Movie';
import Link from 'next/link';

export const Card = ({ id, posterPath, title }: Movie) => {
  return (
    <Link href={`/movie/${id}`}>
      <a>
        {posterPath == null ? null : (
          <img
            alt={title}
            css={css(`max-width: 100%`)}
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          />
        )}
      </a>
    </Link>
  );
};
