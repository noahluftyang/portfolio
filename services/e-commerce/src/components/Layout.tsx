import { Container } from '@chakra-ui/react';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Container> {}

export const Layout = (props: Props) => {
  return (
    <div>
      <Navigation />
      <Container as="main" maxWidth="container.lg" {...props} />
      <Footer />
    </div>
  );
};

const Navigation = () => {
  return <header>navigation</header>;
};

const Footer = () => {
  return <footer>footer</footer>;
};
