import { Button, Stack } from '@stillmine/react-components';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

export const MovieSearchForm = () => {
  const { handleSubmit, register } = useForm();

  return (
    <Stack.Horizontal
      as="form"
      onSubmit={handleSubmit(query => {
        Router.push({ pathname: '/search', query });
      })}
    >
      <input name="query" ref={register({ required: true })} type="search" />
      <Button type="submit">Search</Button>
    </Stack.Horizontal>
  );
};
