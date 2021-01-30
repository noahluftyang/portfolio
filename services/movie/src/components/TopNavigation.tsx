import Router from 'next/router';
import { Container } from 'components/Container';
import { useWindowScroll } from 'react-use';
import { css } from '@emotion/react/macro';

interface Props {
  showBackButton?: boolean;
}

export function TopNavigation({ showBackButton = true }: Props) {
  const { y } = useWindowScroll();

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
      <Container>{showBackButton ? <button onClick={Router.back}>back</button> : null}</Container>
    </header>
  );
}
