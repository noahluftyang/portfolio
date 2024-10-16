import { css } from '@emotion/react';
import { Container } from '@stillmine/react-components';
import { TopNavigation } from 'components/TopNavigation';
import { formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useMovie } from 'hooks/useMovie';

const MoviePage = () => {
  const { data } = useMovie();

  const { backdropPath, genres, overview, posterPath, releaseDate, runtime, tagline, title } = data;

  return (
    <section>
      <TopNavigation />
      <div
        css={css`
          align-items: flex-end;
          background-image: url(${`https://image.tmdb.org/t/p/w500/${backdropPath}`});
          display: flex;
          height: 35vh;
        `}
      >
        <img
          alt={title}
          css={css`
            border-radius: 4px;
            margin: 16px;
          `}
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          width={100}
        />
      </div>
      <Container>
        <h1>{title}</h1>
        <p>
          {releaseDate} &middot;{' '}
          {runtime == null ? null : formatDuration({ minutes: runtime }, { locale: ko })} &middot;{' '}
          {genres.map(({ name }) => name).join('/')}
        </p>
        <p>{tagline}</p>
        <p>{overview}</p>
      </Container>
    </section>
  );
};

export default MoviePage;
