import { css, Global } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        h1,
        h2,
        h3 {
          margin: 0;
        }
      `}
    />
  );
};
