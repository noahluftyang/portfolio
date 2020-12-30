import { css } from '@emotion/react';
import { flex, gutter } from '@portfolio/styles';
import { Button } from 'components/Button';
import { AUTH_ROUTE } from 'constants/Route';

const AuthLandingPage = () => {
  return (
    <main css={[css(flex({ align: 'flex-end', justify: 'center' })), css(`height: 100vh`)]}>
      <section
        css={[
          css(flex({ align: 'stretch', direction: 'column' })),
          css(gutter('vertical', 16)),
          css`
            flex: 1;
            padding: 16px;
          `,
        ]}
      >
        <h1 css={css(`text-align: center`)}>환영합니다</h1>
        <Button.Link href={AUTH_ROUTE.Signup} variant="contained">
          회원가입
        </Button.Link>
        <Button.Link href={AUTH_ROUTE.Signin} variant="contained">
          로그인
        </Button.Link>
      </section>
    </main>
  );
};

export default AuthLandingPage;
