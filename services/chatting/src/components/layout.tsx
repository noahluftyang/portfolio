import styled from '@emotion/styled';

const LayoutWrapper = styled.section`
  height: 100vh;
`;

export const Layout = ({ children }) => (
  <LayoutWrapper className="container h-screen">{children}</LayoutWrapper>
);
