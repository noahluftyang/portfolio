import { css } from '@emotion/react';
import { lg, md, mq, sm, xl, xxl } from 'styles/mediaQuery';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: any;
}

export function Container({ as: Component = 'div', ...props }: Props) {
  return (
    <Component
      css={[
        mq({ maxWidth: [null, sm, md, lg, xl, xxl] }),
        css`
          margin: 0 auto;
          padding: 1rem;
          width: 100%;
        `,
      ]}
      {...props}
    />
  );
}
