import { css } from '@emotion/react';
import { MovieSearchForm } from 'components/MovieSearchForm';
import { MovieTypeTab } from 'components/MovieTypeTab';
import { PopularMovieSection } from 'components/PopularMovieSection';
import { TopNavigation } from 'components/TopNavigation';
import { UpcomingMovieSection } from 'components/UpcomingMovieSection';

const MainPage = () => {
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
      <MovieTypeTab />
      <PopularMovieSection />
      <UpcomingMovieSection />
    </section>
  );
};

export default MainPage;
