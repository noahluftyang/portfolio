import 'sanitize.css';

import { css, Global } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          word-break: keep-all;
        }
      `}
    />
  );
}
