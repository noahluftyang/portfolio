import { css } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { APP_ROUTE, AUTH_ROUTE } from 'constants/Route';
import { useUser } from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NavigationIcon = {
  HOME: <Home />,
};

export const AppNavigationLayout = ({ children }) => {
  const { push, replace } = useRouter();
  const { isSignedin } = useUser();

  useEffect(() => {
    if (!isSignedin) {
      replace(AUTH_ROUTE.LANDING);
    }
  }, [isSignedin, replace]);

  return (
    <main
      css={css`
        min-height: 100vh;
        padding: 16px;
      `}
    >
      {children}
      <BottomNavigation
        css={css`
          left: 0;
          right: 0;
          position: absolute;
          bottom: 0;
        `}
        onChange={(e, pathname) => {
          push(pathname);
        }}
      >
        {Object.entries(APP_ROUTE).map(([label, pathname]) => {
          return (
            <BottomNavigationAction
              key={label}
              icon={NavigationIcon[label]}
              label={label}
              value={pathname}
            />
          );
        })}
      </BottomNavigation>
    </main>
  );
};
