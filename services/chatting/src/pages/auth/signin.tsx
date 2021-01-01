import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Flex } from '@portfolio/components';
import { SigninForm, SSRSuspense } from 'components/mod';

const AuthSigninPage = () => {
  return (
    <Flex
      align="center"
      as="main"
      css={css`
        height: 100vh;
        padding: 16px;
      `}
      direction="column"
      justify="center"
    >
      <Typography component="h1" variant="h3">
        환영합니다!
      </Typography>
      <Typography variant="subtitle1">로그인하세요.</Typography>
      <SSRSuspense fallback={<Skeleton />}>
        <SigninForm />
      </SSRSuspense>
    </Flex>
  );
};

export default AuthSigninPage;
