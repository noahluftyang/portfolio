import { css } from '@emotion/react';
import { TopNavigation } from 'components/TopNavigation';
import { useMovies } from 'hooks/useMovies';
import { Movie } from 'models/Movie';
import Link from 'next/link';

export default function MainPage() {
  const {
    data: { results },
  } = useMovies();

  return (
    <section>
      <TopNavigation showBackButton={false} />
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        `}
      >
        {results.map(movie => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}

function Card({ id, posterPath, title }: Movie) {
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
}
