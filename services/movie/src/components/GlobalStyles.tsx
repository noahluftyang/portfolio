import 'sanitize.css';

import { css, Global } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          word-break: keep-all;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
      `}
    />
  );
};
