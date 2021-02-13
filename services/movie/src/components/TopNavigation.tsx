import { css } from '@emotion/react/macro';
import { Container } from '@stillmine/react-components';
import Router from 'next/router';
import { useCallback } from 'react';
import { useWindowScroll } from 'react-use';

interface Props {
  showBackButton?: boolean;
}

export const TopNavigation = ({ showBackButton = true }: Props) => {
  const { y } = useWindowScroll();

  const handleBackClick = useCallback(() => {
    Router.back();
  }, []);

  return (
    <header
      css={css`
        background-color: ${y > 0 ? '#fff' : 'transparent'};
        left: 0;
        position: fixed;
        right: 0;
        transition: background-color 0.2s ease;
      `}
    >
      <Container>
        {showBackButton ? (
          <button onClick={handleBackClick} type="button">
            back
          </button>
        ) : null}
      </Container>
    </header>
  );
};
