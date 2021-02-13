import { css } from '@emotion/react';
import { Card } from 'components/Card';
import { MovieSearchForm } from 'components/MovieSearchForm';
import { TopNavigation } from 'components/TopNavigation';
import { useMovies } from 'hooks/useMovies';

const MainPage = () => {
  const {
    data: { results },
  } = useMovies();

  return (
    <section>
      <TopNavigation showBackButton={false} />
      <section
        css={css`
          padding-top: 32px;
        `}
      >
        <MovieSearchForm />
      </section>
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
};

export default MainPage;
