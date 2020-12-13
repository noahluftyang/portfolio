import styled from '@emotion/styled';
import Head from 'next/head';

import { Layout } from '../components/mod';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Navigation = styled.nav`
  background-color: #e2e2e2;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

const HomePage = () => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>main</Main>

    <footer>
      <Navigation>1</Navigation>
    </footer>
  </Layout>
);

export default HomePage;
