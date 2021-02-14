import { Tab } from '@stillmine/react-components';
import { useMoviesSearchParams } from 'hooks/useMoviesSearchParams';
import { MovieType } from 'models/Movie';
import Router from 'next/router';
import React, { useCallback } from 'react';

export const MovieTypeTab = () => {
  const params = useMoviesSearchParams();

  const handleChange = useCallback(
    (movieType: MovieType) => {
      Router.push({ pathname: '/', query: { ...params, movieType } });
    },
    [params]
  );

  return (
    <Tab onChange={handleChange}>
      {Object.entries(MovieType).map(([label, value]) => {
        return <Tab.Item key={value}>{label}</Tab.Item>;
      })}
    </Tab>
  );
};
