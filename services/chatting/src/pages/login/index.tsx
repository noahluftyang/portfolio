import styled from '@emotion/styled';
import Link from 'next/link';

import { Layout } from '../../components/mod';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
`;

const HeroContent = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const LoginPage = () => (
  <Layout>
    <Main>
      <HeroContent>
        <h1>Welcome to Chatting</h1>
        <p>Get started with your Email.</p>
      </HeroContent>
      <Link href="/login/email">
        <a>Continue with Email</a>
      </Link>
    </Main>
  </Layout>
);

export default LoginPage;
