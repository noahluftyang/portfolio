import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { SignupForm, SSRSuspense } from 'components/mod';

const AuthSignupPage = () => {
  return (
    <main css={css(`padding: 16px`)}>
      <Typography component="h1" variant="h3">
        회원가입
      </Typography>
      <SSRSuspense fallback={<Skeleton />}>
        <SignupForm />
      </SSRSuspense>
    </main>
  );
};

export default AuthSignupPage;
